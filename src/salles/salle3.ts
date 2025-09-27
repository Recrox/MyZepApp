import { removeDarkness, toggleDarkness } from "../darkness/cameraSombre";
import { OBJECT_KEYS, OBJECTS } from "../objects";

export function salle3(): void {

 toggleDarkness();
 const Voiture = OBJECTS[OBJECT_KEYS.SALLE3.VOITURE1];

  if (Voiture) {
    ScriptApp.onObjectTouched.Add((sender, x, y, tileID, obj) => {
      // Compare sur param1 ou key
      if (obj.param1 === Voiture.param1) {
        removeDarkness();
      }
    });
  }
}
