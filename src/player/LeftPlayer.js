import Board from "../Board";
import Player from "./Player";
import Ball from "../Ball";

class LeftPlayer extends Player {

  constructor(x, y, yv, upKey, downKey, name) {
    super(x, y, yv, upKey, downKey, name);
    this.x = Board.gap;
    this.name = "Player 1";
    this.scoreX = (Board.width / 2) - (Board.gap * 2.7);
  }

  isSmashing(ballX, ballY) {
    const isPlayerTouchBall = (
      ballX <= this.x + LeftPlayer.width + Ball.radius &&
      ballX >= this.x + Ball.radius
    );
    return this.isBallInPlayerYRange(ballY) && isPlayerTouchBall;
  }

}

export default LeftPlayer;