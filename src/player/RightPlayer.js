import Ball from "../Ball";
import Board from "../Board";
import Player from "./Player";

class RightPlayer extends Player {

  constructor(x, y, yv, upKey, downKey, name) {
    super(x, y , yv, upKey, downKey, name);
    this.x = Board.width - RightPlayer.width - Board.gap;
    this.name = "Player 2";
    this.scoreX = (Board.width / 2) + (Board.gap * 2);
  }

  isSmashing(ballX, ballY) {
    const isPlayerTouchBall = (
      ballX >= this.x - Ball.radius &&
      ballX <= this.x + RightPlayer.width - Ball.radius
    );
    return this.isBallInPlayerYRange(ballY) && isPlayerTouchBall;
  }

}

export default RightPlayer;