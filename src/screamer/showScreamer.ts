import { ScriptPlayer } from "zep-script";
import { TRIGGER_SCREAMER } from "./Start1";

// Fonction utilitaire Screamer
export function showScreamer(player: ScriptPlayer) {
  console.log("Screamer !!!");

  ScriptApp.showCenterLabel("😱 SCREAMER !!!", 2000);
  ScriptApp.playSound("scream.mp3");
  // Optionnel : animation sur sprite
  ScriptMap.playObjectAnimationWithKey(TRIGGER_SCREAMER.key, "scary_animation", 1);
  // ScriptApp.showImagePopup(player, "screamer.png", { width: 800, height: 600 }); // adapte les dimensions
  // const screamerObj = ScriptMap.putObjectWithKey(x, y, screamerSprite, { key: `screamer_${player.name}` });
}
