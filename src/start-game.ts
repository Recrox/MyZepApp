import "zep-script";
import { Start1 } from "./screamer/Start1";
import { Start2 } from "./screamer/Start2";
import { light } from "./light/light";

export function StartGame() {
  Start1();
  Start2();
  light();
}
