import { HALLOWEEN_OBJECT_KEYS, HALLOWEEN_OBJECT } from "../objects-halloween";
import { TriggerObjectWithSound } from "../trigger/TriggerObjectWithSound";

export function A5_METAMORPHOSE(): void {
  const object = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.A5_METAMORPHOSE.CENDRE];
  ScriptApp.sayToAll(`A5_METAMORPHOSE function called.`);
  TriggerObjectWithSound(object);
}
