import "zep-script";
import { Start1 as Screamer1 } from "./screamer/Screamer1";
import { Start2 as Screamer2 } from "./screamer/Screamer2";
import { light1 } from "./light/light1";
import { registerVignetteToggle } from "./darkness/cameraSombre";
import { HandleSalle } from "./salles/salle";
import { initScreamerUsage } from "./screamer/copilot/screamer-usage";

export function StartGame() {
  // Screamer1();
  // Screamer2();
  // light1();
  // registerVignetteToggle();
  // initScreamerUsage();
  HandleSalle();
}
