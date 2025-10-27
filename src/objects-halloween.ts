import type { MapDataTileObject } from "zep-script";
import { getObjectByParam1 } from "./utils";

// Clés des objets
export const OBJECT_KEYS = {
  A1_POTIONS: { CITROUILLE: "A1_POTIONS_CITROUILLE" },

} as const;


// Objets résolus directement avec cast pour TS
export const OBJECTS: Record<string, MapDataTileObject | null> = {
  // Voitures
  [OBJECT_KEYS.A1_POTIONS.CITROUILLE]: getObjectByParam1(OBJECT_KEYS.A1_POTIONS.CITROUILLE) as unknown as MapDataTileObject,
 
};

