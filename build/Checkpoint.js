import RoundObject from './RoundObject.js';
export default class Checkpoint extends RoundObject {
    constructor(index, xPos, yPos) {
        super(index, xPos, yPos, 35);
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
        ctx.fillText(`Level ${this.index + 1}`, this.xPos, this.yPos + 7);
    }
}
//# sourceMappingURL=Checkpoint.js.map