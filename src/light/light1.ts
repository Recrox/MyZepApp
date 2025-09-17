import { ScriptPlayer } from "zep-script";
import { updateLight } from "./LIGHT_RADIUS";


export function light1() {

  // Quand le joueur se déplace
  ScriptApp.onJoinPlayer.Add((player: ScriptPlayer) => {
    updateLight(player);
  });
}




