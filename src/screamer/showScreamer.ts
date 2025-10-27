import { ScriptPlayer } from "zep-script";
//  import bluemanImg from "../../res/assets/img/cbo.jpg";

const SCREAM_SOUND: string = "assets/sounds/scream1.mp3";
const DEFAULT_IMAGE: string = "assets/img/screamer.png";
const DEFAULT_WIDGET_HTML = "assets/widgets/screamer.html";

export function showScreamer(
  player: ScriptPlayer,
  sound: string | null = null,
  htmlPath: string | null = null
) {
  const screamSound = sound ?? SCREAM_SOUND;
  const widgetPath = htmlPath ?? DEFAULT_WIDGET_HTML;

  // 🔊 Joue le son de screamer
  ScriptApp.playSound(screamSound);
}

// ScriptApp.playSound(COW_SOUND);

  // ScriptMap.playObjectAnimationWithKey(TRIGGER_SCREAMER.key, "scary_animation", 1);
  // ScriptApp.showImagePopup(player, "screamer.png", { width: 800, height: 600 }); // adapte les dimensions
  // const screamerObj = ScriptMap.putObjectWithKey(x, y, screamerSprite, { key: `screamer_${player.name}` });

  // DOC Insérer html widget:
  // https://docs.zep.us/zep-script/zep-script-api/scriptwidget/field