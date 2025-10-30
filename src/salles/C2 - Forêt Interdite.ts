import { addDarkness } from "../darkness/cameraSombre";
import { Darkness } from "../darkness/Darkness.1";
import { HALLOWEEN_OBJECT, HALLOWEEN_OBJECT_KEYS } from "../objects-halloween";
import { TriggerObjectWithSound } from "../trigger/TriggerObjectWithSound";

export function C2_Forêt_Interdite(): void {
    addDarkness(Darkness.MEDIUM); 
    
    const object = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.C2_FORET_INTERDITE.CITROUILLE];
    const object2 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.C2_FORET_INTERDITE.CITROUILLE2];
    const object3 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.C2_FORET_INTERDITE.CITROUILLE3];
    const object4 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.C2_FORET_INTERDITE.ARAIGNE1];
    const object5 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.C2_FORET_INTERDITE.ARAIGNE2];

    TriggerObjectWithSound(object);
    TriggerObjectWithSound(object2);
    TriggerObjectWithSound(object3);
    TriggerObjectWithSound(object4);
    TriggerObjectWithSound(object5);
    
}
