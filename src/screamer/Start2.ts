import { ScriptPlayer } from "zep-script";
import { showScreamer } from "./showScreamer";
import { TRIGGER_SCREAMER, TRIGGER_VOITURE } from "./Start1";

export function Start2() {
  ScriptApp.onTriggerObject.Add((player: ScriptPlayer, object: any) => {
    if (!object) return;

    // Exemple : si le joueur est sur une tuile spécifique
    if ((player.tileX === TRIGGER_SCREAMER.x && player.tileY === TRIGGER_SCREAMER.y) ||
      (player.tileX === TRIGGER_VOITURE.x && player.tileY === TRIGGER_VOITURE.y)) {
      showScreamer(player);
    }
  });
}
