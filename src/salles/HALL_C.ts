import { addDarkness } from "../darkness/cameraSombre";
import { Darkness } from "../darkness/Darkness.1";

export function HALL_C(): void {
    addDarkness(Darkness.HARD); 
 
//    const Voiture = OBJECTS[OBJECT_KEYS.SALLE3.VOITURE1];

//   if (Voiture) {
//     ScriptApp.onObjectTouched.Add((sender : ScriptPlayer, x, y, tileID, obj) => {
//       // Compare sur param1 ou key
//       if (obj.param1 === Voiture.param1) {
//         toggleDarkness(250);
//         // showScreamer(sender);
//       }
//     });
//   }
}
