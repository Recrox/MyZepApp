import {  ScriptPlayer } from "zep-script";
import { addDarkness, removeDarkness, toggleDarkness } from "../darkness/cameraSombre";
import { OBJECT_KEYS, OBJECTS } from "../objects";
import { showScreamer } from "../screamer/showScreamer";
import { setPlayerScreamerOptOut, showScreamerCopilot } from "../screamer/copilot/showsceamer-copilot";

export function salle3(): void {

 const Voiture = OBJECTS[OBJECT_KEYS.SALLE3.VOITURE1];

  if (Voiture) {
    ScriptApp.onObjectTouched.Add((sender : ScriptPlayer, x, y, tileID, obj) => {
      // Compare sur param1 ou key
      if (obj.param1 === Voiture.param1) {
        // toggleDarkness();
        showScreamer(sender);

      }
    });
  }
}
