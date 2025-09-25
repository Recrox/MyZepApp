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
function SetDarkness() {
  if (App.cameraEffect === 0) {
    App.cameraEffect = 1;
    App.cameraEffectParam1 = 500;
  } else if (App.cameraEffect === 1) {
    App.cameraEffect = 0;
  }
  App.sendUpdated();
}
;// ./src/salles/salle.ts

function HandleSalle() {
  switch (Map.name) {
    case "Salle1":
      break;
    case "Salle2":
      break;
    case "Test ZEP":
      SetDarkness();
      break;
    case "Salle4":
      break;
    case "Salle5":
      break;
    case "Salle6":
      break;
    case "Salle7":
      break;
    case "Salle8":
      break;
    case "Salle9":
      break;
    case "Salle10":
      break;
    case "Salle11":
      break;
    case "Salle12":
      break;
    case "Salle13":
      break;
    case "Salle14":
      break;
    case "Salle15":
      break;
    case "Salle16":
      break;
    case "Salle17":
      break;
    case "Salle18":
      break;
    case "Salle19":
      break;
    case "Salle20":
      break;
    default:
      break;
  }
}
;// ./src/start-game.ts

function StartGame() {
  HandleSalle();
}
;// ./main.ts

let zepLogo = App.loadSpritesheet("assets/img/zep_logo.png");
let screamer = App.loadSpritesheet("assets/img/screamer.png");
App.onJoinPlayer.Add(function (player) {
  App.showCenterLabel(`Bienvenue ${player.name} Hello World `);
});
App.onStart.Add(function () {
  Map.putObject(0, 0, zepLogo, {
    overlap: true
  });
  StartGame();
});
App.onDestroy.Add(function () {
  Map.clearAllObjects();
});
/******/ })()
;