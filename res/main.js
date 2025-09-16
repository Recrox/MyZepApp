/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./src/screamer/showScreamer.ts

function showScreamer(player) {
  App.showCenterLabel("😱 SCREAMER !!!", 2000);
  App.playSound("scream.mp3");
  Map.playObjectAnimationWithKey(TRIGGER_SCREAMER.key, "scary_animation", 1);
}
;// ./src/screamer/Screamer1.ts

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
const voitureSprite = App.loadSpritesheet("voiture.png");
function Start1() {
  Map.putObjectWithKey(TRIGGER_SCREAMER.x, TRIGGER_SCREAMER.y, null, {
    key: TRIGGER_SCREAMER.key
  });
  Map.putObjectWithKey(TRIGGER_VOITURE.x, TRIGGER_VOITURE.y, voitureSprite, {
    key: TRIGGER_VOITURE.key
  });
  App.onTriggerObject.Add((player, layerId, x, y, key) => {
    if (key === TRIGGER_SCREAMER.key && x === TRIGGER_SCREAMER.x && y === TRIGGER_SCREAMER.y) {
      showScreamer(player);
    }
  });
}
;// ./src/screamer/Screamer2.ts


function Start2() {
  App.onTriggerObject.Add((player, layerId, x, y, key) => {
    if (x === TRIGGER_SCREAMER.x && y === TRIGGER_SCREAMER.y && key === TRIGGER_SCREAMER.key) {
      showScreamer(player);
    }
    if (x === TRIGGER_VOITURE.x && y === TRIGGER_VOITURE.y && key === TRIGGER_VOITURE.key) {
      showScreamer(player);
    }
  });
}
;// ./src/start-game.ts


function StartGame() {
  Start1();
  Start2();
}
;// ./main.ts

let zepLogo = App.loadSpritesheet("zep_logo.png");
let screamer = App.loadSpritesheet("screamer.png");
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
App.onJoinPlayer.Add(function (player) {
  App.showCenterLabel(`Bienvenue ${player.name} Hello World `);
});
App.onDestroy.Add(function () {
  Map.clearAllObjects();
});
/******/ })()
;