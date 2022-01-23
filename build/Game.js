import LevelSelector from './LevelSelector.js';
import Player from './Player.js';
export default class Game {
    canvas;
    ctx;
    player;
    levelSelector;
    constructor(canvasId, gender) {
        this.canvas = canvasId;
        this.canvas.width = 1600;
        this.canvas.height = 900;
        this.ctx = this.canvas.getContext('2d');
        this.player = new Player(this.canvas, gender);
        this.levelSelector = new LevelSelector(this.canvas);
        this.loop();
    }
    loop = () => {
        this.handleKeyBoard();
        this.draw();
        this.player.currentStatus();
        if (this.player.select() && this.levelSelector.getLevelStatus() === false) {
            this.levelSelector.select(this.player);
        }
        if (this.player.select() && this.levelSelector.getLevelStatus() === true) {
            this.levelSelector.answerSelector(this.player, this.ctx);
        }
        requestAnimationFrame(this.loop);
    };
    handleKeyBoard() {
        this.player.move(this.canvas);
    }
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if (this.levelSelector.getLevelStatus() === false) {
            this.levelSelector.draw(this.ctx);
        }
        if (this.levelSelector.getLevelStatus() === true) {
            this.levelSelector.levelDrawer(this.player, this.ctx);
        }
        this.writeTextToCanvas(`Score: ${this.player.getPoints()}`, 40, this.canvas.width / 2, 50);
        this.writeTextToCanvas(`VisBuck: ${this.player.getCoins()}`, 40, this.canvas.width / 4, 50);
        this.writeTextToCanvas(`HP: ${this.player.getHP()}`, 40, this.canvas.width / 1.40, 50);
        this.player.draw(this.ctx);
        if (this.player.getStatus() === 'dead') {
            this.player.resetStatus();
            this.levelSelector.loser(this.player);
            this.ctx.beginPath();
            this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.fillStyle = 'darkred';
            this.ctx.fill();
            this.writeTextToCanvas('Level Gefaald!', 100, this.canvas.width / 2, this.canvas.height / 2);
        }
        if (this.levelSelector.getCompletion() === true) {
            this.ctx.beginPath();
            this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.fillStyle = 'lightblue';
            this.ctx.fill();
            this.writeTextToCanvas('Level Gehaald!', 100, this.canvas.width / 2, this.canvas.height / 2);
        }
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