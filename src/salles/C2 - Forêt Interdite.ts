import {  ScriptPlayer } from "zep-script";
import { addDarkness, toggleDarkness } from "../darkness/cameraSombre";
import { OBJECT_KEYS, OBJECTS } from "../objects";

const WIDTH = 1024;
const LENGTH = 1024;

export function C2_Forêt_Interdite(): void {
    addDarkness(300); 
 
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
