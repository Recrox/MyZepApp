import { ObjectEffectType, ScriptDynamicResource, ScriptPlayer } from "zep-script";
import { showScreamer } from "./showScreamer";
import { MapDataTileObject } from "zep-script/src/ScriptMapDataTileObject";
import { getObjectByParam1 } from "../utils";
import { OBJECT_KEYS, OBJECTS } from "../objects";

export const TRIGGER_SCREAMER = { x: 20, y: 25, key: "Trigger_Screamer" };
export const TRIGGER_VOITURE = { x: 10, y: 5, key: "Trigger_Voiture" };

// Charge les sprites
const screamerSprite: ScriptDynamicResource = ScriptApp.loadSpritesheet("assets/img/screamer.png");
const voitureSprite: ScriptDynamicResource = ScriptApp.loadSpritesheet("assets/img/voiture.png");

export function Start1() {
  // ---- Trigger automatique (invisible) ----
  ScriptMap.putObjectWithKey(
    TRIGGER_SCREAMER.x,
    TRIGGER_SCREAMER.y,
    null,
    { key: TRIGGER_SCREAMER.key }
  );

  // ---- Objet interactif (visible, appuyable) ----
  ScriptMap.putObjectWithKey(
    TRIGGER_VOITURE.x,
    TRIGGER_VOITURE.y,
    voitureSprite,
    { key: TRIGGER_VOITURE.key }
  );

  // Quand un joueur marche sur un trigger auto
  ScriptApp.onTriggerObject.Add((
    player: ScriptPlayer,
    layerId: number,
    x: number,
    y: number,
    key: string
  ) => {
    // ScriptApp.sayToAll(`entré dans onTriggerObject ${layerId} ${x} ${y} ${key}`, 0xFFFFFF);
    if (key === TRIGGER_SCREAMER.key 
      && x === TRIGGER_SCREAMER.x 
      && y === TRIGGER_SCREAMER.y) {
      ScriptApp.sayToAll(`Key = ${key}`, 0xFFFFFF);
      showScreamer(player); // Auto
    }
  });

  ScriptApp.onObjectTouched.Add(function (sender, x, y, tileID, obj:MapDataTileObject) {
    if (obj !== null) {
        if (obj.type == ObjectEffectType.INTERACTION_WITH_ZEPSCRIPTS) {
            ScriptApp.sayToAll(`Number = ${obj.text}, Value = ${obj.param1}`, 0xFFFFFF);
            
            // Exemple d’utilisation
            // Exemple : récupérer VOITURE1 de la salle 1
            const voiture1Salle1 = OBJECTS[OBJECT_KEYS.SALLE1.VOITURE1];

            Object.keys(voiture1Salle1).forEach(k => {
                ScriptApp.sayToAll(`${k} = ${obj[k]}`, 0xFFFFFF);
            });

            showScreamer(sender);
        }
    } else {
        ScriptApp.sayToAll(`obj is null`, 0xFFFFFF);
    }
  });

  

}
