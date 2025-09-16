import { ScriptDynamicResource, ScriptPlayer } from "zep-script";
import { showScreamer } from "./showScreamer";

export const TRIGGER_SCREAMER = { x: 20, y: 25, key: "Trigger_Screamer" };
export const TRIGGER_VOITURE = { x: 10, y: 5, key: "Trigger_Voiture" };
// Charge le sprite du screamer
const screamerSprite: ScriptDynamicResource = ScriptApp.loadSpritesheet("screamer.png");

export function Start1() {
  // Crée les objets "trigger" invisibles avec une clé personnalisée
  ScriptMap.putObjectWithKey(TRIGGER_SCREAMER.x, TRIGGER_SCREAMER.y, null, { key: TRIGGER_SCREAMER.key });
  ScriptMap.putObjectWithKey(TRIGGER_VOITURE.x, TRIGGER_VOITURE.y, null, { key: TRIGGER_VOITURE.key });

  // Quand un joueur touche un objet trigger
  ScriptApp.onTriggerObject.Add((player: ScriptPlayer, object: any) => {
    if (!object || !object.key) return;
    if (object.key === TRIGGER_SCREAMER.key || object.key === TRIGGER_VOITURE.key) {
      showScreamer(player);
    }
  });
}
