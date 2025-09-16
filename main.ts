/**
 * Copyright (c) 2022 ZEP Co., LTD
 */

import "zep-script";
import { StartGame } from "./src/start-game";

let zepLogo = ScriptApp.loadSpritesheet("assets/img/zep_logo.png");

// Charge une image pour le screamer (mets ton fichier screamer.png)
let screamer = ScriptApp.loadSpritesheet("assets/img/screamer.png");

ScriptApp.onJoinPlayer.Add(function (player) {
  ScriptApp.showCenterLabel(`Bienvenue ${player.name} Hello World `);
});

ScriptApp.onStart.Add(function () {
  ScriptMap.putObject(0, 0, zepLogo, { overlap: true });
  StartGame();
});

ScriptApp.onDestroy.Add(function () {
  ScriptMap.clearAllObjects();
});

ScriptApp.onDestroy.Add(function () {
  ScriptMap.clearAllObjects();
});

// // Activates function when a player enters
// ScriptApp.onJoinPlayer.Add(function (player) {
// 	player.tag = {
// 		widget: null,
// 	};

// 	player.tag.widget = player.showWidget("sample.html.html", "top", 600, 500);
// 	player.tag.widget.onMessage.Add(function (player, msg) {
// 		// Closes the widget when the 'type: close' message is sent from the widget to the App 
// 		if (msg.type == "close") {
// 			player.showCenterLabel("Widget has been closed.");
// 			player.tag.widget.destroy();
// 			player.tag.widget = null;
// 		}
// 	});
// });