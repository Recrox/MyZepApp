export const SCREAMER_SOUNDS = {
  SCREAM_1: "assets/sounds/screamer/062740_creepy-ghost-scream-81907.mp3",
  SCREAM_2: "assets/sounds/screamer/breath-stinger1-96164.mp3",
  SCREAM_3: "assets/sounds/screamer/crazy-distorted-screaming-sound-39350.mp3",
  SCREAM_4: "assets/sounds/screamer/cringe-scare-47561.mp3",
  SCREAM_5: "assets/sounds/screamer/distant-demonic-scream-and-debris-346596.mp3",
  SCREAM_6: "assets/sounds/screamer/ghostly-howl-laa-99322.mp3",
  SCREAM_7: "assets/sounds/screamer/injury-scream-86808.mp3",
  SCREAM_8: "assets/sounds/screamer/jump-scare-sound-2-82831.mp3",
  SCREAM_9: "assets/sounds/screamer/jumpscare-154489.mp3",
  SCREAM_10: "assets/sounds/screamer/scary-woman-scream-ultra-realistic-379378.mp3",
  SCREAM_11: "assets/sounds/screamer/scream-90747.mp3",
} as const;

export type ScreamerKey = keyof typeof SCREAMER_SOUNDS;
export type ScreamerPath = typeof SCREAMER_SOUNDS[ScreamerKey];

/**
 * Retourne une clé aléatoire (ex: "SCREAM_3")
 */
export function getRandomScreamerKey(): ScreamerKey {
  const keys = Object.keys(SCREAMER_SOUNDS) as ScreamerKey[];
  const idx = Math.floor(Math.random() * keys.length);
  return keys[idx];
}

/**
 * Retourne le chemin d'un son choisi aléatoirement (typé)
 */
export function getRandomScreamerPath(): ScreamerPath {
  return SCREAMER_SOUNDS[getRandomScreamerKey()];
}