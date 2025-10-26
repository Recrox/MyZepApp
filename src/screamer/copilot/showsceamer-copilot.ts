import { ScriptPlayer } from "zep-script";
import { TRIGGER_SCREAMER } from "../Screamer1";
import { SoundAsset } from "../../class/SoundAsset";
import { ImageAsset } from "../../class/ImageAsset";

const SCREAM_SOUND: SoundAsset = "assets/sounds/scream.mp3";
const DEFAULT_IMAGE: ImageAsset = "assets/images/screamer1.png";

export type ScreamerOptions = {
  sound?: SoundAsset | null;
  img?: ImageAsset | null;
  volume?: number;
  delayMs?: number;
  randomizeDelay?: boolean;
  screamDurationMs?: number;
  cooldownMs?: number;
  enableShake?: boolean;
  safeMode?: boolean;
  onSpawnMapObject?: (player: ScriptPlayer) => void;
};

const DEFAULT_OPTIONS: Required<ScreamerOptions> = {
  sound: SCREAM_SOUND,
  img: DEFAULT_IMAGE,
  volume: 1.0,
  delayMs: 400,
  randomizeDelay: true,
  screamDurationMs: 3000,
  cooldownMs: 30_000,
  enableShake: true,
  safeMode: false,
  onSpawnMapObject: () => {}
};

const lastScreamAt = new Map<string, number>();
const optOut = new Set<string>();

export function setPlayerScreamerOptOut(player: ScriptPlayer, exclude: boolean) {
  if (!player || !player.name) return;
  if (exclude) optOut.add(player.name);
  else optOut.delete(player.name);
}

export function isPlayerScreamerOptOut(player: ScriptPlayer) {
  return player && player.name ? optOut.has(player.name) : false;
}

/**
 * Wrappers that try multiple runtime API names and fall back safely.
 * We cast to any to avoid TypeScript errors when SDK types don't include optional helpers.
 */
function showCenterLabelToPlayer(player: ScriptPlayer | null, text: string, durationMs: number) {
  const s: any = ScriptApp as any;
  // try several possible signatures that different SDK versions might expose
  if (player) {
    if (typeof s.showCenterLabelForPlayer === "function") {
      return s.showCenterLabelForPlayer(player, text, durationMs);
    }
    if (typeof s.showCenterLabelToPlayer === "function") {
      return s.showCenterLabelToPlayer(player, text, durationMs);
    }
    if (typeof s.showLabel === "function" && typeof s.showLabelForPlayer === "function") {
      // some SDKs expose showLabel/showLabelForPlayer
      return s.showLabelForPlayer(player, text, durationMs);
    }
  }
  // fallback: global center label
  if (typeof ScriptApp.showCenterLabel === "function") {
    return ScriptApp.showCenterLabel(text, durationMs);
  }
  // no-op fallback
}

function playSoundForPlayerIfPossible(player: ScriptPlayer | null, sound: SoundAsset, opts?: { volume?: number }) {
  const s: any = ScriptApp as any;
  try {
    if (player) {
      if (typeof s.playSoundForPlayer === "function") {
        return s.playSoundForPlayer(player, sound, opts);
      }
      if (typeof s.playSoundToPlayer === "function") {
        return s.playSoundToPlayer(player, sound, opts);
      }
    }
    // fallback to global playSound
    if (typeof ScriptApp.playSound === "function") {
      return ScriptApp.playSound(sound);
    }
  } catch (e) {
    // ignore runtime errors
  }
}

function showImagePopupForPlayerIfPossible(player: ScriptPlayer | null, img: ImageAsset, width = 900, height = 700) {
  const s: any = ScriptApp as any;
  try {
    if (player) {
      if (typeof s.showImagePopupForPlayer === "function") {
        return s.showImagePopupForPlayer(player, img, { width, height });
      }
      if (typeof s.showImagePopupToPlayer === "function") {
        return s.showImagePopupToPlayer(player, img, { width, height });
      }
    }
    if (typeof s.showImagePopup === "function") {
      // some SDKs expect (img, options) globally
      return s.showImagePopup(img, { width, height });
    }
  } catch (e) {
    // ignore
  }
  return undefined;
}

function closeImagePopupForPlayerIfPossible(player: ScriptPlayer | null) {
  const s: any = ScriptApp as any;
  try {
    if (player) {
      if (typeof s.closeImagePopupForPlayer === "function") {
        return s.closeImagePopupForPlayer(player);
      }
      if (typeof s.closeImagePopupToPlayer === "function") {
        return s.closeImagePopupToPlayer(player);
      }
    }
    if (typeof s.closeImagePopup === "function") {
      return s.closeImagePopup();
    }
  } catch (e) {
    // ignore
  }
  return undefined;
}

function shakeCameraIfPossible(player: ScriptPlayer | null, options?: { intensity?: number; durationMs?: number }) {
  const s: any = ScriptApp as any;
  try {
    if (player) {
      if (typeof s.shakeCameraForPlayer === "function") {
        return s.shakeCameraForPlayer(player, options);
      }
    }
    if (typeof s.shakeCamera === "function") {
      return s.shakeCamera(options);
    }
  } catch (e) {
    // ignore
  }
  return undefined;
}

/**
 * Main function to show a screamer to a player, with cooldown and opt-out handling.
 */
export async function showScreamerCopilot(player: ScriptPlayer | null, opts?: ScreamerOptions) {
  const options = { ...DEFAULT_OPTIONS, ...(opts || {}) } as Required<ScreamerOptions>;

  if (!player || !player.name) {
    // If no player provided, we still allow a global screamer.
  }

  // Respect safeMode and opt-out
  if (options.safeMode || (player && isPlayerScreamerOptOut(player))) {
    showCenterLabelToPlayer(player, "😐 (screamer bloqué)", 1500);
    return;
  }

  // Cooldown
  if (player && player.name) {
    const now = Date.now();
    const last = lastScreamAt.get(player.name) || 0;
    if (now - last < options.cooldownMs) {
      return;
    }
    lastScreamAt.set(player.name, now);
  }

  // Compute delay (possibly randomized)
  let delay = options.delayMs;
  if (options.randomizeDelay) {
    delay = Math.floor(Math.random() * options.delayMs);
  }

  // Build-up label (try to show to player)
  showCenterLabelToPlayer(player, "...something is behind you...", Math.max(800, delay));

  // Wait
  await new Promise((res) => setTimeout(res, delay));

  // Optional spawn on map via hook
  try {
    options.onSpawnMapObject?.(player as ScriptPlayer);
  } catch (e) {
    // ignore hook errors
  }

  // Play sound (player-targeted if possible)
  if (!options.safeMode && options.sound) {
    playSoundForPlayerIfPossible(player, options.sound, { volume: options.volume });
  }

  // Show image popup if available
  if (options.img) {
    showImagePopupForPlayerIfPossible(player, options.img, 900, 700);
    // Keep image up for screamDurationMs if we can close it later
    await new Promise((res) => setTimeout(res, options.screamDurationMs));
    closeImagePopupForPlayerIfPossible(player);
  } else {
    showCenterLabelToPlayer(player, "😱 SCREAMER !!!", Math.min(2000, options.screamDurationMs));
    await new Promise((res) => setTimeout(res, Math.min(2000, options.screamDurationMs)));
  }

  // Try camera shake
  if (options.enableShake) {
    shakeCameraIfPossible(player, { intensity: 6, durationMs: 700 });
  }
}