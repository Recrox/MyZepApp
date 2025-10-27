/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

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

const OBJECT_KEYS = {
  A1_POTIONS: {
    CITROUILLE: "A1_POTIONS_CITROUILLE"
  }
};
const OBJECTS = {
  [OBJECT_KEYS.A1_POTIONS.CITROUILLE]: getObjectByParam1(OBJECT_KEYS.A1_POTIONS.CITROUILLE)
};
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
const SCREAMER_SOUNDS = {
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
  SCREAM_11: "assets/sounds/screamer/scream-90747.mp3"
};
function getRandomScreamerKey() {
  const keys = Object.keys(SCREAMER_SOUNDS);
  const idx = Math.floor(Math.random() * keys.length);
  return keys[idx];
}
function getRandomScreamerPath() {
  return SCREAMER_SOUNDS[getRandomScreamerKey()];
}
;// ./src/salles/A1_POTIONS.ts



function A1_POTIONS() {
  const object = OBJECTS[OBJECT_KEYS.A1_POTIONS.CITROUILLE];
  if (object) {
    App.onObjectTouched.Add((sender, x, y, tileID, obj) => {
      if (obj.param1 === object.param1) {
        const screamerSound = getRandomScreamerPath();
        showScreamer(sender, screamerSound);
      }
    });
  }
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
  console.log("Afficher : A5 - Métamorphose");
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
  console.log("Afficher : C1 - Serre");
}
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
}
;// ./src/salles/C3_LABYRINTHE.ts


function C3_LABYRINTHE() {
  addDarkness(Darkness.EASY);
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
}
;// ./src/salles/D2_COULOIR.ts


function D2_COULOIR() {
  addDarkness(Darkness.EASY);
}
;// ./src/salles/D3_CACHOT.ts
function D3_CACHOT() {
  console.log("Afficher : D3 - Cachot");
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
  A5_METAMORPHOSE: "A5 - Métamorphose",
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
}
;// ./main.ts

App.onInit.Add(function () {
  StartGame();
});
App.onJoinPlayer.Add(function (player) {
  StartGame();
});
App.onStart.Add(function () {});
App.onUpdate.Add(function (dt) {});
App.onLeavePlayer.Add(function (player) {});
App.onDestroy.Add(function () {
  Map.clearAllObjects();
});
/******/ })()
;