import { ScriptPlayer } from "zep-script";
import { showScreamer } from "./showScreamer";
import { TRIGGER_SCREAMER, TRIGGER_VOITURE } from "./Screamer1";

export function Start2() {
  ScriptApp.onTriggerObject.Add((player: ScriptPlayer, layerId: number, x: number, y: number, key: string) => {
    // Si on touche le trigger SCREAMER
    if (x === TRIGGER_SCREAMER.x && y === TRIGGER_SCREAMER.y && key === TRIGGER_SCREAMER.key) {
      showScreamer(player);
    }

    // Si on touche le trigger VOITURE
    if (x === TRIGGER_VOITURE.x && y === TRIGGER_VOITURE.y && key === TRIGGER_VOITURE.key) {
      showScreamer(player);
    }
  });
}
