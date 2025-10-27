/**
 * Copyright (c) 2022 ZEP Co., LTD
 */

// https://docs.zep.us/
// https://docs.zep.us/zep-script/zep-script-api/scriptapp/lifecycle

import "zep-script";
import { StartGame } from "./src/start-game";
import { MAPS } from "./src/salles/MAPS";
import { handleDarknessOnStart } from "./handleDarknessOnStart";
import { showScreamerCopilot } from "./src/screamer/copilot/showsceamer-copilot";

// The first event called when running the app (before the user enters)
// Normal and Sidebar apps are called when the map is executed after applying the script
ScriptApp.onInit.Add(function(){
  StartGame();
});

// All players enter the app through this event [ Enter ]
// Calls whenever a player enters afterward [ Events ]
ScriptApp.onJoinPlayer.Add( function (player) {
  // ScriptApp.sayToAll(`onJoinPlayer`);
  if (ScriptMap.name === MAPS.SALLE1) {
    ScriptApp.showCenterLabel(`Bienvenue ${player.name} Pour ta quête d'Halloween 💀💀💀`);
  } else {
    ScriptApp.showCenterLabel(`Tu es dans la salle ${ScriptMap.name}`);
  }
  // showScreamerCopilot(player);
  // handleDarknessOnStart();

  // ScriptApp.sayToAll(`onJoinPlayer`);
  // StartGame();
});

// Event that starts first when each player enters [ Enter ]
ScriptApp.onStart.Add(function () {
  // ScriptApp.sayToAll(`onStart`);
  // ScriptMap.putObject(0, 0, zepLogo, { overlap: true });
  // ScriptApp.sayToAll(`onStart`);
  
});

// Calls event every 20ms
// dt: deltatime (time taken for the previous frame to complete) [ Update ]
ScriptApp.onUpdate.Add(function(dt){

});

ScriptApp.onLeavePlayer.Add(function(player){

});

ScriptApp.onDestroy.Add(function () {
  ScriptMap.clearAllObjects();
});


