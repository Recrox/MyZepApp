import { ScriptPlayer } from "zep-script";
import { OBJECT_KEYS, OBJECTS } from "../objects-halloween";
import { showScreamer } from "../screamer/showScreamer";
import { getRandomScreamerPath, SCREAMER_SOUNDS } from "../sounds/ScreamerPaths";

export function A1_POTIONS(): void {
   const object = OBJECTS[OBJECT_KEYS.A1_POTIONS.CITROUILLE];

  if (object) {
    ScriptApp.onObjectTouched.Add((sender : ScriptPlayer, x, y, tileID, obj) => {
      // Compare sur param1 ou key
      if (obj.param1 === object.param1) {
        // const son:string = "assets/sounds/screamer/062740_creepy-ghost-scream-81907.mp3";
        // const son:string = SCREAMER_SOUNDS.SCREAM_1;
        const screamerSound:string = getRandomScreamerPath();
        showScreamer(sender, screamerSound);
      }
    });
  }
}

// /**
//  * Empêche le spam du trigger :
//  * - n'enregistre le listener qu'une seule fois (guard `handlerRegistered`)
//  * - applique un cooldown par joueur (Map playerCooldowns)
//  * - supprime automatiquement l'entrée du cooldown après expiration pour éviter les fuites mémoire
//  *
//  * Ajuste PER_PLAYER_COOLDOWN_MS ou utilise les variantes proposées dans les commentaires.
//  */

// const PER_PLAYER_COOLDOWN_MS = 10_000; // 10s par défaut, change si nécessaire
// let a1PotionsHandlerRegistered = false;
// const playerCooldowns = new Map<string, number>();

// export function A1_POTIONS(): void {
//   const object = OBJECTS[OBJECT_KEYS.A1_POTIONS.CITROUILLE];
//   if (!object) return;

//   // Evite d'ajouter plusieurs fois le même listener si A1_POTIONS() est appelé plusieurs fois
//   if (a1PotionsHandlerRegistered) return;
//   a1PotionsHandlerRegistered = true;

//   ScriptApp.onObjectTouched.Add((sender: ScriptPlayer, x, y, tileID, obj) => {
//     // Filtre sur le bon objet
//     if (!obj || obj.param1 !== object.param1) return;

//     const now = Date.now();

//     // Récupère un identifiant stable du joueur (adapte selon l'API réelle : id, accountId, name...)
//     const playerId = (sender && (sender.id ?? (sender.name ?? "unknown_player"))) as string;

//     // Vérifie le cooldown par joueur
//     const last = playerCooldowns.get(playerId) ?? 0;
//     if (now - last < PER_PLAYER_COOLDOWN_MS) {
//       // Ignorer l'activation (spam)
//       return;
//     }

//     // Enregistrer le trigger et programmer la suppression de la clé pour éviter fuite mémoire
//     playerCooldowns.set(playerId, now);
//     setTimeout(() => playerCooldowns.delete(playerId), PER_PLAYER_COOLDOWN_MS + 100); // petit buffer

//     // Jouer le son
//     const screamerSound: string = getRandomScreamerPath();
//     showScreamer(sender, screamerSound);
//   });
// }