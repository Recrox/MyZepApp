/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

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
function toggleDarkness(cameraEffectParam = 100) {
  if (!isDark()) {
    addDarkness(cameraEffectParam);
  } else {
    removeDarkness();
  }
}
function isDark() {
  return App.cameraEffect === 0;
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
  [OBJECT_KEYS.SALLE3.VOITURE1]: getObjectByParam1(OBJECT_KEYS.SALLE3.VOITURE1),
  [OBJECT_KEYS.SALLE3.VOITURE2]: getObjectByParam1(OBJECT_KEYS.SALLE3.VOITURE2),
  [OBJECT_KEYS.SALLE4.VOITURE1]: getObjectByParam1(OBJECT_KEYS.SALLE4.VOITURE1),
  [OBJECT_KEYS.SALLE4.VOITURE2]: getObjectByParam1(OBJECT_KEYS.SALLE4.VOITURE2),
  [OBJECT_KEYS.SALLE5.VOITURE1]: getObjectByParam1(OBJECT_KEYS.SALLE5.VOITURE1),
  [OBJECT_KEYS.SALLE5.VOITURE2]: getObjectByParam1(OBJECT_KEYS.SALLE5.VOITURE2),
  [OBJECT_KEYS.SALLE6.VOITURE1]: getObjectByParam1(OBJECT_KEYS.SALLE6.VOITURE1),
  [OBJECT_KEYS.SALLE6.VOITURE2]: getObjectByParam1(OBJECT_KEYS.SALLE6.VOITURE2),
  [OBJECT_KEYS.SALLE7.VOITURE1]: getObjectByParam1(OBJECT_KEYS.SALLE7.VOITURE1),
  [OBJECT_KEYS.SALLE7.VOITURE2]: getObjectByParam1(OBJECT_KEYS.SALLE7.VOITURE2),
  [OBJECT_KEYS.SALLE8.VOITURE1]: getObjectByParam1(OBJECT_KEYS.SALLE8.VOITURE1),
  [OBJECT_KEYS.SALLE8.VOITURE2]: getObjectByParam1(OBJECT_KEYS.SALLE8.VOITURE2),
  [OBJECT_KEYS.SALLE9.VOITURE1]: getObjectByParam1(OBJECT_KEYS.SALLE9.VOITURE1),
  [OBJECT_KEYS.SALLE9.VOITURE2]: getObjectByParam1(OBJECT_KEYS.SALLE9.VOITURE2),
  [OBJECT_KEYS.SALLE10.VOITURE1]: getObjectByParam1(OBJECT_KEYS.SALLE10.VOITURE1),
  [OBJECT_KEYS.SALLE10.VOITURE2]: getObjectByParam1(OBJECT_KEYS.SALLE10.VOITURE2),
  [OBJECT_KEYS.SALLE11.VOITURE1]: getObjectByParam1(OBJECT_KEYS.SALLE11.VOITURE1),
  [OBJECT_KEYS.SALLE11.VOITURE2]: getObjectByParam1(OBJECT_KEYS.SALLE11.VOITURE2),
  [OBJECT_KEYS.SALLE12.VOITURE1]: getObjectByParam1(OBJECT_KEYS.SALLE12.VOITURE1),
  [OBJECT_KEYS.SALLE12.VOITURE2]: getObjectByParam1(OBJECT_KEYS.SALLE12.VOITURE2),
  [OBJECT_KEYS.SALLE13.VOITURE1]: getObjectByParam1(OBJECT_KEYS.SALLE13.VOITURE1),
  [OBJECT_KEYS.SALLE13.VOITURE2]: getObjectByParam1(OBJECT_KEYS.SALLE13.VOITURE2),
  [OBJECT_KEYS.SALLE14.VOITURE1]: getObjectByParam1(OBJECT_KEYS.SALLE14.VOITURE1),
  [OBJECT_KEYS.SALLE14.VOITURE2]: getObjectByParam1(OBJECT_KEYS.SALLE14.VOITURE2),
  [OBJECT_KEYS.SALLE15.VOITURE1]: getObjectByParam1(OBJECT_KEYS.SALLE15.VOITURE1),
  [OBJECT_KEYS.SALLE15.VOITURE2]: getObjectByParam1(OBJECT_KEYS.SALLE15.VOITURE2),
  [OBJECT_KEYS.SALLE16.VOITURE1]: getObjectByParam1(OBJECT_KEYS.SALLE16.VOITURE1),
  [OBJECT_KEYS.SALLE16.VOITURE2]: getObjectByParam1(OBJECT_KEYS.SALLE16.VOITURE2),
  [OBJECT_KEYS.SALLE17.VOITURE1]: getObjectByParam1(OBJECT_KEYS.SALLE17.VOITURE1),
  [OBJECT_KEYS.SALLE17.VOITURE2]: getObjectByParam1(OBJECT_KEYS.SALLE17.VOITURE2),
  [OBJECT_KEYS.SALLE18.VOITURE1]: getObjectByParam1(OBJECT_KEYS.SALLE18.VOITURE1),
  [OBJECT_KEYS.SALLE18.VOITURE2]: getObjectByParam1(OBJECT_KEYS.SALLE18.VOITURE2),
  [OBJECT_KEYS.SALLE19.VOITURE1]: getObjectByParam1(OBJECT_KEYS.SALLE19.VOITURE1),
  [OBJECT_KEYS.SALLE19.VOITURE2]: getObjectByParam1(OBJECT_KEYS.SALLE19.VOITURE2),
  [OBJECT_KEYS.SALLE20.VOITURE1]: getObjectByParam1(OBJECT_KEYS.SALLE20.VOITURE1),
  [OBJECT_KEYS.SALLE20.VOITURE2]: getObjectByParam1(OBJECT_KEYS.SALLE20.VOITURE2),
  [OBJECT_KEYS.SALLE1.PORTE]: getObjectByParam1(OBJECT_KEYS.SALLE1.PORTE),
  [OBJECT_KEYS.SALLE2.PORTE]: getObjectByParam1(OBJECT_KEYS.SALLE2.PORTE),
  [OBJECT_KEYS.SALLE3.PORTE]: getObjectByParam1(OBJECT_KEYS.SALLE3.PORTE),
  [OBJECT_KEYS.SALLE4.PORTE]: getObjectByParam1(OBJECT_KEYS.SALLE4.PORTE),
  [OBJECT_KEYS.SALLE5.PORTE]: getObjectByParam1(OBJECT_KEYS.SALLE5.PORTE),
  [OBJECT_KEYS.SALLE6.PORTE]: getObjectByParam1(OBJECT_KEYS.SALLE6.PORTE),
  [OBJECT_KEYS.SALLE7.PORTE]: getObjectByParam1(OBJECT_KEYS.SALLE7.PORTE),
  [OBJECT_KEYS.SALLE8.PORTE]: getObjectByParam1(OBJECT_KEYS.SALLE8.PORTE),
  [OBJECT_KEYS.SALLE9.PORTE]: getObjectByParam1(OBJECT_KEYS.SALLE9.PORTE),
  [OBJECT_KEYS.SALLE10.PORTE]: getObjectByParam1(OBJECT_KEYS.SALLE10.PORTE),
  [OBJECT_KEYS.SALLE11.PORTE]: getObjectByParam1(OBJECT_KEYS.SALLE11.PORTE),
  [OBJECT_KEYS.SALLE12.PORTE]: getObjectByParam1(OBJECT_KEYS.SALLE12.PORTE),
  [OBJECT_KEYS.SALLE13.PORTE]: getObjectByParam1(OBJECT_KEYS.SALLE13.PORTE),
  [OBJECT_KEYS.SALLE14.PORTE]: getObjectByParam1(OBJECT_KEYS.SALLE14.PORTE),
  [OBJECT_KEYS.SALLE15.PORTE]: getObjectByParam1(OBJECT_KEYS.SALLE15.PORTE),
  [OBJECT_KEYS.SALLE16.PORTE]: getObjectByParam1(OBJECT_KEYS.SALLE16.PORTE),
  [OBJECT_KEYS.SALLE17.PORTE]: getObjectByParam1(OBJECT_KEYS.SALLE17.PORTE),
  [OBJECT_KEYS.SALLE18.PORTE]: getObjectByParam1(OBJECT_KEYS.SALLE18.PORTE),
  [OBJECT_KEYS.SALLE19.PORTE]: getObjectByParam1(OBJECT_KEYS.SALLE19.PORTE),
  [OBJECT_KEYS.SALLE20.PORTE]: getObjectByParam1(OBJECT_KEYS.SALLE20.PORTE)
};
;// ./src/salles/salle3.ts


function salle3() {
  toggleDarkness();
  const Voiture = OBJECTS[OBJECT_KEYS.SALLE3.VOITURE1];
  if (Voiture) {
    App.onObjectTouched.Add((sender, x, y, tileID, obj) => {
      if (obj.param1 === Voiture.param1) {
        removeDarkness();
      }
    });
  }
}
;// ./src/salles/salle.ts


function HandleSalle() {
  switch (Map.name) {
    case MAPS.SALLE1:
      break;
    case MAPS.SALLE2:
      break;
    case MAPS.SALLE3:
      salle3();
      break;
    case MAPS.SALLE4:
      break;
    case MAPS.SALLE5:
      break;
    case MAPS.SALLE6:
      break;
    case MAPS.SALLE7:
      break;
    case MAPS.SALLE8:
      break;
    case MAPS.SALLE9:
      break;
    case MAPS.SALLE10:
      break;
    case MAPS.SALLE11:
      break;
    case MAPS.SALLE12:
      break;
    case MAPS.SALLE13:
      break;
    case MAPS.SALLE14:
      break;
    case MAPS.SALLE15:
      break;
    case MAPS.SALLE16:
      break;
    case MAPS.SALLE17:
      break;
    case MAPS.SALLE18:
      break;
    case MAPS.SALLE19:
      break;
    case MAPS.SALLE20:
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


App.onJoinPlayer.Add(function (player) {
  if (Map.name === MAPS.SALLE1) {
    App.showCenterLabel(`Bienvenue ${player.name} Pour ta quête d'Halloween 💀💀💀`);
  } else {
    App.showCenterLabel(`Tu es dans la salle ${Map.name}`);
  }
});
App.onStart.Add(function () {
  StartGame();
});
App.onDestroy.Add(function () {
  Map.clearAllObjects();
});
/******/ })()
;