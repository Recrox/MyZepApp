import { addDarkness } from "../darkness/cameraSombre";
import { Darkness } from "../darkness/Darkness.1";
import { HALLOWEEN_OBJECT, HALLOWEEN_OBJECT_KEYS } from "../objects-halloween";
import { TriggerObjectWithSound } from "../trigger/TriggerObjectWithSound";

export function D2_COULOIR(): void {
  addDarkness(Darkness.EASY);

  const object1 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.D2_COULOIR.TROU];
  const object2 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.D2_COULOIR.TROU2];
  const object3 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.D2_COULOIR.TROU3];
  const object4 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.D2_COULOIR.TROU4];
  const object5 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.D2_COULOIR.TROU5];
  const object6 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.D2_COULOIR.TROU6];
  const object7 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.D2_COULOIR.TROU7];
  const object8 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.D2_COULOIR.TROU8];
  const object9 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.D2_COULOIR.TROU9];

  TriggerObjectWithSound(object1);
  TriggerObjectWithSound(object2);
  TriggerObjectWithSound(object3);
  TriggerObjectWithSound(object4);
  TriggerObjectWithSound(object5);
  TriggerObjectWithSound(object6);
  TriggerObjectWithSound(object7);
  TriggerObjectWithSound(object8);
  TriggerObjectWithSound(object9);
}

