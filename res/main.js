/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./src/screamer/showScreamer.ts

function showScreamer(player) {
  console.log("Screamer !!!");
  App.showCenterLabel("😱 SCREAMER !!!", 2000);
  App.playSound("scream.mp3");
  Map.playObjectAnimationWithKey(TRIGGER_SCREAMER.key, "scary_animation", 1);
}
;// ./src/screamer/Start1.ts

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
function Start1() {
  Map.putObjectWithKey(TRIGGER_SCREAMER.x, TRIGGER_SCREAMER.y, null, {
    key: TRIGGER_SCREAMER.key
  });
  Map.putObjectWithKey(TRIGGER_VOITURE.x, TRIGGER_VOITURE.y, null, {
    key: TRIGGER_VOITURE.key
  });
  App.onTriggerObject.Add((player, object) => {
    if (!object || !object.key) return;
    if (object.key === TRIGGER_SCREAMER.key || object.key === TRIGGER_VOITURE.key) {
      showScreamer(player);
    }
  });
}
;// ./src/screamer/Start2.ts


function Start2() {
  App.onTriggerObject.Add((player, object) => {
    console.log("onTriggerObject", object);
    if (!object) return;
    console.log("Trigger détecté", object);
    if (player.tileX === TRIGGER_SCREAMER.x && player.tileY === TRIGGER_SCREAMER.y || player.tileX === TRIGGER_VOITURE.x && player.tileY === TRIGGER_VOITURE.y) {
      console.log("Joueur sur une tuile trigger");
      showScreamer(player);
    }
  });
}
;// ./src/light/light.ts
const lightSprite = App.loadSpritesheet("light.png");
function light() {
  App.onJoinPlayer.Add(player => {
    Map.putObjectWithKey(player.tileX, player.tileY, lightSprite, {
      key: `light_${player.name}`
    });
  });
}
;// ./src/start-game.ts



function StartGame() {
  Start1();
  Start2();
  light();
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