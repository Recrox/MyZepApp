import { HALLOWEEN_OBJECT_KEYS, HALLOWEEN_OBJECT } from "../objects-halloween";
import { TriggerObjectWithSound } from "../trigger/TriggerObjectWithSound";

export function A1_POTIONS(): void {
   const object = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.A1_POTIONS.CITROUILLE];
   
   TriggerObjectWithSound(object);
}


