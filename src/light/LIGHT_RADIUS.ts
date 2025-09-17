import { AppKeyObjectData, ScriptDynamicResource, ScriptPlayer } from "zep-script";

const LIGHT_SPRITE: ScriptDynamicResource = ScriptApp.loadSpritesheet("assets/img/light_overlay.png");
const LIGHT_KEY = "LIGHT_";

export function light(player: ScriptPlayer) {
  const x = player.tileX;
  const y = player.tileY;

    // Création des options pour putObjectWithKey
  const overlayOptions: Omit<AppKeyObjectData, "npcProperty"> = {
    key: `${LIGHT_KEY}${player.name}`,
    topObject: true,     // overlay au-dessus du joueur
    overlap: true,       // permet de se superposer à d'autres objets
    offsetX: 0,
    offsetY: 0,
    activeDistance: 0,   // visible tout le temps
    triggerByTouch: false
  };

  // Placer le sprite overlay centré sur le joueur
  ScriptMap.putObjectWithKey(
    x,
    y,
    LIGHT_SPRITE,
    overlayOptions
  );
}

export function updateLight(player: ScriptPlayer) {
  // On enlève l’ancienne lumière (si déjà posée)
  // ScriptMap.removeObjectWithKey(LIGHT_KEY);

  // On place la lumière sur la position du joueur
  ScriptMap.putObjectWithKey(
    player.tileX,
    player.tileY,
    LIGHT_SPRITE,
    { key: LIGHT_KEY + player.name, overlap: true, topObject: true }
  );

  // ✅ Log visible dans le chat global
  ScriptApp.sayToAll(
    `${player.name} → lumière placée en (${player.tileX}, ${player.tileY})`
  );
}

// // Paramètres de lumière
// const LIGHT_RADIUS = 5; // rayon visible autour du joueur (en tiles)
// const DARKNESS_COLOR = "rgba(0,0,0,0.7)"; // overlay sombre

// export function light2(player: ScriptPlayer) {
//   const x = player.tileX;
//   const y = player.tileY;

//   // // Supprimer l'ancien overlay lumineux du joueur
//   // ScriptMap.removeObjectWithKey(`light_${player.name}`);

//   // Parcourir les tiles autour du joueur
//   for (let i = x - LIGHT_RADIUS; i <= x + LIGHT_RADIUS; i++) {
//     for (let j = y - LIGHT_RADIUS; j <= y + LIGHT_RADIUS; j++) {
//       const distance = Math.sqrt((i - x) ** 2 + (j - y) ** 2);

//       if (distance > LIGHT_RADIUS) {
//         // assombrir les tiles en dehors du rayon
//         ScriptMap.putObjectWithKey(i, j, null, { color: DARKNESS_COLOR });
//       } else {
//         // garder clair autour du joueur
//         ScriptMap.putObjectWithKey(i, j, null, { color: "transparent" });
//       }
//     }
//   }
// }