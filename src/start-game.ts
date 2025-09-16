import "zep-script";
import { ScriptPlayer } from "zep-script";

const TRIGGER_SCREAMER = { x: 20, y: 25, key: "Trigger_Screamer" };
const TRIGGER_VOITURE = { x: 10, y: 5, key: "Trigger_Voiture" };

export function StartGame() {
  // Crée les objets "trigger" invisibles avec une clé personnalisée
  ScriptMap.putObjectWithKey(TRIGGER_SCREAMER.x, TRIGGER_SCREAMER.y, null, { key: TRIGGER_SCREAMER.key });
  ScriptMap.putObjectWithKey(TRIGGER_VOITURE.x, TRIGGER_VOITURE.y, null, { key: TRIGGER_VOITURE.key }); 

  // Quand un joueur touche un objet trigger
  ScriptApp.onTriggerObject.Add((player: any, object: any) => {
    if (!object || !object.key) return;
    if (object.key === TRIGGER_SCREAMER.key || object.key === TRIGGER_VOITURE.key) {
      showScreamer(player);
    }
  });
}

// Fonction utilitaire Screamer
function showScreamer(player: ScriptPlayer) {
  ScriptApp.showCenterLabel("😱 SCREAMER !!!", 2000);
  ScriptApp.playSound("scream.mp3");
  // Optionnel : animation sur sprite
  ScriptMap.playObjectAnimationWithKey(TRIGGER_SCREAMER.key, "scary_animation", 1);
}