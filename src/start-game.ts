import "zep-script";
import { ScriptDynamicResource, ScriptPlayer } from "zep-script";

const TRIGGER_SCREAMER = { x: 20, y: 25, key: "Trigger_Screamer" };
const TRIGGER_VOITURE = { x: 10, y: 5, key: "Trigger_Voiture" };
// Charge le sprite du screamer
const screamerSprite: ScriptDynamicResource = ScriptApp.loadSpritesheet("screamer.png");

export function StartGame() {
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

// Fonction utilitaire Screamer
function showScreamer(player: ScriptPlayer) {
  ScriptApp.showCenterLabel("😱 SCREAMER !!!", 2000);
  ScriptApp.playSound("scream.mp3");
  // Optionnel : animation sur sprite
  ScriptMap.playObjectAnimationWithKey(TRIGGER_SCREAMER.key, "scary_animation", 1);
  // ScriptApp.showImagePopup(player, "screamer.png", { width: 800, height: 600 }); // adapte les dimensions
}

  // ScriptApp.onTriggerObject.Add((player: ScriptPlayer, object: any) => {
  //   if (!object) return;

  //   // Exemple : si le joueur est sur une tuile spécifique
  //   if ((player.position.x === TRIGGER_SCREAMER.x && player.position.y === TRIGGER_SCREAMER.y) ||
  //       (player.position.x === TRIGGER_VOITURE.x && player.position.y === TRIGGER_VOITURE.y)) {
  //     showScreamer(player);
  //   }
  // });

