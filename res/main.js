/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./src/screamer/showScreamer.ts

const SCREAM_SOUND = "assets/sounds/scream.mp3";
function showScreamer(player) {
  App.showCenterLabel("😱 SCREAMER !!!", 2000);
  App.playSound(SCREAM_SOUND);
  Map.playObjectAnimationWithKey(TRIGGER_SCREAMER.key, "scary_animation", 1);
}
;// ./src/utils.ts
function getObjectByParam1(value) {
  const objects = Map.getObjectsByType(ObjectEffectType.INTERACTION_WITH_ZEPSCRIPTS);
  for (const obj of objects) {
    if (obj.param1 === value) {
      App.sayToAll(`Objet trouvé → text=${obj.text}, param1=${obj.param1}, type=${obj.type}, subtype=${obj.subType}`, 0xFFFFFF);
      return obj;
    }
  }
  return null;
}
function getObjectsByParam1(value) {
  const objects = Map.getObjectsByType(ObjectEffectType.INTERACTION_WITH_ZEPSCRIPTS);
  return objects.filter(obj => obj.param1 === value);
}
;// ./src/objects.ts

const OBJECT_KEYS = {
  SALLE1: {
    VOITURE1: "SALLE1_VOITURE1",
    VOITURE2: "SALLE1_VOITURE2",
    PORTE: "SALLE1_PORTE"
  },
  SALLE2: {
    VOITURE1: "SALLE2_VOITURE1",
    VOITURE2: "SALLE2_VOITURE2",
    PORTE: "SALLE2_PORTE"
  },
  SALLE3: {
    VOITURE1: "SALLE3_VOITURE1",
    VOITURE2: "SALLE3_VOITURE2",
    PORTE: "SALLE3_PORTE"
  },
  SALLE4: {
    VOITURE1: "SALLE4_VOITURE1",
    VOITURE2: "SALLE4_VOITURE2",
    PORTE: "SALLE4_PORTE"
  },
  SALLE5: {
    VOITURE1: "SALLE5_VOITURE1",
    VOITURE2: "SALLE5_VOITURE2",
    PORTE: "SALLE5_PORTE"
  },
  SALLE6: {
    VOITURE1: "SALLE6_VOITURE1",
    VOITURE2: "SALLE6_VOITURE2",
    PORTE: "SALLE6_PORTE"
  },
  SALLE7: {
    VOITURE1: "SALLE7_VOITURE1",
    VOITURE2: "SALLE7_VOITURE2",
    PORTE: "SALLE7_PORTE"
  },
  SALLE8: {
    VOITURE1: "SALLE8_VOITURE1",
    VOITURE2: "SALLE8_VOITURE2",
    PORTE: "SALLE8_PORTE"
  },
  SALLE9: {
    VOITURE1: "SALLE9_VOITURE1",
    VOITURE2: "SALLE9_VOITURE2",
    PORTE: "SALLE9_PORTE"
  },
  SALLE10: {
    VOITURE1: "SALLE10_VOITURE1",
    VOITURE2: "SALLE10_VOITURE2",
    PORTE: "SALLE10_PORTE"
  },
  SALLE11: {
    VOITURE1: "SALLE11_VOITURE1",
    VOITURE2: "SALLE11_VOITURE2",
    PORTE: "SALLE11_PORTE"
  },
  SALLE12: {
    VOITURE1: "SALLE12_VOITURE1",
    VOITURE2: "SALLE12_VOITURE2",
    PORTE: "SALLE12_PORTE"
  },
  SALLE13: {
    VOITURE1: "SALLE13_VOITURE1",
    VOITURE2: "SALLE13_VOITURE2",
    PORTE: "SALLE13_PORTE"
  },
  SALLE14: {
    VOITURE1: "SALLE14_VOITURE1",
    VOITURE2: "SALLE14_VOITURE2",
    PORTE: "SALLE14_PORTE"
  },
  SALLE15: {
    VOITURE1: "SALLE15_VOITURE1",
    VOITURE2: "SALLE15_VOITURE2",
    PORTE: "SALLE15_PORTE"
  },
  SALLE16: {
    VOITURE1: "SALLE16_VOITURE1",
    VOITURE2: "SALLE16_VOITURE2",
    PORTE: "SALLE16_PORTE"
  },
  SALLE17: {
    VOITURE1: "SALLE17_VOITURE1",
    VOITURE2: "SALLE17_VOITURE2",
    PORTE: "SALLE17_PORTE"
  },
  SALLE18: {
    VOITURE1: "SALLE18_VOITURE1",
    VOITURE2: "SALLE18_VOITURE2",
    PORTE: "SALLE18_PORTE"
  },
  SALLE19: {
    VOITURE1: "SALLE19_VOITURE1",
    VOITURE2: "SALLE19_VOITURE2",
    PORTE: "SALLE19_PORTE"
  },
  SALLE20: {
    VOITURE1: "SALLE20_VOITURE1",
    VOITURE2: "SALLE20_VOITURE2",
    PORTE: "SALLE20_PORTE"
  }
};
const OBJECTS = {
  [OBJECT_KEYS.SALLE1.VOITURE1]: getObjectByParam1(OBJECT_KEYS.SALLE1.VOITURE1),
  [OBJECT_KEYS.SALLE1.VOITURE2]: getObjectByParam1(OBJECT_KEYS.SALLE1.VOITURE2),
  [OBJECT_KEYS.SALLE2.VOITURE1]: getObjectByParam1(OBJECT_KEYS.SALLE2.VOITURE1),
  [OBJECT_KEYS.SALLE2.VOITURE2]: getObjectByParam1(OBJECT_KEYS.SALLE2.VOITURE2),
  [OBJECT_KEYS.SALLE1.PORTE]: getObjectByParam1(OBJECT_KEYS.SALLE1.PORTE),
  [OBJECT_KEYS.SALLE2.PORTE]: getObjectByParam1(OBJECT_KEYS.SALLE2.PORTE)
};
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
  Map.putObjectWithKey(TRIGGER_SCREAMER.x, TRIGGER_SCREAMER.y, screamerSprite, {
    key: TRIGGER_SCREAMER.key
  });
  App.onObjectTouched.Add(function (sender, x, y, tileID, obj) {
    if (obj !== null) {
      if (obj.type == ObjectEffectType.INTERACTION_WITH_ZEPSCRIPTS) {
        showScreamer(sender);
      }
    } else {
      App.sayToAll(`obj is null`, 0xFFFFFF);
    }
  });
  const voiture1Salle1 = OBJECTS[OBJECT_KEYS.SALLE1.VOITURE1];
  if (voiture1Salle1) {
    App.onObjectTouched.Add((sender, x, y, tileID, obj) => {
      if (obj.param1 === voiture1Salle1.param1) {
        showScreamer(sender);
        App.sayToAll("Tu as touché VOITURE1 de la salle 1 !", 0xFFFFFF);
      }
    });
  }
}
;// ./src/start-game.ts

function StartGame() {
  Start1();
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