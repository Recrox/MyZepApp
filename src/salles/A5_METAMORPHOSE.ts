import { HALLOWEEN_OBJECT_KEYS, OBJECTS } from "../objects-halloween";
import { TriggerObjectWithSound } from "../trigger/TriggerObjectWithSound";

export function A5_METAMORPHOSE(): void {
  const object = OBJECTS[HALLOWEEN_OBJECT_KEYS.A5_METAMORPHOSE.CENDRE];
  ScriptApp.sayToAll(`A5_METAMORPHOSE function called.`);
  TriggerObjectWithSound(object);
}
