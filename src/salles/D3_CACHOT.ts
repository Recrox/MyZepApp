import { HALLOWEEN_OBJECT, HALLOWEEN_OBJECT_KEYS } from "../objects-halloween";
import { TriggerObjectWithSound } from "../trigger/TriggerObjectWithSound";

export function D3_CACHOT(): void {
    const object1 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.D3_CACHOT.ARAIGNE];
    const object2 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.D3_CACHOT.ARMOIRE];
    const object3 = HALLOWEEN_OBJECT[HALLOWEEN_OBJECT_KEYS.D3_CACHOT.TONNEAU];

    TriggerObjectWithSound(object1);
    TriggerObjectWithSound(object2);
    TriggerObjectWithSound(object3);

}
