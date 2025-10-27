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
;// ./src/salles/HALL_C.ts

const WIDTH = 1024;
const LENGTH = 1024;
function HALL_C() {
  addDarkness(300);
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
;// ./src/salles/HandleSalle.ts


function HandleHALLOWEEN_MAPS() {
  switch (Map.name) {
    case HALLOWEEN_MAPS.MENU:
      break;
    case HALLOWEEN_MAPS.LOBBY:
      break;
    case HALLOWEEN_MAPS.HALL_A:
      break;
    case HALLOWEEN_MAPS.A1_POTIONS:
      break;
    case HALLOWEEN_MAPS.HALL_A_POUR_A2:
      break;
    case HALLOWEEN_MAPS.A2_BIBLIOTHEQUE:
      break;
    case HALLOWEEN_MAPS.A4_ASTRONOMIE:
      break;
    case HALLOWEEN_MAPS.A5_METAMORPHOSE:
      break;
    case HALLOWEEN_MAPS.HALL_B:
      break;
    case HALLOWEEN_MAPS.B1_DORTOIR:
      break;
    case HALLOWEEN_MAPS.B2_ELECTRICAL:
      break;
    case HALLOWEEN_MAPS.B3_CUISINE:
      break;
    case HALLOWEEN_MAPS.B4_BAINS:
      break;
    case HALLOWEEN_MAPS.HALL_C:
      HALL_C();
      break;
    case HALLOWEEN_MAPS.C1_SERRE:
      break;
    case HALLOWEEN_MAPS.C2_FORET_INTERDITE:
      break;
    case HALLOWEEN_MAPS.C3_LABYRINTHE:
      break;
    case HALLOWEEN_MAPS.C4_ENCLOS:
      break;
    case HALLOWEEN_MAPS.C5_CABANE_HAGRID:
      break;
    case HALLOWEEN_MAPS.HALL_D:
      break;
    case HALLOWEEN_MAPS.D1_CRYPTE:
      break;
    case HALLOWEEN_MAPS.D2_COULOIR:
      break;
    case HALLOWEEN_MAPS.D3_CACHOT:
      break;
    case HALLOWEEN_MAPS.D4_SACRIFICE:
      break;
    default:
      break;
  }
}
;// ./src/start-game.ts

function StartGame() {
  HandleHALLOWEEN_MAPS();
}
;// ./src/salles/MAPS.ts
const MAPS = {
  SALLE1: "Salle1",
  SALLE2: "Salle2",
  SALLE3: "Salle3_Forest",
  SALLE4: "Salle4",
  SALLE5: "Salle5",
  SALLE6: "Salle6",
  SALLE7: "Salle7",
  SALLE8: "Salle8",
  SALLE9: "Salle9",
  SALLE10: "Salle10",
  SALLE11: "Salle11",
  SALLE12: "Salle12",
  SALLE13: "Salle13",
  SALLE14: "Salle14",
  SALLE15: "Salle15",
  SALLE16: "Salle16",
  SALLE17: "Salle17",
  SALLE18: "Salle18",
  SALLE19: "Salle19",
  SALLE20: "Salle20"
};
;// ./main.ts


App.onInit.Add(function () {});
App.onJoinPlayer.Add(function (player) {
  if (Map.name === MAPS.SALLE1) {
    App.showCenterLabel(`Bienvenue ${player.name} Pour ta quête d'Halloween 💀💀💀`);
  } else {
    App.showCenterLabel(`Tu es dans la salle ${Map.name}`);
  }
  StartGame();
});
App.onStart.Add(function () {
  StartGame();
});
App.onUpdate.Add(function (dt) {});
App.onLeavePlayer.Add(function (player) {});
App.onDestroy.Add(function () {
  Map.clearAllObjects();
});
/******/ })()
;