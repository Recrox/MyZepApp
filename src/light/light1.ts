import { ScriptPlayer, ScriptWidget } from "zep-script";
import { updateLight } from "./LIGHT_RADIUS";
import { DarknessOverlay } from "../darkness/darkness3";


export function light1() {

  // // Quand le joueur se déplace
  // ScriptApp.onJoinPlayer.Add((player: ScriptPlayer) => {
  //   updateLight(player);
  // });

  // ScriptApp.onInit.Add(() => {
  //   ScriptWidget.apply({
  //     id: "darkness",
  //     url: "darkness2.html", // fichier HTML qu'on va créer
  //     width: "100%",
  //     height: "100%",
  //     transparent: true,
  //     useTransparentBackground: true,
  //     allowPointerEvents: false,
  //   });
  // });

  // // envoi périodique (App.onUpdate existe, ~20ms)
  // ScriptApp.onUpdate.Add((dt: number) => {
  //   for (const p of ScriptApp.players) {
  //     if (!p.tag || !p.tag.widget) continue;
  //       ScriptApp.sayToAll(`${p.name} entre dans le for !`, 0xFFFFFF);

  //     // n'envoyer la mise à jour que si la position a changé
  //     if (p.tileX !== p.tag.lastTileX || p.tileY !== p.tag.lastTileY) {
  //       // convertir tile -> pixels (ajuste la valeur si ta map n'utilise pas 32px par tile)
  //       const px = p.tileX * 32;
  //       const py = p.tileY * 32;

  //       ScriptApp.sayToAll(`${p.name} updateLight !`, 0xFFFFFF);

  //       p.tag.widget.sendMessage({
  //         type: "updateLight",
  //         x: px,
  //         y: py,
  //       });

  //       p.tag.lastTileX = p.tileX;
  //       p.tag.lastTileY = p.tileY;
  //     }
  //   }
  // });

 // script.ts (ZEP Script)



 // expose pour le widget
(window as any).DarknessOverlay = DarknessOverlay;


ScriptApp.onJoinPlayer.Add((player: ScriptPlayer) => {
    const widget: ScriptWidget = player.showWidget("darkness3.html", "top", 1920, 1080);
    // Met à jour la position de la lumière à chaque update
    ScriptApp.onUpdate.Add(() => {
      widget.sendMessage({
        type: "updateLight",
        x: player.tileX * 32, // coordonnées map → pixels
        y: player.tileY * 32
      });
    });
});


  
}
