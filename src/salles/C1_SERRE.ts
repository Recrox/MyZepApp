import { HALLOWEEN_OBJECT_KEYS, OBJECTS } from "../objects-halloween";
import { TriggerObjectWithSound } from "../trigger/TriggerObjectWithSound";

export function C1_SERRE(): void {
  const object = OBJECTS[HALLOWEEN_OBJECT_KEYS.C1_SERRE.CITROUILLE];
  const object2 = OBJECTS[HALLOWEEN_OBJECT_KEYS.C1_SERRE.PLANTE];
  const object3 = OBJECTS[HALLOWEEN_OBJECT_KEYS.C1_SERRE.PLANTE2];
  const object4 = OBJECTS[HALLOWEEN_OBJECT_KEYS.C1_SERRE.PLANTE3];
  const object5 = OBJECTS[HALLOWEEN_OBJECT_KEYS.C1_SERRE.PLANTE4];
  TriggerObjectWithSound(object);
  TriggerObjectWithSound(object2);
  TriggerObjectWithSound(object3);
  TriggerObjectWithSound(object4);
  TriggerObjectWithSound(object5);
}
