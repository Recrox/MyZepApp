import type { MapDataTileObject } from "zep-script";
import { getObjectByParam1 } from "./utils";

// Clés des objets
export const OBJECT_KEYS = {
  SALLE1: { VOITURE1: "SALLE1_VOITURE1", VOITURE2: "SALLE1_VOITURE2", PORTE: "SALLE1_PORTE" },
  SALLE2: { VOITURE1: "SALLE2_VOITURE1", VOITURE2: "SALLE2_VOITURE2", PORTE: "SALLE2_PORTE" },
  // … jusqu'à SALLE20
} as const;

// Objets résolus directement avec cast pour TS
export const OBJECTS: Record<string, MapDataTileObject | null> = {
  // Voitures
  [OBJECT_KEYS.SALLE1.VOITURE1]: getObjectByParam1(OBJECT_KEYS.SALLE1.VOITURE1) as unknown as MapDataTileObject,
  [OBJECT_KEYS.SALLE1.VOITURE2]: getObjectByParam1(OBJECT_KEYS.SALLE1.VOITURE2) as unknown as MapDataTileObject,
  [OBJECT_KEYS.SALLE2.VOITURE1]: getObjectByParam1(OBJECT_KEYS.SALLE2.VOITURE1) as unknown as MapDataTileObject,
  [OBJECT_KEYS.SALLE2.VOITURE2]: getObjectByParam1(OBJECT_KEYS.SALLE2.VOITURE2) as unknown as MapDataTileObject,

  // Portes
  [OBJECT_KEYS.SALLE1.PORTE]: getObjectByParam1(OBJECT_KEYS.SALLE1.PORTE) as unknown as MapDataTileObject,
  [OBJECT_KEYS.SALLE2.PORTE]: getObjectByParam1(OBJECT_KEYS.SALLE2.PORTE) as unknown as MapDataTileObject,
};
