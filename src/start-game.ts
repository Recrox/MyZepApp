import "zep-script";
import { Start1 as Screamer1 } from "./screamer/Screamer1";
import { Start2 as Screamer2 } from "./screamer/Screamer2";
import { light1 } from "./light/light1";
import { registerVignetteToggle } from "./darkness/cameraSombre";
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
}
