export function registerVignetteToggle(): void {
  // Active la fonction quand la touche Q (code 81) est pressée
  ScriptApp.addOnKeyDown(81, (player) => {
    if (ScriptApp.cameraEffect === 0) {
      ScriptApp.cameraEffect = 1; // 1 = vignette effect
      ScriptApp.cameraEffectParam1 = 500; // Définit la portée de l'effet vignette à 500
    } else if (ScriptApp.cameraEffect === 1) {
      ScriptApp.cameraEffect = 0; // Désactive l'effet vignette
    }

    // Applique les changements
    ScriptApp.sendUpdated();
  });
}

export function toggleDarkness(cameraEffectParam : number = 100): void {
    if (!isDark()) {
      addDarkness(cameraEffectParam); // Définit la portée de l'effet vignette à 500
    } else {
      removeDarkness();
    }
}

export function isDark() {
  return ScriptApp.cameraEffect === 0;
}

export function addDarkness(cameraEffectParam : number): void {
  ScriptApp.cameraEffect = 1; // 1 = vignette effect
  ScriptApp.cameraEffectParam1 = cameraEffectParam;
  ScriptApp.sendUpdated();
}

export function removeDarkness(): void {
    ScriptApp.cameraEffect = 0; // Désactive l'effet vignette
    ScriptApp.sendUpdated();
}


