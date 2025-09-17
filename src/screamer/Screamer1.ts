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
    TRIGGER_SCREAMER.x,
    TRIGGER_SCREAMER.y,
    screamerSprite,
    { key: TRIGGER_SCREAMER.key }
  );

  ScriptApp.onObjectTouched.Add(function (sender, x, y, tileID, obj:MapDataTileObject) {
    if (obj !== null) {
        if (obj.type == ObjectEffectType.INTERACTION_WITH_ZEPSCRIPTS) {

            // Object.keys(voiture1Salle1).forEach(k => {
            //     ScriptApp.sayToAll(`${k} = ${obj[k]}`, 0xFFFFFF);
            // });

            showScreamer(sender);
        }
    } else {
        ScriptApp.sayToAll(`obj is null`, 0xFFFFFF);
    }
  });

  const voiture1Salle1 = OBJECTS[OBJECT_KEYS.SALLE1.VOITURE1];

  if (voiture1Salle1) {
    ScriptApp.onObjectTouched.Add((sender, x, y, tileID, obj) => {
      // Compare sur param1 ou key
      if (obj.param1 === voiture1Salle1.param1) {
        showScreamer(sender);
        ScriptApp.sayToAll("Tu as touché VOITURE1 de la salle 1 !", 0xFFFFFF);
      }
    });
  }

}
