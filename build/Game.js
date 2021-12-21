import Level from './Level.js';
import Player from './Player.js';
export default class Game {
    canvas;
    ctx;
    score;
    player;
    level;
    visBucks;
    constructor(canvasId) {
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext('2d');
        this.score = 0;
        this.visBucks = 420;
        this.player = new Player(this.canvas);
        this.level = new Level(10, 'Wat is geen scam', 'Microsoft Tech Support ', 'Nigerian Prince', 'Je moeder', 'Amazon Customer Service', 'Je moeder', this.canvas);
        this.loop();
    }
    loop = () => {
        this.handleKeyBoard();
        this.draw();
        if (this.player.lockAnswer()) {
            this.level.answerSelect(this.player);
        }
        this.isCompleted();
        requestAnimationFrame(this.loop);
    };
    handleKeyBoard() {
        this.player.move(this.canvas);
    }
    isCompleted() {
        if (this.level.getCompletion() === false) {
            this.level.draw();
        }
        if (this.level.getCompletion() === true) {
            this.level.setCompletion();
            this.score += 10;
            this.level = new Level(10, 'Wat is geen scam', 'Microsoft Tech Support ', 'Nigerian Prince', 'Je moeder', 'Amazon Customer Service', 'Je moeder', this.canvas);
        }
    }
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.player.draw(this.ctx);
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