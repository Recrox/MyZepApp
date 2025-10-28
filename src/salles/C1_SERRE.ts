import { HALLOWEEN_OBJECT_KEYS, HALLOWEEN_OBJECT } from "../objects-halloween";
import { TriggerObjectWithSound } from "../trigger/TriggerObjectWithSound";

export function C1_SERRE(): void {
  const object = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.C1_SERRE.CITROUILLE];
  const object2 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.C1_SERRE.PLANTE];
  const object3 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.C1_SERRE.PLANTE2];
  const object4 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.C1_SERRE.PLANTE3];
  const object5 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.C1_SERRE.PLANTE4];
  
  TriggerObjectWithSound(object);
  TriggerObjectWithSound(object2);
  TriggerObjectWithSound(object3);
  TriggerObjectWithSound(object4);
  TriggerObjectWithSound(object5);
}
