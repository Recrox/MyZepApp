/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./src/darkness/darkness3.ts
class DarknessOverlay {
  constructor(canvasId = "overlay", radius = 150) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.radius = radius;
    this.lightX = window.innerWidth / 2;
    this.lightY = window.innerHeight / 2;
    this.resize();
    window.addEventListener("resize", () => this.resize());
    window.addEventListener("message", event => {
      const data = event.data;
      if (data.type === "updateLight") {
        this.lightX = data.x;
        this.lightY = data.y;
      }
    });
    this.draw();
  }
  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.95)";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    const gradient = this.ctx.createRadialGradient(this.lightX, this.lightY, this.radius * 0.5, this.lightX, this.lightY, this.radius);
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
;// ./src/light/light1.ts

function light1() {
  window.DarknessOverlay = DarknessOverlay;
  App.onJoinPlayer.Add(player => {
    const widget = player.showWidget("darkness3.html", "top", 1920, 1080);
    App.onUpdate.Add(() => {
      widget.sendMessage({
        type: "updateLight",
        x: player.tileX * 32,
        y: player.tileY * 32
      });
    });
  });
}
;// ./src/start-game.ts

function StartGame() {
  light1();
}
;// ./main.ts

let zepLogo = App.loadSpritesheet("assets/img/zep_logo.png");
let screamer = App.loadSpritesheet("assets/img/screamer.png");
App.onJoinPlayer.Add(function (player) {
  App.showCenterLabel(`Bienvenue ${player.name} Hello World `);
});
App.onStart.Add(function () {
  Map.putObject(0, 0, zepLogo, {
    overlap: true
  });
  StartGame();
});
App.onDestroy.Add(function () {
  Map.clearAllObjects();
});
/******/ })()
;