import Board from "./Board";
import Game from "./Game";
import { c } from "../main";

class Ball {
  static radius = 10;
  static bg = "#fff";

  constructor() {
    this.x = null;
    this.y = null;
    this.xv = null;
    this.yv = null;
  }

  init() {
    this.x = Game.initBallX;
    this.y = Game.initBallY;
    this.xv = Game.getRandomBallVelocity(Ball.radius);
    this.yv = Game.getRandomBallVelocity(Ball.radius);
  }

  draw() {
    c.fillStyle = Ball.bg;
    c.beginPath();
    c.arc(this.x, this.y, Ball.radius, 0, Math.PI * 2);
    c.fill();
  }

  invertXv() {
    this.xv *= -1;
  }

  invertYv() {
    this.yv *= -1;
  }

  update() {
    const maxTopY = Ball.radius;
    const maxBottomY = Board.height - Ball.radius;
    this.x += this.xv;
    this.y += this.yv;
    if (this.y < maxTopY || this.y > maxBottomY) {
      this.invertYv();
    }
  }
}

export default Ball;