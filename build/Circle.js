import RoundObject from './RoundObject.js';
export default class Circle extends RoundObject {
    type;
    constructor(index, xPos, yPos, type) {
        super(index, xPos, yPos, 50);
        this.type = type;
    }
    getType() {
        return this.type;
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.xPos, this.yPos, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = '#88c7dc';
        ctx.fill();
        ctx.beginPath();
        ctx.font = `${20}px sans-serif`;
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        ctx.fillText(`${this.index + 1}`, this.xPos, this.yPos + 7);
    }
}
//# sourceMappingURL=Circle.js.map