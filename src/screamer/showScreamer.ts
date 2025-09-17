import { ScriptPlayer } from "zep-script";
import { TRIGGER_SCREAMER } from "./Screamer1";
import { SoundAsset } from "../class/SoundAsset";
import { ImageAsset } from "../class/ImageAsset";

const SCREAM_SOUND : SoundAsset = "assets/sounds/scream.mp3"; // Chemin vers le son de screamer
const COW_SOUND : SoundAsset = "assets/sounds/vache.mp3"; // Chemin vers le son de screamer

// Fonction utilitaire Screamer
export function showScreamer(player: ScriptPlayer, sound : SoundAsset = null, img:ImageAsset = null) {
  ScriptApp.showCenterLabel("😱 SCREAMER !!!", 2000);
  ScriptApp.playSound(SCREAM_SOUND);
  // ScriptApp.playSound(COW_SOUND);

  // ScriptMap.playObjectAnimationWithKey(TRIGGER_SCREAMER.key, "scary_animation", 1);
  // ScriptApp.showImagePopup(player, "screamer.png", { width: 800, height: 600 }); // adapte les dimensions
  // const screamerObj = ScriptMap.putObjectWithKey(x, y, screamerSprite, { key: `screamer_${player.name}` });

}

