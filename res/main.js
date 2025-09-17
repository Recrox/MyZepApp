/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./src/light/LIGHT_RADIUS.ts
const LIGHT_SPRITE = App.loadSpritesheet("assets/img/light_overlay.png");
const LIGHT_KEY = "LIGHT_";
function light(player) {
  const x = player.tileX;
  const y = player.tileY;
  const overlayOptions = {
    key: `${LIGHT_KEY}${player.name}`,
    topObject: true,
    overlap: true,
    offsetX: 0,
    offsetY: 0,
    activeDistance: 0,
    triggerByTouch: false
  };
  Map.putObjectWithKey(x, y, LIGHT_SPRITE, overlayOptions);
}
function updateLight(player) {
  Map.putObjectWithKey(player.tileX, player.tileY, LIGHT_SPRITE, {
    key: LIGHT_KEY + player.name,
    overlap: true,
    topObject: true
  });
  App.sayToAll(`${player.name} → lumière placée en (${player.tileX}, ${player.tileY})`);
}
;// ./src/light/light1.ts

function light1() {
  App.onJoinPlayer.Add(player => {
    updateLight(player);
  });
}
;// ./src/start-game.ts

function StartGame() {
  light1();
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