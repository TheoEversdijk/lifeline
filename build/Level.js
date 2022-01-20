export default class Level {
    canvas;
    ctx;
    coins;
    isCompleted;
    questionDone;
    points;
    constructor(coins, canvasId) {
        this.coins = coins;
        this.points = 0;
        this.questionDone = false;
        this.canvas = canvasId;
        this.canvas.width = 1700;
        this.canvas.height = 956.25;
        this.ctx = this.canvas.getContext('2d');
    }
    getCompletion() {
        return this.isCompleted;
    }
    getStatus() {
        return this.questionDone;
    }
    setStatus() {
        this.questionDone = false;
    }
    getPoints() {
        return this.points;
    }
    getCoins() {
        return this.coins;
    }
    writeTextToCanvas(text, fontSize = 20, xCoordinate, yCoordinate, alignment = 'center', color = 'black') {
        this.ctx.font = `${fontSize}px sans-serif`;
        this.ctx.fillStyle = color;
        this.ctx.textAlign = alignment;
        this.ctx.fillText(text, xCoordinate, yCoordinate);
    }
}
//# sourceMappingURL=Level.js.map