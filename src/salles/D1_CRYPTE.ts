import { addDarkness } from "../darkness/cameraSombre";
import { Darkness } from "../darkness/Darkness.1";
import { HALLOWEEN_OBJECT, HALLOWEEN_OBJECT_KEYS } from "../objects-halloween";
import { TriggerObjectWithSound } from "../trigger/TriggerObjectWithSound";

export function D1_CRYPTE(): void {
  addDarkness(Darkness.MEDIUM); 

  const object = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.D1_CRYPTE.RAT];
  const object2 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.D1_CRYPTE.RAT2];
  const object3 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.D1_CRYPTE.SQUELETTE];
  const object4 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.D1_CRYPTE.TROU];
  
  TriggerObjectWithSound(object);
  TriggerObjectWithSound(object2);
  TriggerObjectWithSound(object3);
  TriggerObjectWithSound(object4);

}
