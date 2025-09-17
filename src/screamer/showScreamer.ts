import { ScriptPlayer } from "zep-script";
import { TRIGGER_SCREAMER } from "./Screamer1";

const SCREAM_SOUND = "assets/sounds/scream.mp3"; // Chemin vers le son de screamer
const COW_SOUND = "assets/sounds/vache.mp3"; // Chemin vers le son de screamer

// Fonction utilitaire Screamer
export function showScreamer(player: ScriptPlayer) {
  ScriptApp.showCenterLabel("😱 SCREAMER !!!", 2000);
  // ScriptApp.playSound(SCREAM_SOUND);
  ScriptApp.playSound(COW_SOUND);
  // Optionnel : animation sur sprite
  ScriptMap.playObjectAnimationWithKey(TRIGGER_SCREAMER.key, "scary_animation", 1);
  // ScriptApp.showImagePopup(player, "screamer.png", { width: 800, height: 600 }); // adapte les dimensions
  // const screamerObj = ScriptMap.putObjectWithKey(x, y, screamerSprite, { key: `screamer_${player.name}` });

  
}

