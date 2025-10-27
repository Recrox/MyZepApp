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

  // 😱 Petit texte dramatique
  ScriptApp.showCenterLabel("😱 SCREAMER !!!", 2000);

   // 🧱 Affiche le widget HTML centré à l'écran
  // const widget = ScriptApp.showWidget(widgetPath, "middle", 1000, 1000);

 
// let blueman = ScriptApp.loadSpritesheet(bluemanImg);

  // let blueman = ScriptApp.loadSpritesheet("assets/img/blueman.png");
  // let blueman = ScriptApp.loadSpritesheet("blueman.png");

  // ScriptApp.showWidget("assets/widgets/sample.html", "top", 300, 300);

  player.tag = {
		widget: null,
	};

	player.tag.widget = ScriptApp.showWidget("assets/widgets/sample.html", "top", 300, 300);
	player.tag.widget.onMessage.Add(function (player, data) {
		if (data.type == "close") {
			player.showCenterLabel("The widget closed.");
			player.tag.widget.destroy();
			player.tag.widget = null;
		}
	});
	player.sendUpdated();
  
  // Activates function when q is pressed
  // Sends blueman image and text to the widget
  // **[App.addOnKeyDown](https://www.notion.so/Callbacks-7ac5078bab7c4f3180ae05463713581d) Explanation [(Link)](https://www.notion.so/Callbacks-7ac5078bab7c4f3180ae05463713581d)**
  ScriptApp.addOnKeyDown(81, function (player) {
    if (player.tag.widget) {
      player.tag.widget.sendMessage({
        text: "Blueman",
        // image: blueman.body,
      });
    }
  });

   // ⏳ Timer manuel via onUpdate
  let timer = 0;
  let active = true;

  // ScriptApp.onUpdate.Add((dt: number) => {
  //   if (!active) return;
  //   timer += dt;
  //   if (timer >= 2000) {
  //     widget.destroy();
  //     active = false; // stoppe le callback proprement
  //   }
  // });
}

export function showScreamerShake(
  player: ScriptPlayer,
  sound: string | null = null,
  htmlPath: string | null = null
) {
  const screamSound = sound ?? SCREAM_SOUND;
  const widgetPath = htmlPath ?? DEFAULT_WIDGET_HTML;

  // 🔊 Joue le son de screamer
  ScriptApp.playSound(screamSound);

  // 😱 Petit texte dramatique
  ScriptApp.showCenterLabel("😱 SCREAMER !!!", 2000);

  // === Camera shake ===
  // Paramètres (ajustables)
  const SHAKE_DURATION = 800; // ms
  const SHAKE_INTENSITY = 8; // units (pixels / world units selon l'API)
  const FRAME_MS = 16; // ~60fps

  // If the runtime provides a built-in shake helper, use it
  if (typeof (ScriptApp as any).shakeCamera === "function") {
    try {
      (ScriptApp as any).shakeCamera(SHAKE_DURATION, SHAKE_INTENSITY);
      return;
    } catch (e) {
      // continue to fallback manual shake
    }
  }

  // Try to find a camera object from player or ScriptApp
  const cam: any =
    (player && (player as any).camera) ||
    (typeof (ScriptApp as any).getCamera === "function" ? (ScriptApp as any).getCamera() : null) ||
    null;

  // Helper to read/set camera position in a flexible way
  function readCameraPosition(c: any) {
    if (!c) return null;
    if (typeof c.getPosition === "function") return c.getPosition();
    if (c.position) return { x: c.position.x, y: c.position.y, z: c.position.z ?? 0 };
    if (typeof (ScriptApp as any).getCameraPosition === "function") return (ScriptApp as any).getCameraPosition();
    return null;
  }

  function writeCameraPosition(c: any, pos: any) {
    if (!c || !pos) return;
    if (typeof c.setPosition === "function") return c.setPosition(pos);
    if (c.position) {
      c.position.x = pos.x;
      c.position.y = pos.y;
      if (typeof pos.z !== "undefined") c.position.z = pos.z;
      return;
    }
    if (typeof (ScriptApp as any).setCameraPosition === "function")
      return (ScriptApp as any).setCameraPosition(pos);
  }

  const originalPos = readCameraPosition(cam);

  // If we can read camera position, do a manual shake by applying small random offsets
  if (originalPos) {
    const start = Date.now();

    const step = () => {
      const elapsed = Date.now() - start;
      if (elapsed >= SHAKE_DURATION) {
        // restore original pos
        writeCameraPosition(cam, originalPos);
        return;
      }

      const progress = elapsed / SHAKE_DURATION;
      const damper = 1 - progress; // reduce intensity over time

      const offsetX = (Math.random() * 2 - 1) * SHAKE_INTENSITY * damper;
      const offsetY = (Math.random() * 2 - 1) * SHAKE_INTENSITY * damper;
      const offsetZ = (Math.random() * 2 - 1) * (originalPos.z !== undefined ? 0.5 * SHAKE_INTENSITY * damper : 0);

      const shaken = {
        x: originalPos.x + offsetX,
        y: originalPos.y + offsetY,
        z: typeof originalPos.z !== "undefined" ? originalPos.z + offsetZ : undefined,
      };

      writeCameraPosition(cam, shaken);

      // Prefer requestAnimationFrame if available, otherwise fallback to setTimeout
      if (typeof (globalThis as any).requestAnimationFrame === "function") {
        (globalThis as any).requestAnimationFrame(step);
      } else {
        setTimeout(step, FRAME_MS);
      }
    };

    step();
    return;
  }

  // Last-resort fallback: try camera offset APIs if available on ScriptApp
  if (typeof (ScriptApp as any).getCameraOffset === "function" && typeof (ScriptApp as any).setCameraOffset === "function") {
    const origOffset = (ScriptApp as any).getCameraOffset();
    const start = Date.now();

    const stepOffset = () => {
      const elapsed = Date.now() - start;
      if (elapsed >= SHAKE_DURATION) {
        (ScriptApp as any).setCameraOffset(origOffset);
        return;
      }
      const progress = elapsed / SHAKE_DURATION;
      const damper = 1 - progress;
      const offset = {
        x: (Math.random() * 2 - 1) * SHAKE_INTENSITY * damper,
        y: (Math.random() * 2 - 1) * SHAKE_INTENSITY * damper,
      };
      (ScriptApp as any).setCameraOffset(offset);

      if (typeof (globalThis as any).requestAnimationFrame === "function") {
        (globalThis as any).requestAnimationFrame(stepOffset);
      } else {
        setTimeout(stepOffset, FRAME_MS);
      }
    };

    stepOffset();
    return;
  }

  // If we reach here, no camera API found — nothing to shake.
  // Optionally, show a small visual fallback (screen flash) to accentuate the screamer.
  // ScriptApp.scr?.(100); // best-effort; ignore if not available
}



// ScriptApp.playSound(COW_SOUND);

  // ScriptMap.playObjectAnimationWithKey(TRIGGER_SCREAMER.key, "scary_animation", 1);
  // ScriptApp.showImagePopup(player, "screamer.png", { width: 800, height: 600 }); // adapte les dimensions
  // const screamerObj = ScriptMap.putObjectWithKey(x, y, screamerSprite, { key: `screamer_${player.name}` });

  // DOC Insérer html widget:
  // https://docs.zep.us/zep-script/zep-script-api/scriptwidget/field