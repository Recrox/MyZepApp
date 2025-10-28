import { MapDataTileObject, ScriptPlayer } from "zep-script";
import { showScreamer } from "../screamer/showScreamer";
import { getRandomScreamerPath } from "../sounds/ScreamerPaths";

export function TriggerObjectWithSound(object: MapDataTileObject | null, screamerPathSound: string | null = null, screamerDurationMS: number = 4000): void {
  ScriptApp.sayToAll(`TriggerObjectWithSound function called.`);
  let isScreamerActive = false;
  if (object) {
    ScriptApp.onObjectTouched.Add((sender: ScriptPlayer, x, y, tileID, obj) => {
      if (obj.param1 === object.param1 && !isScreamerActive) {
        ScriptApp.sayToAll(`TriggerObjectWithSound activated by ${sender.name}`);
        isScreamerActive = true;

        const path = screamerPathSound ?? getRandomScreamerPath();
        showScreamer(sender, path);

        // # ANTI-SPAM
        const screamerDuration = screamerDurationMS; // ms — adapte selon la durée moyenne du son
        setTimeout(() => {
          isScreamerActive = false;
        }, screamerDuration);
      }
    });
  }
}