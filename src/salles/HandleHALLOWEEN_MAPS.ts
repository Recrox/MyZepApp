
import { C2_Forêt_Interdite } from "./C2 - Forêt Interdite";
import { HALL_C } from "./HALL_C";
import { HALLOWEEN_MAPS } from "./HALLOWEEN_MAPS";

export function HandleHALLOWEEN_MAPS(): void {
  switch (ScriptMap.name) {
    case HALLOWEEN_MAPS.MENU:
      break;

    case HALLOWEEN_MAPS.LOBBY:
      break;

    // --- HALL A ---
    case HALLOWEEN_MAPS.HALL_A:
      break;

    case HALLOWEEN_MAPS.A1_POTIONS:
      break;

    case HALLOWEEN_MAPS.HALL_A_POUR_A2:
      break;

    case HALLOWEEN_MAPS.A2_BIBLIOTHEQUE:
      break;

    case HALLOWEEN_MAPS.A4_ASTRONOMIE:
      break;

    case HALLOWEEN_MAPS.A5_METAMORPHOSE:
      
      break;

    // --- HALL B ---
    case HALLOWEEN_MAPS.HALL_B:
      break;

    case HALLOWEEN_MAPS.B1_DORTOIR:
      break;

    case HALLOWEEN_MAPS.B2_ELECTRICAL:
      break;

    case HALLOWEEN_MAPS.B3_CUISINE:
      break;

    case HALLOWEEN_MAPS.B4_BAINS:
      break;

    // --- HALL C ---
    case HALLOWEEN_MAPS.HALL_C:
      // ScriptApp.sayToAll(`JE SUIS RENTRE DANS LE CODE DE HALL C`);
      HALL_C();
      break;

    case HALLOWEEN_MAPS.C1_SERRE:
      break;

    case HALLOWEEN_MAPS.C2_FORET_INTERDITE:
      C2_Forêt_Interdite();
      break;

    case HALLOWEEN_MAPS.C3_LABYRINTHE:
      break;

    case HALLOWEEN_MAPS.C4_ENCLOS:
      break;

    case HALLOWEEN_MAPS.C5_CABANE_HAGRID:
      break;

    // --- HALL D ---
    case HALLOWEEN_MAPS.HALL_D:
      break;

    case HALLOWEEN_MAPS.D1_CRYPTE:
      break;

    case HALLOWEEN_MAPS.D2_COULOIR:
      break;

    case HALLOWEEN_MAPS.D3_CACHOT:
      break;

    case HALLOWEEN_MAPS.D4_SACRIFICE:
      break;

    default:
      break;
  }
}
