import "zep-script";
import { Start1 as Screamer1 } from "./screamer/Screamer1";
import { Start2 as Screamer2 } from "./screamer/Screamer2";
import { light1 } from "./light/light1";
import { registerVignetteToggle, removeDarkness, toggleDarkness } from "./darkness/cameraSombre";
import { HandleHALLOWEEN_MAPS } from "./salles/HandleHALLOWEEN_MAPS";
import { initScreamerUsage } from "./screamer/copilot/screamer-usage";
import { HandleSalle } from "./salles/salle";

export function StartGame() {
  // Screamer1();
  // Screamer2();
  // light1();
  // registerVignetteToggle();
  // initScreamerUsage();
  // HandleSalle();
  HandleHALLOWEEN_MAPS();
  CHEATCODE();
}


// CHEATCODE avec style keycode
export function CHEATCODE() {
  // // F11 = toggle darkness
  // ScriptApp.addOnKeyDown(122, (player) => { // 122 = F11
  //   toggleDarkness();
  //   ScriptApp.showCenterLabel("🌑 Mode obscur activé/désactivé (F11)", 2000);
  // });

  // // F12 = remove darkness
  // ScriptApp.addOnKeyDown(123, (player) => { // 123 = F12
  //   removeDarkness();
  //   ScriptApp.showCenterLabel("💡 Lumière restaurée (F12)", 2000);
  // });
}
