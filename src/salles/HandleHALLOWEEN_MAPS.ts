
import { A1_POTIONS } from "./A1_POTIONS";
import { A2_BIBLIOTHEQUE } from "./A2_BIBLIOTHEQUE";
import { A4_ASTRONOMIE } from "./A4_ASTRONOMIE";
import { A5_METAMORPHOSE } from "./A5_METAMORPHOSE";
import { B1_DORTOIR } from "./B1_DORTOIR";
import { B2_ELECTRICAL } from "./B2_ELECTRICAL";
import { B3_CUISINE } from "./B3_CUISINE";
import { B4_BAINS } from "./B4_BAINS";
import { C1_SERRE } from "./C1_SERRE";
import { C2_Forêt_Interdite } from "./C2 - Forêt Interdite";
import { C3_LABYRINTHE } from "./C3_LABYRINTHE";
import { C4_ENCLOS } from "./C4_ENCLOS";
import { C5_CABANE_HAGRID } from "./C5_CABANE_HAGRID";
import { D1_CRYPTE } from "./D1_CRYPTE";
import { D2_COULOIR } from "./D2_COULOIR";
import { D3_CACHOT } from "./D3_CACHOT";
import { D4_SACRIFICE } from "./D4_SACRIFICE";
import { HALL_A } from "./HALL_A";
import { HALL_A_POUR_A2 } from "./HALL_A_POUR_A2";
import { HALL_B } from "./HALL_B";
import { HALL_C } from "./HALL_C";
import { HALL_D } from "./HALL_D";

import { HALLOWEEN_MAPS } from "./HALLOWEEN_MAPS";
import { LOBBY } from "./LOBBY";
import { MENU } from "./MENU";

export function HandleHALLOWEEN_MAPS(): void {
  switch (ScriptMap.name) {
    case HALLOWEEN_MAPS.MENU:
      MENU();
      break;

    case HALLOWEEN_MAPS.LOBBY:
      LOBBY();
      break;

    // --- HALL A ---
    case HALLOWEEN_MAPS.HALL_A:
      HALL_A();
      break;

    case HALLOWEEN_MAPS.A1_POTIONS:
      A1_POTIONS();
      break;

    case HALLOWEEN_MAPS.HALL_A_POUR_A2:
      HALL_A_POUR_A2();
      break;

    case HALLOWEEN_MAPS.A2_BIBLIOTHEQUE:
      A2_BIBLIOTHEQUE();
      break;

    case HALLOWEEN_MAPS.A4_ASTRONOMIE:
      A4_ASTRONOMIE();
      break;

    case HALLOWEEN_MAPS.A5_METAMORPHOSE:
      A5_METAMORPHOSE();
      break;

    // --- HALL B ---
    case HALLOWEEN_MAPS.HALL_B:
      HALL_B();
      break;

    case HALLOWEEN_MAPS.B1_DORTOIR:
      B1_DORTOIR();
      break;

    case HALLOWEEN_MAPS.B2_ELECTRICAL:
      B2_ELECTRICAL();
      break;

    case HALLOWEEN_MAPS.B3_CUISINE:
      B3_CUISINE();
      break;

    case HALLOWEEN_MAPS.B4_BAINS:
      B4_BAINS();
      break;

    // --- HALL C ---
    case HALLOWEEN_MAPS.HALL_C:
      HALL_C();
      break;

    case HALLOWEEN_MAPS.C1_SERRE:
      C1_SERRE();
      break;

    case HALLOWEEN_MAPS.C2_FORET_INTERDITE:
      C2_Forêt_Interdite();
      break;

    case HALLOWEEN_MAPS.C3_LABYRINTHE:
      C3_LABYRINTHE();
      break;

    case HALLOWEEN_MAPS.C4_ENCLOS:
      C4_ENCLOS();
      break;

    case HALLOWEEN_MAPS.C5_CABANE_HAGRID:
      C5_CABANE_HAGRID();
      break;

    // --- HALL D ---
    case HALLOWEEN_MAPS.HALL_D:
      HALL_D();
      break;

    case HALLOWEEN_MAPS.D1_CRYPTE:
      D1_CRYPTE();
      break;

    case HALLOWEEN_MAPS.D2_COULOIR:
      D2_COULOIR();
      break;

    case HALLOWEEN_MAPS.D3_CACHOT:
      D3_CACHOT();
      break;

    case HALLOWEEN_MAPS.D4_SACRIFICE:
      D4_SACRIFICE();
      break;

    default:
      break;
  }
}
