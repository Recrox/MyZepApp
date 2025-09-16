/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./src/screamer/showScreamer.ts

const SCREAM_SOUND = "assets/sounds/scream.mp3";
function showScreamer(player) {
  App.showCenterLabel("😱 SCREAMER !!!", 2000);
  App.playSound(SCREAM_SOUND);
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
const screamerSprite = App.loadSpritesheet("assets/img/screamer.png");
const voitureSprite = App.loadSpritesheet("assets/img/voiture.png");
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
  App.onObjectTouched.Add(function (sender, x, y, tileID, obj) {
    if (obj !== null) {
      if (obj.type == ObjectEffectType.INTERACTION_WITH_ZEPSCRIPTS) {
        App.sayToAll(`Number = ${obj.text}, Value = ${obj.param1}`, 0xFFFFFF);
        showScreamer(sender);
      }
    } else {
      App.sayToAll(`obj is null`, 0xFFFFFF);
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
App.onDestroy.Add(function () {
  Map.clearAllObjects();
});
/******/ })()
;