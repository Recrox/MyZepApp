import { addDarkness } from "../darkness/cameraSombre";
import { Darkness } from "../darkness/Darkness.1";
import { HALLOWEEN_OBJECT, HALLOWEEN_OBJECT_KEYS } from "../objects-halloween";
import { TriggerObjectWithSound } from "../trigger/TriggerObjectWithSound";

export function HALL_D(): void {
  addDarkness(Darkness.MEDIUM); 
  
  const object = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.HALL_D.CITROUILLE];
  const object2 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.HALL_D.CITROUILLE2];
  const object3 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.HALL_D.CRANE];
  const object4 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.HALL_D.CRANE2];
  const object5 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.HALL_D.CRANE3];
  const object6 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.HALL_D.CRANE4];
  const object7 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.HALL_D.CRANE5];
  const object8 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.HALL_D.TOMBE];
  const object9 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.HALL_D.TOMBE2];

  TriggerObjectWithSound(object);
  TriggerObjectWithSound(object2);
  TriggerObjectWithSound(object3);
  TriggerObjectWithSound(object4);
  TriggerObjectWithSound(object5);
  TriggerObjectWithSound(object6);
  TriggerObjectWithSound(object7);
  TriggerObjectWithSound(object8);
  TriggerObjectWithSound(object9);
}
