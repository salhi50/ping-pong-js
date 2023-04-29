import Board from "./src/Board";
import LeftPlayer from "./src/player/LeftPlayer";
import Ball from "./src/Ball";
import RightPlayer from "./src/player/RightPlayer";
import Game from "./src/Game";

export const canvas = document.getElementById("canvas");
export const c = canvas.getContext("2d");

canvas.width = Board.width;
canvas.height = Board.height;

var game_start = false;

const lp = new LeftPlayer({
    y: Game.initPlayerY,
    yv: 50,
    upKey: "w",
    downKey: "s"
})

const rp = new RightPlayer({
    y: Game.initPlayerY,
    yv: 50,
    upKey: "ArrowUp",
    downKey: "ArrowDown"
})

const players = [lp, rp];

const ball = new Ball();

function init() {
    Board.draw();
    // Init ball
    ball.init();
    ball.draw();
    // Init players
    players.forEach(p => {
        p.init();
        p.draw();
        p.drawScore();
    })
}

function animate() {
    requestAnimationFrame(animate);
    if(game_start) {
        Board.draw();
        ball.update();
        players.forEach(p => {
            p.draw();
            p.drawScore();
            if(p.isSmashing(ball.x, ball.y)) {
                ball.invertXv();
            }
        });
        ball.draw();
        if(ball.x > Board.width + Ball.radius) {
            lp.score++;
            ball.init();
        } else if(ball.x < -Ball.radius) {
            rp.score++;
            ball.init();
        }
        const winner = players.find(p => p.score >= Game.win_score);
        if(winner !== undefined) {
            alert(winner.name + " win!");
            init();
            game_start = false;
        }
    }
}

init();
animate();

window.addEventListener("keydown", ({key}) => {
    players.forEach(p => p.translateY(key));
    game_start = true;
})