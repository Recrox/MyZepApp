import { ObjectEffectType, ScriptDynamicResource, ScriptPlayer } from "zep-script";
import { showScreamer } from "./showScreamer";
import { MapDataTileObject } from "zep-script/src/ScriptMapDataTileObject";

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
    if (key === TRIGGER_SCREAMER.key 
      && x === TRIGGER_SCREAMER.x 
      && y === TRIGGER_SCREAMER.y) {
      showScreamer(player); // Auto
    }
  });

  ScriptApp.onObjectTouched.Add(function (sender, x, y, tileID, obj:MapDataTileObject) {
    if (obj !== null) {
        if (obj.type == ObjectEffectType.INTERACTION_WITH_ZEPSCRIPTS) {
            ScriptApp.sayToAll(`Number = ${obj.text}, Value = ${obj.param1}`, 0xFFFFFF);
            showScreamer(sender);
        }
    } else {
        ScriptApp.sayToAll(`obj is null`, 0xFFFFFF);
    }
});

  // // Quand un joueur interagit avec un objet visible (E par défaut)
  // ScriptApp.onTriggerObject.Add((
  //   player: ScriptPlayer,
  //   layerId: number,
  //   x: number,
  //   y: number,
  //   key: string
  // ) => {
  //   if (key === TRIGGER_VOITURE.key && x === TRIGGER_VOITURE.x && y === TRIGGER_VOITURE.y) {
  //     showScreamer(player); // Appuyable
  //   }
  // });
}
