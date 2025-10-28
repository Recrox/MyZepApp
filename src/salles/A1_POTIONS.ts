import { HALLOWEEN_OBJECT_KEYS, OBJECTS } from "../objects-halloween";
import { TriggerObjectWithSound } from "../trigger/TriggerObjectWithSound";

export function A1_POTIONS(): void {
   const object = OBJECTS[HALLOWEEN_OBJECT_KEYS.A1_POTIONS.CITROUILLE];
   TriggerObjectWithSound(object);
}


