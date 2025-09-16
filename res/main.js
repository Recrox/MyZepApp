/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./src/add.ts
function add(a, b) {
  return a + b;
}
;// ./main.ts

let zepLogo = App.loadSpritesheet("zep_logo.png");
App.showCenterLabel("Hello world");
App.onJoinPlayer.Add(function (player) {
  App.showCenterLabel(`Bienvenue ${player.name} Hello World ${add(1, 6)}`);
});
App.onStart.Add(function () {
  Map.putObject(0, 0, zepLogo, {
    overlap: true
  });
});
App.onDestroy.Add(function () {
  Map.clearAllObjects();
});
/******/ })()
;