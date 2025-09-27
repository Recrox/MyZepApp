import { addDarkness } from "./src/darkness/cameraSombre";
import { MAPS } from "./src/salles/MAPS";


export function handleDarknessOnStart() {
  switch (ScriptMap.name) {
    case MAPS.SALLE1:
      break;

    case MAPS.SALLE2:
      break;

    case MAPS.SALLE3:
      addDarkness(1.0);
      break;
    case MAPS.SALLE4:
      break;

    case MAPS.SALLE5:
      break;

    case MAPS.SALLE6:
      break;

    case MAPS.SALLE7:
      break;

    case MAPS.SALLE8:
      break;

    case MAPS.SALLE9:
      break;

    case MAPS.SALLE10:
      break;

    case MAPS.SALLE11:
      break;

    case MAPS.SALLE12:
      break;

    case MAPS.SALLE13:
      break;

    case MAPS.SALLE14:
      break;

    case MAPS.SALLE15:
      break;

    case MAPS.SALLE16:
      break;

    case MAPS.SALLE17:
      break;

    case MAPS.SALLE18:
      break;

    case MAPS.SALLE19:
      break;

    case MAPS.SALLE20:
      break;

    default:
      break;
  }
}
