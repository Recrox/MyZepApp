import { ScriptPlayer, ScriptDynamicResource } from "zep-script";

// Charge le sprite de la lumière (un cercle semi-transparent clair)
const lightSprite: ScriptDynamicResource = ScriptApp.loadSpritesheet("light.png");

export function light() {

  // Quand un joueur rejoint le jeu
  ScriptApp.onJoinPlayer.Add((player: ScriptPlayer) => {
    // Crée la lumière au départ sur le joueur
    ScriptMap.putObjectWithKey(player.tileX, player.tileY, lightSprite, { key: `light_${player.name}` });
  });

  // // Quand un joueur se déplace, on déplace sa lumière
  // ScriptApp.onPlayerMoved.Add((player: ScriptPlayer, from: any, to: any) => {
  //   const key = `light_${player.name}`;

  //   // Supprime l'ancienne lumière
  //   ScriptMap.removeObjectWithKey(key);

  //   // Recrée la lumière à la nouvelle position du joueur
  //   ScriptMap.putObjectWithKey(to.x, to.y, lightSprite, { key });
  // });

  // // Quand un joueur quitte, on enlève sa lumière
  // ScriptApp.onLeavePlayer.Add((player: ScriptPlayer) => {
  //   ScriptMap.removeObjectWithKey(`light_${player.name}`);
  // });
}
