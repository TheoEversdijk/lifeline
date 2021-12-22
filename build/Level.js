export default class Level {
    canvas;
    ctx;
    money;
    isCompleted;
    questionDone;
    points;
    constructor(money, canvasId) {
        this.money = money;
        this.isCompleted = false;
        this.points = 0;
        this.questionDone = false;
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext('2d');
    }
    getCompletion() {
        return this.isCompleted;
    }
    setCompletion() {
        this.isCompleted = false;
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
    getMoney() {
        return this.money;
    }
    writeTextToCanvas(text, fontSize = 20, xCoordinate, yCoordinate, alignment = 'center', color = 'black') {
        this.ctx.font = `${fontSize}px sans-serif`;
        this.ctx.fillStyle = color;
        this.ctx.textAlign = alignment;
        this.ctx.fillText(text, xCoordinate, yCoordinate);
    }
}
//# sourceMappingURL=Level.js.map