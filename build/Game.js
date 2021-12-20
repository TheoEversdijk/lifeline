<<<<<<< HEAD
import Player from './Player.js';
=======
>>>>>>> b04dd653a5a7601a8f4e148766f04915d1baad9c
export default class Game {
    canvas;
    ctx;
    score;
<<<<<<< HEAD
    player;
    level;
    visBucks;
=======
>>>>>>> b04dd653a5a7601a8f4e148766f04915d1baad9c
    constructor(canvasId) {
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext('2d');
<<<<<<< HEAD
        this.score = 69;
        this.visBucks = 420;
        this.player = new Player(this.canvas);
        this.loop();
    }
    loop = () => {
        this.handleKeyBoard();
        this.draw();
        requestAnimationFrame(this.loop);
    };
    handleKeyBoard() {
        this.player.move();
    }
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.player.draw(this.ctx);
        this.writeTextToCanvas(`Score: ${this.score}`, 40, this.canvas.width / 2, 50);
        this.writeTextToCanvas(`VisBuck: ${this.visBucks}`, 40, this.canvas.width / 4, 50);
    }
    writeTextToCanvas(text, fontSize = 20, xCoordinate, yCoordinate, alignment = 'center', color = 'black') {
=======
    }
    handleKeyBoard() {
    }
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.writeTextToCanvas(`Score is: ${this.score}`, 40, this.canvas.width / 2, 40);
    }
    writeTextToCanvas(text, fontSize = 20, xCoordinate, yCoordinate, alignment = 'center', color = 'white') {
>>>>>>> b04dd653a5a7601a8f4e148766f04915d1baad9c
        this.ctx.font = `${fontSize}px sans-serif`;
        this.ctx.fillStyle = color;
        this.ctx.textAlign = alignment;
        this.ctx.fillText(text, xCoordinate, yCoordinate);
    }
    static loadNewImage(source) {
        const img = new Image();
        img.src = source;
        return img;
    }
    static randomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
}
//# sourceMappingURL=Game.js.map