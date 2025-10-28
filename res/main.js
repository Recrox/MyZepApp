/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./src/darkness/cameraSombre.ts
function registerVignetteToggle() {
  App.addOnKeyDown(81, player => {
    if (App.cameraEffect === 0) {
      App.cameraEffect = 1;
      App.cameraEffectParam1 = 500;
    } else if (App.cameraEffect === 1) {
      App.cameraEffect = 0;
    }
    App.sendUpdated();
  });
}
function toggleDarkness(cameraEffectParam = 200) {
  if (!isDark()) {
    addDarkness(cameraEffectParam);
  } else {
    removeDarkness();
  }
}
function isDark() {
  return App.cameraEffect === 1;
}
function addDarkness(cameraEffectParam) {
  App.cameraEffect = 1;
  App.cameraEffectParam1 = cameraEffectParam;
  App.sendUpdated();
}
function removeDarkness() {
  App.cameraEffect = 0;
  App.sendUpdated();
}
function pulseDarkness() {
  App.cameraEffect = 1;
  let darkness = 0.2;
  let direction = 1;
  const interval = setInterval(() => {
    darkness += 0.02 * direction;
    if (darkness >= 0.6) direction = -1;
    if (darkness <= 0.2) direction = 1;
    App.cameraEffectParam1 = darkness;
    App.sendUpdated();
  }, 100);
  setTimeout(() => clearInterval(interval), 5000);
}
;// ./src/utils.ts
function getObjectByParam1(value) {
  const objects = Map.getObjectsByType(ObjectEffectType.INTERACTION_WITH_ZEPSCRIPTS);
  for (const obj of objects) {
    if (obj.param1 === value) {
      return obj;
    }
  }
  return null;
}
function getObjectsByParam1(value) {
  const objects = Map.getObjectsByType(ObjectEffectType.INTERACTION_WITH_ZEPSCRIPTS);
  return objects.filter(obj => obj.param1 === value);
}
;// ./src/objects-halloween.ts

const HALLOWEEN_OBJECT_KEYS = {
  HALL_A: {
    PORTE_A2: "HALL_A_PORTE_A2",
    DECOR_CHAUDRON: "HALL_A_DECOR_CHAUDRON",
    CHAUVE_SOURIS: "HALL_A_CHAUVE_SOURIS"
  },
  A1_POTIONS: {
    CITROUILLE: "A1_POTIONS_CITROUILLE",
    CHAUDRON: "A1_POTIONS_CHAUDRON",
    LIVRE: "A1_POTIONS_LIVRE"
  },
  A2_BIBLIOTHEQUE: {
    LIVRE_MAUDIT: "A2_BIBLIOTHEQUE_LIVRE_MAUDIT",
    BOUGIE: "A2_BIBLIOTHEQUE_BOUGIE"
  },
  A4_ASTRONOMIE: {
    TELESCOPE: "A4_ASTRONOMIE_TELESCOPE",
    ETOILE: "A4_ASTRONOMIE_ETOILE"
  },
  A5_METAMORPHOSE: {
    CENDRE: "A5_METAMORPHOSE_CENDRE"
  },
  HALL_B: {
    GENERATEUR: "HALL_B_GENERATEUR",
    ECLAIR: "HALL_B_ECLAIR",
    PANNEAU: "HALL_B_PANNEAU"
  },
  B1_DORTOIR: {
    LIT: "B1_DORTOIR_LIT",
    FANTOME: "B1_DORTOIR_FANTOME"
  },
  B2_ELECTRICAL: {
    GENERATEUR: "B2_ELECTRICAL_GENERATEUR",
    INTERRUPTEUR: "B2_ELECTRICAL_INTERRUPTEUR"
  },
  B3_CUISINE: {
    COUTEAU: "B3_CUISINE_COUTEAU",
    CHAUDRON: "B3_CUISINE_CHAUDRON"
  },
  B4_BAINS: {
    MIROIR: "B4_BAINS_MIROIR",
    SQUELETTE: "B4_BAINS_SQUELETTE"
  },
  HALL_C: {
    PORTAIL: "HALL_C_PORTAIL",
    TOILE: "HALL_C_TOILE",
    CITROUILLE: "HALL_C_CITROUILLE"
  },
  C1_SERRE: {
    PLANTE: "C1_SERRE_PLANTE",
    PLANTE2: "C1_SERRE_PLANTE2",
    PLANTE3: "C1_SERRE_PLANTE3",
    PLANTE4: "C1_SERRE_PLANTE4",
    CITROUILLE: "C1_SERRE_CITROUILLE"
  },
  C2_FORET_INTERDITE: {
    CITROUILLE: "C2_FORET_INTERDITE_CITROUILLE",
    CITROUILLE2: "C2_FORET_INTERDITE_CITROUILLE2",
    CITROUILLE3: "C2_FORET_INTERDITE_CITROUILLE3",
    ARAIGNE1: "C2_FORET_INTERDITE_ARAIGNE1",
    ARAIGNE2: "C2_FORET_INTERDITE_ARAIGNE2"
  },
  C3_LABYRINTHE: {
    CITROUILLE: "C3_LABYRINTHE_CITROUILLE",
    CITROUILLE2: "C3_LABYRINTHE_CITROUILLE2",
    CITROUILLE3: "C3_LABYRINTHE_CITROUILLE3",
    CITROUILLE4: "C3_LABYRINTHE_CITROUILLE4",
    CITROUILLE5: "C3_LABYRINTHE_CITROUILLE5",
    RAT: "C3_LABYRINTHE_RAT",
    RAT2: "C3_LABYRINTHE_RAT2",
    CRANE: "C3_LABYRINTHE_CRANE",
    FANTOME: "C3_LABYRINTHE_FANTOME"
  },
  C4_ENCLOS: {
    LICORNE: "C4_ENCLOS_LICORNE",
    SQUELETTE: "C4_ENCLOS_SQUELETTE"
  },
  C5_CABANE_HAGRID: {
    FEU: "C5_CABANE_HAGRID_FEU",
    CHIEN: "C5_CABANE_HAGRID_CHIEN"
  },
  HALL_D: {
    CITROUILLE: "HALL_D_CITROUILLE",
    CITROUILLE2: "HALL_D_CITROUILLE2",
    TOMBE: "HALL_D_TOMBE",
    TOMBE2: "HALL_D_TOMBE2",
    CRANE: "HALL_D_CRANE",
    CRANE2: "HALL_D_CRANE2",
    CRANE3: "HALL_D_CRANE3",
    CRANE4: "HALL_D_CRANE4",
    CRANE5: "HALL_D_CRANE5"
  },
  D1_CRYPTE: {
    RAT: "D1_CRYPTE_RAT",
    RAT2: "D1_CRYPTE_RAT2",
    TROU: "D1_CRYPTE_TROU",
    SQUELETTE: "D1_CRYPTE_SQUELETTE"
  },
  D2_COULOIR: {
    TROU: "D2_COULOIR_TROU",
    TROU2: "D2_COULOIR_TROU2",
    TROU3: "D2_COULOIR_TROU3",
    TROU4: "D2_COULOIR_TROU4",
    TROU5: "D2_COULOIR_TROU5",
    TROU6: "D2_COULOIR_TROU6",
    TROU7: "D2_COULOIR_TROU7",
    TROU8: "D2_COULOIR_TROU8",
    TROU9: "D2_COULOIR_TROU9"
  },
  D3_CACHOT: {
    ARAIGNE: "D3_CACHOT_ARAIGNE",
    TONNEAU: "D3_CACHOT_TONNEAU",
    ARMOIRE: "D3_CACHOT_ARMOIRE"
  },
  D4_SACRIFICE: {
    AUTEL: "D4_SACRIFICE_AUTEL",
    COUTEAU: "D4_SACRIFICE_COUTEAU"
  }
};
const HALLOWEEN_OBJECT = Object.fromEntries(Object.values(HALLOWEEN_OBJECT_KEYS).flatMap(group => Object.values(group).map(key => [key, getObjectByParam1(key)])));
;// ./src/screamer/showScreamer.ts
const SCREAM_SOUND = "assets/sounds/scream1.mp3";
const DEFAULT_IMAGE = "assets/img/screamer.png";
const DEFAULT_WIDGET_HTML = "assets/widgets/screamer.html";
function showScreamer(player, sound = null, htmlPath = null) {
  const screamSound = sound !== null && sound !== void 0 ? sound : SCREAM_SOUND;
  const widgetPath = htmlPath !== null && htmlPath !== void 0 ? htmlPath : DEFAULT_WIDGET_HTML;
  App.playSound(screamSound);
}
;// ./src/sounds/ScreamerPaths.ts
const SCREAMER_PATH = "assets/sounds/screamer/";
const SCREAMER_SOUNDS = {
  GHOST_SCREAM: `${SCREAMER_PATH}062740_creepy-ghost-scream-81907.mp3`,
  GHOSTLY_HOWL: `${SCREAMER_PATH}ghostly-howl-laa-99322.mp3`,
  DEMONIC_SCREAM: `${SCREAMER_PATH}distant-demonic-scream-and-debris-346596.mp3`,
  CRYO_OUTAGE: `${SCREAMER_PATH}cryo_outage-94622.mp3`,
  ZOMBIE_SCREAM: `${SCREAMER_PATH}zombie-scream-324752.mp3`,
  WOMAN_SCARY_REALISTIC: `${SCREAMER_PATH}scary-woman-scream-ultra-realistic-379378.mp3`,
  WOMAN_SCREAM_HD: `${SCREAMER_PATH}woman-scream-sound-hd-379381.mp3`,
  BOY_HOWL: `${SCREAMER_PATH}VOXScrm_Hurlement 1 garcon (ID 1664)_LS.mp3`,
  GIRL_HOWL: `${SCREAMER_PATH}VOXScrm_Hurlement 1 fille 1 (ID 1662)_LS.mp3`,
  INJURY_SCREAM: `${SCREAMER_PATH}injury-scream-86808.mp3`,
  SCARY_SCREAM: `${SCREAMER_PATH}scary-scream-401725.mp3`,
  GENERIC_SCREAM: `${SCREAMER_PATH}scream-90747.mp3`,
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
  DISTORTED_CRAZY_SCREAM: `${SCREAMER_PATH}crazy-distorted-screaming-sound-39350.mp3`
};
function getRandomScreamerKey() {
  const keys = Object.keys(SCREAMER_SOUNDS);
  const idx = Math.floor(Math.random() * keys.length);
  return keys[idx];
}
function getRandomScreamerPath() {
  return SCREAMER_SOUNDS[getRandomScreamerKey()];
}
;// ./src/trigger/TriggerObjectWithSound.ts


function TriggerObjectWithSound(object, screamerPathSound = null, screamerDurationMS = 4000) {
  let isScreamerActive = false;
  if (object) {
    App.onObjectTouched.Add((sender, x, y, tileID, obj) => {
      if (obj.param1 === object.param1 && !isScreamerActive) {
        isScreamerActive = true;
        const path = screamerPathSound !== null && screamerPathSound !== void 0 ? screamerPathSound : getRandomScreamerPath();
        showScreamer(sender, path);
        const screamerDuration = screamerDurationMS;
        setTimeout(() => {
          isScreamerActive = false;
        }, screamerDuration);
      }
    });
  }
}
;// ./src/salles/A1_POTIONS.ts


function A1_POTIONS() {
  const object = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.A1_POTIONS.CITROUILLE];
  TriggerObjectWithSound(object);
}
;// ./src/salles/A2_BIBLIOTHEQUE.ts
function A2_BIBLIOTHEQUE() {
  console.log("Afficher : A2 - Bibliothèque");
}
;// ./src/salles/A4_ASTRONOMIE.ts
function A4_ASTRONOMIE() {
  console.log("Afficher : A4 - Astronomie");
}
;// ./src/salles/A5_METAMORPHOSE.ts


function A5_METAMORPHOSE() {
  const object = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.A5_METAMORPHOSE.CENDRE];
  TriggerObjectWithSound(object);
}
;// ./src/salles/B1_DORTOIR.ts
function B1_DORTOIR() {
  console.log("Afficher : B1 - Dortoir");
}
;// ./src/salles/B2_ELECTRICAL.ts
function B2_ELECTRICAL() {
  console.log("Afficher : B2 - Electrical");
}
;// ./src/salles/B3_CUISINE.ts
function B3_CUISINE() {
  console.log("Afficher : B3 - Cuisine");
}
;// ./src/salles/B4_BAINS.ts
function B4_BAINS() {
  console.log("Afficher : B4 - Bains");
}
;// ./src/salles/C1_SERRE.ts


function C1_SERRE() {
  const object = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.C1_SERRE.CITROUILLE];
  const object2 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.C1_SERRE.PLANTE];
  const object3 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.C1_SERRE.PLANTE2];
  const object4 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.C1_SERRE.PLANTE3];
  const object5 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.C1_SERRE.PLANTE4];
  TriggerObjectWithSound(object);
  TriggerObjectWithSound(object2);
  TriggerObjectWithSound(object3);
  TriggerObjectWithSound(object4);
  TriggerObjectWithSound(object5);
}
;// ./src/darkness/Darkness.1.ts
const Darkness = {
  EASY: 100,
  EASY_TKT: 125,
  EASY_MEDIUM: 150,
  MEDIUM: 200,
  MEDIUM_HARD: 250,
  HARD: 300,
  HARD_EXTREME: 350,
  EXTREME: 400
};
;// ./src/salles/C2 - Forêt Interdite.ts




const WIDTH = 1024;
const LENGTH = 1024;
function C2_Forêt_Interdite() {
  addDarkness(Darkness.MEDIUM);
  const object = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.C2_FORET_INTERDITE.CITROUILLE];
  const object2 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.C2_FORET_INTERDITE.CITROUILLE2];
  const object3 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.C2_FORET_INTERDITE.CITROUILLE3];
  const object4 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.C2_FORET_INTERDITE.ARAIGNE1];
  const object5 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.C2_FORET_INTERDITE.ARAIGNE2];
  TriggerObjectWithSound(object);
  TriggerObjectWithSound(object2);
  TriggerObjectWithSound(object3);
  TriggerObjectWithSound(object4);
  TriggerObjectWithSound(object5);
}
;// ./src/salles/C3_LABYRINTHE.ts




function C3_LABYRINTHE() {
  addDarkness(Darkness.EASY);
  const object = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.C3_LABYRINTHE.CITROUILLE];
  const object2 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.C3_LABYRINTHE.CITROUILLE2];
  const object3 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.C3_LABYRINTHE.CITROUILLE3];
  const object4 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.C3_LABYRINTHE.CITROUILLE4];
  const object5 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.C3_LABYRINTHE.CITROUILLE5];
  const object6 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.C3_LABYRINTHE.CRANE];
  const object7 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.C3_LABYRINTHE.FANTOME];
  const object8 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.C3_LABYRINTHE.RAT];
  const object9 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.C3_LABYRINTHE.RAT2];
  TriggerObjectWithSound(object);
  TriggerObjectWithSound(object2);
  TriggerObjectWithSound(object3);
  TriggerObjectWithSound(object4);
  TriggerObjectWithSound(object5);
  TriggerObjectWithSound(object6);
  TriggerObjectWithSound(object7);
  TriggerObjectWithSound(object8);
  TriggerObjectWithSound(object9);
}
;// ./src/salles/C4_ENCLOS.ts


function C4_ENCLOS() {
  addDarkness(Darkness.HARD);
}
;// ./src/salles/C5_CABANE_HAGRID.ts
function C5_CABANE_HAGRID() {
  console.log("Afficher : C5 - Cabane d'Hagrid");
}
;// ./src/salles/D1_CRYPTE.ts




function D1_CRYPTE() {
  addDarkness(Darkness.MEDIUM);
  const object = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.D1_CRYPTE.RAT];
  const object2 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.D1_CRYPTE.RAT2];
  const object3 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.D1_CRYPTE.SQUELETTE];
  const object4 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.D1_CRYPTE.TROU];
  TriggerObjectWithSound(object);
  TriggerObjectWithSound(object2);
  TriggerObjectWithSound(object3);
  TriggerObjectWithSound(object4);
}
;// ./src/salles/D2_COULOIR.ts




function D2_COULOIR() {
  addDarkness(Darkness.EASY);
  const object1 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.D2_COULOIR.TROU];
  const object2 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.D2_COULOIR.TROU2];
  const object3 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.D2_COULOIR.TROU3];
  const object4 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.D2_COULOIR.TROU4];
  const object5 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.D2_COULOIR.TROU5];
  const object6 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.D2_COULOIR.TROU6];
  const object7 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.D2_COULOIR.TROU7];
  const object8 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.D2_COULOIR.TROU8];
  const object9 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.D2_COULOIR.TROU9];
  TriggerObjectWithSound(object1);
  TriggerObjectWithSound(object2);
  TriggerObjectWithSound(object3);
  TriggerObjectWithSound(object4);
  TriggerObjectWithSound(object5);
  TriggerObjectWithSound(object6);
  TriggerObjectWithSound(object7);
  TriggerObjectWithSound(object8);
  TriggerObjectWithSound(object9);
}
;// ./src/salles/D3_CACHOT.ts


function D3_CACHOT() {
  const object1 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.D3_CACHOT.ARAIGNE];
  const object2 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.D3_CACHOT.ARMOIRE];
  const object3 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.D3_CACHOT.TONNEAU];
  TriggerObjectWithSound(object1);
  TriggerObjectWithSound(object2);
  TriggerObjectWithSound(object3);
}
;// ./src/salles/D4_SACRIFICE.ts
function D4_SACRIFICE() {
  console.log("Afficher : D4 - Sacrifice");
}
;// ./src/salles/HALL_A.ts
function HALL_A() {
  console.log("Afficher : HALL A");
}
;// ./src/salles/HALL_A_POUR_A2.ts
function HALL_A_POUR_A2() {
  console.log("Afficher : Hall A pour A2");
}
;// ./src/salles/HALL_B.ts
function HALL_B() {
  console.log("Afficher : HALL B");
}
;// ./src/salles/HALL_C.ts


const HALL_C_WIDTH = 1024;
const HALL_C_LENGTH = 1024;
function HALL_C() {
  addDarkness(Darkness.HARD);
}
;// ./src/salles/HALL_D.ts




function HALL_D() {
  addDarkness(Darkness.MEDIUM);
  const object = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.HALL_D.CITROUILLE];
  const object2 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.HALL_D.CITROUILLE2];
  const object3 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.HALL_D.CRANE];
  const object4 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.HALL_D.CRANE2];
  const object5 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.HALL_D.CRANE3];
  const object6 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.HALL_D.CRANE4];
  const object7 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.HALL_D.CRANE5];
  const object8 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.HALL_D.TOMBE];
  const object9 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.HALL_D.TOMBE2];
  TriggerObjectWithSound(object);
  TriggerObjectWithSound(object2);
  TriggerObjectWithSound(object3);
  TriggerObjectWithSound(object4);
  TriggerObjectWithSound(object5);
  TriggerObjectWithSound(object6);
  TriggerObjectWithSound(object7);
  TriggerObjectWithSound(object8);
  TriggerObjectWithSound(object9);
}
;// ./src/salles/HALLOWEEN_MAPS.ts
const HALLOWEEN_MAPS = {
  MENU: "Menu",
  LOBBY: "Lobby",
  HALL_A: "HALL A",
  A1_POTIONS: "A1 - Potions",
  HALL_A_POUR_A2: "Hall A pour A2",
  A2_BIBLIOTHEQUE: "A2 - Bibliothèque",
  A4_ASTRONOMIE: "A4 - Astronomie",
  A5_METAMORPHOSE: "A5 - Metamorphose",
  HALL_B: "HALL B",
  B1_DORTOIR: "B1 - Dortoir",
  B2_ELECTRICAL: "B2 - Electrical",
  B3_CUISINE: "B3 - Cuisine",
  B4_BAINS: "B4 - Bains",
  HALL_C: "HALL C",
  C1_SERRE: "C1 - Serre",
  C2_FORET_INTERDITE: "C2 - Forêt Interdite",
  C3_LABYRINTHE: "C3 - Labyrinthe",
  C4_ENCLOS: "C4 - Enclos",
  C5_CABANE_HAGRID: "C5 - Cabane d'Hagrid",
  HALL_D: "HALL D",
  D1_CRYPTE: "D1 - Crypte",
  D2_COULOIR: "D2 - Couloir",
  D3_CACHOT: "D3 - Cachot",
  D4_SACRIFICE: "D4 - Sacrifice"
};
;// ./src/salles/LOBBY.ts
function LOBBY() {
  console.log("Afficher : Lobby");
}
;// ./src/salles/MENU.ts
function MENU() {
  console.log("Afficher : Menu");
}
;// ./src/salles/HandleHALLOWEEN_MAPS.ts

























function HandleHALLOWEEN_MAPS() {
  App.sayToAll(Map.name + " MAPNAME loaded. ");
  switch (Map.name) {
    case HALLOWEEN_MAPS.MENU:
      MENU();
      break;
    case HALLOWEEN_MAPS.LOBBY:
      LOBBY();
      break;
    case HALLOWEEN_MAPS.HALL_A:
      HALL_A();
      break;
    case HALLOWEEN_MAPS.A1_POTIONS:
      A1_POTIONS();
      break;
    case HALLOWEEN_MAPS.HALL_A_POUR_A2:
      HALL_A_POUR_A2();
      break;
    case HALLOWEEN_MAPS.A2_BIBLIOTHEQUE:
      A2_BIBLIOTHEQUE();
      break;
    case HALLOWEEN_MAPS.A4_ASTRONOMIE:
      A4_ASTRONOMIE();
      break;
    case HALLOWEEN_MAPS.A5_METAMORPHOSE:
      A5_METAMORPHOSE();
      break;
    case HALLOWEEN_MAPS.HALL_B:
      HALL_B();
      break;
    case HALLOWEEN_MAPS.B1_DORTOIR:
      B1_DORTOIR();
      break;
    case HALLOWEEN_MAPS.B2_ELECTRICAL:
      B2_ELECTRICAL();
      break;
    case HALLOWEEN_MAPS.B3_CUISINE:
      B3_CUISINE();
      break;
    case HALLOWEEN_MAPS.B4_BAINS:
      B4_BAINS();
      break;
    case HALLOWEEN_MAPS.HALL_C:
      HALL_C();
      break;
    case HALLOWEEN_MAPS.C1_SERRE:
      C1_SERRE();
      break;
    case HALLOWEEN_MAPS.C2_FORET_INTERDITE:
      C2_Forêt_Interdite();
      break;
    case HALLOWEEN_MAPS.C3_LABYRINTHE:
      C3_LABYRINTHE();
      break;
    case HALLOWEEN_MAPS.C4_ENCLOS:
      C4_ENCLOS();
      break;
    case HALLOWEEN_MAPS.C5_CABANE_HAGRID:
      C5_CABANE_HAGRID();
      break;
    case HALLOWEEN_MAPS.HALL_D:
      HALL_D();
      break;
    case HALLOWEEN_MAPS.D1_CRYPTE:
      D1_CRYPTE();
      break;
    case HALLOWEEN_MAPS.D2_COULOIR:
      D2_COULOIR();
      break;
    case HALLOWEEN_MAPS.D3_CACHOT:
      D3_CACHOT();
      break;
    case HALLOWEEN_MAPS.D4_SACRIFICE:
      D4_SACRIFICE();
      break;
    default:
      break;
  }
}
;// ./src/start-game.ts


function StartGame() {
  HandleHALLOWEEN_MAPS();
  CHEATCODE();
}
function CHEATCODE() {
  App.addOnKeyDown(122, player => {
    toggleDarkness();
    App.showCenterLabel("🌑 Mode obscur activé/désactivé (F11)", 2000);
  });
  App.addOnKeyDown(123, player => {
    removeDarkness();
    App.showCenterLabel("💡 Lumière restaurée (F12)", 2000);
  });
}
;// ./main.ts

App.onInit.Add(function () {
  StartGame();
});
App.onJoinPlayer.Add(function (player) {});
App.onStart.Add(function () {});
App.onUpdate.Add(function (dt) {});
App.onLeavePlayer.Add(function (player) {});
App.onDestroy.Add(function () {
  Map.clearAllObjects();
});
/******/ })()
;