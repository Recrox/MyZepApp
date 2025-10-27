
export function startDarknessOverlay(): void {
  const canvas = document.getElementById("overlay") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

  function resize(): void {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  // Position de départ (milieu de l'écran)
  let lightX: number = window.innerWidth / 2;
  let lightY: number = window.innerHeight / 2;
  let radius: number = 150;

  // Reçoit les coordonnées du joueur depuis le script ZEP
  window.addEventListener("message", (event: MessageEvent) => {
    const data = event.data as { type: string; x: number; y: number };
    if (data.type === "updateLight") {
      lightX = data.x;
      lightY = data.y;
    }
  });

  function draw(): void {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Couche noire
    ctx.fillStyle = "rgba(0, 0, 0, 0.95)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // "Trou de lumière" en dégradé
    const gradient = ctx.createRadialGradient(
      lightX,
      lightY,
      radius * 0.5,
      lightX,
      lightY,
      radius
    );
    gradient.addColorStop(0, "rgba(0,0,0,0)");
    gradient.addColorStop(1, "rgba(0,0,0,0.95)");

    ctx.globalCompositeOperation = "destination-out";
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(lightX, lightY, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";

    requestAnimationFrame(draw);
  }

  draw();
}

