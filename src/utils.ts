import { ObjectEffectType } from "zep-script";
import { MapDataTileObject } from "zep-script/src/ScriptMapDataTileObject";

export function getObjectByParam1(value: string): MapDataTileObject | null  {
    const objects = ScriptMap.getObjectsByType(ObjectEffectType.INTERACTION_WITH_ZEPSCRIPTS)  as unknown as MapDataTileObject[];
    for (const obj of objects) {
        if (obj.param1 === value) {
            // ScriptApp.sayToAll(`Objet trouvé → text=${obj.text}, param1=${obj.param1}, type=${obj.type}, subtype=${obj.subType}`, 0xFFFFFF);
            return obj;
        }
    }
    return null;
}

export function getObjectsByParam1(value: string): MapDataTileObject[] {
    const objects = ScriptMap.getObjectsByType(ObjectEffectType.INTERACTION_WITH_ZEPSCRIPTS) as unknown as MapDataTileObject[];
    return objects.filter(obj => obj.param1 === value);
}
