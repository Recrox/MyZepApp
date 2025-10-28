import { addDarkness } from "../darkness/cameraSombre";
import { OBJECTS } from "../objects";
import { Darkness } from "../darkness/Darkness.1";
import { HALLOWEEN_OBJECT_KEYS } from "../objects-halloween";
import { TriggerObjectWithSound } from "../trigger/TriggerObjectWithSound";

const WIDTH = 1024;
const LENGTH = 1024;

export function C2_Forêt_Interdite(): void {
    
    ScriptApp.showCenterLabel("C2 - Forêt Interdite", WIDTH, LENGTH, 3000);
    ScriptApp.sayToAll(`C2_Forêt_Interdite`);
    const object = OBJECTS[HALLOWEEN_OBJECT_KEYS.C2_FORET_INTERDITE.CITROUILLE];
    const object2 = OBJECTS[HALLOWEEN_OBJECT_KEYS.C2_FORET_INTERDITE.CITROUILLE2];
    const object3 = OBJECTS[HALLOWEEN_OBJECT_KEYS.C2_FORET_INTERDITE.CITROUILLE3];
    const object4 = OBJECTS[HALLOWEEN_OBJECT_KEYS.C2_FORET_INTERDITE.ARAIGNE1];
    const object5 = OBJECTS[HALLOWEEN_OBJECT_KEYS.C2_FORET_INTERDITE.ARAIGNE2];
    TriggerObjectWithSound(object);
    TriggerObjectWithSound(object2);
    TriggerObjectWithSound(object3);
    TriggerObjectWithSound(object4);
    TriggerObjectWithSound(object5);
    addDarkness(Darkness.MEDIUM); 
}
