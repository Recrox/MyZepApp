// darkness.ts

export class DarknessOverlay {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private lightX: number;
  private lightY: number;
  private radius: number;

  constructor(canvasId: string = "overlay", radius: number = 150) {
    this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    this.radius = radius;

    this.lightX = window.innerWidth / 2;
    this.lightY = window.innerHeight / 2;

    this.resize();
    window.addEventListener("resize", () => this.resize());

    // écoute les messages venant de ZEP
    window.addEventListener("message", (event: MessageEvent) => {
      const data = event.data as { type: string; x: number; y: number };
      if (data.type === "updateLight") {
        this.lightX = data.x;
        this.lightY = data.y;
      }
    });

    this.draw();
  }

  private resize(): void {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  private draw(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // couche noire semi-transparente
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.95)";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // trou lumineux (dégradé radial)
    const gradient = this.ctx.createRadialGradient(
      this.lightX, this.lightY, this.radius * 0.5,
      this.lightX, this.lightY, this.radius
    );
    gradient.addColorStop(0, "rgba(0,0,0,0)");
    gradient.addColorStop(1, "rgba(0,0,0,0.95)");

    this.ctx.globalCompositeOperation = "destination-out";
    this.ctx.fillStyle = gradient;
    this.ctx.beginPath();
    this.ctx.arc(this.lightX, this.lightY, this.radius, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.globalCompositeOperation = "source-over";

    requestAnimationFrame(() => this.draw());
  }
}
