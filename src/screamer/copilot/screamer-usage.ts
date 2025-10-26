import { ScriptPlayer } from "zep-script";
import { showScreamerCopilot, setPlayerScreamerOptOut, isPlayerScreamerOptOut } from "./showsceamer-copilot";
import { TRIGGER_SCREAMER } from "../Screamer1";

/**
 * Access runtime globals (ScriptMap / ScriptApp) via globalThis.
 * These are not always exported from "zep-script", so we read them at runtime.
 */
const ScriptMap: any = (globalThis as any).ScriptMap ?? (globalThis as any).ZEP?.ScriptMap ?? {};
const ScriptApp: any = (globalThis as any).ScriptApp ?? (globalThis as any).ZEP?.ScriptApp ?? {};

/**
 * Default assets used by the example trigger.
 * Replace these paths with your actual assets.
 */
const DEFAULT_SOUND = "assets/sounds/scream.mp3";
const DEFAULT_IMAGE = "assets/images/screamer.png";

/**
 * Register trigger handler(s) and optional chat/command hooks.
 * Call this function from your map initialization code (or it will auto-register if possible).
 */
export function initScreamerUsage() {
  // Try to register the map trigger if the runtime provides ScriptMap.onTrigger
  if (typeof ScriptMap.onTrigger === "function" && TRIGGER_SCREAMER && TRIGGER_SCREAMER.key) {
    ScriptMap.onTrigger(TRIGGER_SCREAMER.key, (player: ScriptPlayer | null) => {
      // Example options passed to the screamer helper
      showScreamerCopilot(player, {
        sound: DEFAULT_SOUND,
        img: DEFAULT_IMAGE,
        volume: 0.9,
        delayMs: 700,
        randomizeDelay: true,
        screamDurationMs: 2500,
        cooldownMs: 30_000,
        enableShake: true,
        // Example: try to spawn a temporary map object near the player (if API exists)
        onSpawnMapObject: (p) => {
          try {
            if (!p) return;
            const key = `screamer_obj_${p.name}`;
            // Put an object at the player's coords if available
            if (typeof ScriptMap.putObjectWithKey === "function") {
              const x = (p.tileX ?? 0);
              const y = (p.tileY ?? 0);
              // sprite key must exist in your map's object assets
              ScriptMap.putObjectWithKey(x, y, "screamerSprite", { key });
              // optionally play an animation if supported
              if (typeof ScriptMap.playObjectAnimationWithKey === "function") {
                ScriptMap.playObjectAnimationWithKey(key, "scary_animation", 1);
              }
              // optionally remove the object after the screamer duration
              setTimeout(() => {
                if (typeof ScriptMap.removeObjectWithKey === "function") {
                  ScriptMap.removeObjectWithKey(key);
                }
              }, 3500);
            }
          } catch (e) {
            // Ignore map spawn errors
          }
        }
      });
    });
  }

  // Optional: register a simple chat/command toggle for players to opt-out
  // The runtime may expose a chat/command hook; try a few common names.
  const registerCommand = (fnName: string) => {
    if (typeof ScriptApp[fnName] === "function") {
      try {
        ScriptApp[fnName]("screamer", (player: ScriptPlayer | null, args?: string[]) => {
          playerToggleScreamerOptOut(player as ScriptPlayer | null);
        });
        return true;
      } catch {
        return false;
      }
    }
    return false;
  };

  // Try registering `screamer` command with a few API names (some SDKs differ)
  registerCommand("onCommand");
  registerCommand("onChatCommand");
  registerCommand("registerCommand");

  // If none of the above worked, we do nothing — the user can still call playerToggleScreamerOptOut via other UI.
}

/**
 * Toggle player's screamer opt-out setting.
 * Call this from a command handler, UI button, or other input.
 */
export function playerToggleScreamerOptOut(player: ScriptPlayer | null) {
  if (!player || !player.name) return;
  const currentlyOut = isPlayerScreamerOptOut(player);
  setPlayerScreamerOptOut(player, !currentlyOut);

  const label = !currentlyOut ? "Screamer désactivé" : "Screamer activé";
  // Try to show a per-player label, otherwise fallback to global
  if (typeof ScriptApp.showCenterLabelForPlayer === "function") {
    ScriptApp.showCenterLabelForPlayer(player, label, 1500);
  } else if (typeof ScriptApp.showCenterLabelToPlayer === "function") {
    ScriptApp.showCenterLabelToPlayer(player, label, 1500);
  } else if (typeof ScriptApp.showCenterLabel === "function") {
    ScriptApp.showCenterLabel(label, 1500);
  } else if (typeof ScriptApp.showToast === "function") {
    // some runtimes provide a toast API
    ScriptApp.showToast(player, label);
  }
}

// /**
//  * Auto-init: try to initialize on module load (safe no-op if runtime not ready).
//  * If you prefer explicit control, remove this and call initScreamerUsage() from your map init.
//  */
// try {
//   initScreamerUsage();
// } catch {
//   // ignore initialization errors (e.g., during static analysis)
// }