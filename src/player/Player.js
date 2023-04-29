import Board from "../Board";
import { c } from "../../main";
import Game from "../Game";

class Player {
  static bg = "red";
  static width = 12;
  static scoreFont = "32px sans-serif";
  static scoreColor = "#fff";

  constructor({ x, y, yv, upKey, downKey, name }) {
    this.height = Board.playerHeight;
    Object.assign(this, { x, y, yv, upKey, downKey, name });
    this.score = 0;
    // Score position
    this.scoreX = null;
    this.scoreY = Board.gap * 2;
  }

  init() {
    this.y = Game.initPlayerY;
    this.score = 0;
  }

  draw() {
    c.fillStyle = Player.bg;
    c.fillRect(this.x, this.y, Player.width, this.height);
  }

  isBallInPlayerYRange(ballY) {
    const min = this.y;
    const max = this.y + this.height;
    return ballY > min && ballY < max;
  }

  isSmashing(ballX, ballY){}

  translateY(keyPressed) {
    const maxTop = 0;
    const maxBottom = Board.height - this.height;
    switch(keyPressed) {
      case this.upKey:
        this.y -= this.yv;
        break;
      case this.downKey:
        this.y += this.yv;
        break;
    }
    if(this.y < maxTop) this.y = maxTop;
    else if(this.y > maxBottom) this.y = maxBottom;
  }

  drawScore(){
    c.fillStyle = Player.scoreColor;
    c.font = Player.scoreFont;
    c.fillText(this.score.toString(), this.scoreX, this.scoreY);
  };
}

export default Player;