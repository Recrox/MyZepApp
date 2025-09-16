/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./src/add.ts
function add(a, b) {
  return a + b;
}
;// ./src/start-game.ts
const TRIGGER_SCREAMER = {
  x: 20,
  y: 25,
  key: "Trigger_Screamer"
};
const TRIGGER_VOITURE = {
  x: 10,
  y: 5,
  key: "Trigger_Voiture"
};
const screamerSprite = App.loadSpritesheet("screamer.png");
function StartGame() {
  Map.putObjectWithKey(TRIGGER_SCREAMER.x, TRIGGER_SCREAMER.y, screamerSprite, {
    key: TRIGGER_SCREAMER.key
  });
  Map.putObjectWithKey(TRIGGER_VOITURE.x, TRIGGER_VOITURE.y, screamerSprite, {
    key: TRIGGER_VOITURE.key
  });
  App.onTriggerObject.Add((player, object) => {
    if (!object || !object.key) return;
    if (object.key === TRIGGER_SCREAMER.key || object.key === TRIGGER_VOITURE.key) {
      showScreamer(player, object.key);
    }
  });
}
function showScreamer(player, key) {
  App.showCenterLabel("😱 SCREAMER !!!", 2000);
  App.playSound("scream.mp3");
  Map.playObjectAnimationWithKey(key, "scary_animation", 1);
}
;// ./main.ts


let zepLogo = App.loadSpritesheet("zep_logo.png");
let screamer = App.loadSpritesheet("screamer.png");
App.onJoinPlayer.Add(function (player) {
  App.showCenterLabel(`Bienvenue ${player.name} Hello World ${add(1, 6)}`);
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