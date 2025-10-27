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

export function toggleDarkness(cameraEffectParam : number = 200): void {
  // ScriptApp.sayToAll(`Toggle darkness, isDark=${isDark()}`);
  // ScriptApp.sayToAll(`Current cameraEffect: ${ScriptApp.cameraEffect}`);
    if (!isDark()) {
      addDarkness(cameraEffectParam); // Définit la portée de l'effet vignette à 500
    } else {
      removeDarkness();
    }
}

export function isDark() {
  return ScriptApp.cameraEffect === 1;
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

export function pulseDarkness(): void {
  ScriptApp.cameraEffect = 1; // 1 = vignette effect
  let darkness = 0.2; // point de départ (20% sombre)
  let direction = 1;  // 1 = s'assombrit, -1 = s'éclaircit

  const interval = setInterval(() => {
    darkness += 0.02 * direction;

    // bornes : entre 0.2 (clair) et 0.6 (sombre)
    if (darkness >= 0.6) direction = -1;
    if (darkness <= 0.2) direction = 1;

    ScriptApp.cameraEffectParam1 = darkness;
    ScriptApp.sendUpdated();
  }, 100); // toutes les 100 ms

  // Pour arrêter après 5 secondes :
  setTimeout(() => clearInterval(interval), 5000);
}
