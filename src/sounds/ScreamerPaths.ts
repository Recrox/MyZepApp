const SCREAMER_PATH = "assets/sounds/screamer/";

export const SCREAMER_SOUNDS = {
  // 👻 FANTÔMES / DÉMONS
  GHOST_SCREAM: `${SCREAMER_PATH}062740_creepy-ghost-scream-81907.mp3`,
  GHOSTLY_HOWL: `${SCREAMER_PATH}ghostly-howl-laa-99322.mp3`,
  DEMONIC_SCREAM: `${SCREAMER_PATH}distant-demonic-scream-and-debris-346596.mp3`,
  CRYO_OUTAGE: `${SCREAMER_PATH}cryo_outage-94622.mp3`,

  // 🧟 MONSTRES / ZOMBIES
  ZOMBIE_SCREAM: `${SCREAMER_PATH}zombie-scream-324752.mp3`,

  // 😱 HUMAINS (homme / femme / enfant)
  WOMAN_SCARY_REALISTIC: `${SCREAMER_PATH}scary-woman-scream-ultra-realistic-379378.mp3`,
  WOMAN_SCREAM_HD: `${SCREAMER_PATH}woman-scream-sound-hd-379381.mp3`,
  BOY_HOWL: `${SCREAMER_PATH}VOXScrm_Hurlement 1 garcon (ID 1664)_LS.mp3`,
  GIRL_HOWL: `${SCREAMER_PATH}VOXScrm_Hurlement 1 fille 1 (ID 1662)_LS.mp3`,
  INJURY_SCREAM: `${SCREAMER_PATH}injury-scream-86808.mp3`,
  SCARY_SCREAM: `${SCREAMER_PATH}scary-scream-401725.mp3`,
  GENERIC_SCREAM: `${SCREAMER_PATH}scream-90747.mp3`,

  // ⚡️ JUMPSCARES & STINGERS
  JUMP_SCARE_1: `${SCREAMER_PATH}jump-scare-sound-2-82831.mp3`,
  JUMPSCARE_1: `${SCREAMER_PATH}jumpscare-154489.mp3`,
  JUMPSCARE_2: `${SCREAMER_PATH}jumpscare-94984.mp3`,
  JUMPSCARE_3: `${SCREAMER_PATH}jumpscare-4-103298.mp3`,
  JUMPSCARE_4: `${SCREAMER_PATH}jumpscare-206590.mp3`,
  JUMPSCARE_5: `${SCREAMER_PATH}jumpscare-2-206591.mp3`,
  JUMPSCARE_SOUND: `${SCREAMER_PATH}jumpscare_sound-95043.mp3`,
  FUZZY_JUMPSCARE: `${SCREAMER_PATH}fuzzy-jumpscare-80560.mp3`,
  ASCENDING_JUMPSCARE: `${SCREAMER_PATH}ascending-jumpscare-102061.mp3`,
  SQUEAKY_JUMPSCARE: `${SCREAMER_PATH}squeaky-jumpscare-2-102254.mp3`,
  BREATH_STINGER: `${SCREAMER_PATH}breath-stinger1-96164.mp3`,
  CRINGE_SCARE: `${SCREAMER_PATH}cringe-scare-47561.mp3`,
  DISTORTED_CRAZY_SCREAM: `${SCREAMER_PATH}crazy-distorted-screaming-sound-39350.mp3`,
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

