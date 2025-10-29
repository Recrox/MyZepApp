import { HALLOWEEN_OBJECT, HALLOWEEN_OBJECT_KEYS } from "../objects-halloween";
import { TriggerObjectWithSound } from "../trigger/TriggerObjectWithSound";

export function D4_SACRIFICE(): void {
    const object1 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.D4_SACRIFICE.BAINS];
    const object2 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.D4_SACRIFICE.ANTRE];

    TriggerObjectWithSound(object1);
    TriggerObjectWithSound(object2);
}
