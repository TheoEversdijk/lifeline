<<<<<<< Updated upstream
export default class Checkpoint {
    index;
    xPos;
    yPos;
    radius = 30;
    constructor(index, xPos, yPos) {
        this.index = index;
        this.xPos = xPos;
        this.yPos = yPos;
=======
import RoundObject from './RoundObject.js';
export default class Checkpoint extends RoundObject {
    constructor(index, xPos, yPos) {
        super(index, xPos, yPos, 35);
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
        ctx.fillText(`Level ${this.index + 1}`, this.xPos, this.yPos);
    }
    getXPos() {
        return this.xPos;
    }
    getYPos() {
        return this.yPos;
    }
    getRadius() {
        return this.radius;
    }
    getIndex() {
        return this.index;
=======
        ctx.fillText(`Level ${this.index + 1}`, this.xPos, this.yPos + 7);
>>>>>>> Stashed changes
    }
}
//# sourceMappingURL=Checkpoint.js.map