import Bossfight from './Bossfight.js';
import Player from './Player.js';
export default class Game {
    canvas;
    ctx;
    score;
    player;
    bossfight;
    visBucks;
    constructor(canvasId) {
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext('2d');
        this.score = 0;
        this.visBucks = 0;
        this.player = new Player(this.canvas);
        this.bossfight = new Bossfight(this.canvas);
        this.loop();
    }
    loop = () => {
        this.handleKeyBoard();
        this.draw();
        if (this.player.lockAnswer()) {
            this.bossfight.answerSelect(this.player);
        }
        this.isCompleted();
        requestAnimationFrame(this.loop);
    };
    handleKeyBoard() {
        this.player.move(this.canvas);
    }
    isCompleted() {
        if (this.bossfight.getCompletion() === false) {
            this.bossfight.draw();
        }
        if (this.bossfight.getCompletion() === true) {
            this.bossfight.setCompletion();
            this.visBucks += this.bossfight.getMoney();
            this.bossfight = new Bossfight(this.canvas);
        }
        if (this.bossfight.getStatus() === true) {
            this.score += this.bossfight.getPoints();
            this.bossfight.setStatus();
        }
    }
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.player.draw(this.ctx);
        this.bossfight.draw();
        this.writeTextToCanvas(`Score: ${this.score}`, 40, this.canvas.width / 2, 50);
        this.writeTextToCanvas(`VisBuck: ${this.visBucks}`, 40, this.canvas.width / 4, 50);
        this.writeTextToCanvas(`HP: ${this.player.getHP()}`, 40, this.canvas.width / 1.40, 50);
    }
    writeTextToCanvas(text, fontSize = 20, xCoordinate, yCoordinate, alignment = 'center', color = 'black') {
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