import Board from "./Board";

class Game {
  static win_score = 10;
  static initBallY = Board.height / 2;
  static initBallX = Board.width / 2;
  static initPlayerY = (Board.height / 2) - (Board.playerHeight / 2);
  static playerVelocity = 50;

  static getRandomBallVelocity(mainV) {
    var v;
    v = [mainV, -mainV][Math.round(Math.random() * 1)];
    return v;
  }
}

export default Game;