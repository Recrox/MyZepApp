import { addDarkness } from "../darkness/cameraSombre";
import { Darkness } from "../darkness/Darkness.1";
import { HALLOWEEN_OBJECT, HALLOWEEN_OBJECT_KEYS } from "../objects-halloween";
import { TriggerObjectWithSound } from "../trigger/TriggerObjectWithSound";

export function C3_LABYRINTHE(): void {
  addDarkness(Darkness.EASY); 
  
  const object = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.C3_LABYRINTHE.CITROUILLE];
  const object2 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.C3_LABYRINTHE.CITROUILLE2];
  const object3 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.C3_LABYRINTHE.CITROUILLE3];
  const object4 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.C3_LABYRINTHE.CITROUILLE4];
  const object5 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.C3_LABYRINTHE.CITROUILLE5];
  const object6 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.C3_LABYRINTHE.CRANE];
  const object7 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.C3_LABYRINTHE.FANTOME];
  const object8 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.C3_LABYRINTHE.RAT];
  const object9 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.C3_LABYRINTHE.RAT2];

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