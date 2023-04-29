import { c } from "../main";

class Board {
  static bg = "#000";
  static width = window.innerWidth;
  static height = window.innerHeight;
  static gap = 16;
  // Used to draw the vertical line in the center
  static dashHeight = 20;
  static dashWidth = 5;
  static dashBg = "#fff";
  static playerHeight = Board.height / 6;

  static drawBg() {
    c.fillStyle = Board.bg;
    c.fillRect(0, 0, Board.width, Board.height);
  }

  static drawVerticalLine() {
    const numDots = Math.ceil(Board.height / Board.dashHeight);
    for (var i = 0; i < numDots; i++) {
      c.fillStyle = Board.dashBg;
      if (i % 2 === 1) {
        c.fillStyle = Board.bg;
      }
      c.fillRect(
        Board.width / 2,
        i * Board.dashHeight,
        Board.dashWidth,
        Board.dashHeight
      );
    }
  }

  static draw() {
    Board.drawBg();
    Board.drawVerticalLine();
  }
}

export default Board;