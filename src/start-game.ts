import "zep-script";
import { Start1 as Screamer1 } from "./screamer/Screamer1";
import { Start2 as Screamer2 } from "./screamer/Screamer2";
import { light } from "./light/light";

export function StartGame() {
  Screamer1();
  Screamer2();
  // light();
}
