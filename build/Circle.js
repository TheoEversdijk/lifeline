export default class Circle {
    index;
    xPos;
    yPos;
    radius = 50;
    constructor(index, xPos, yPos) {
        this.index = index;
        this.xPos = xPos;
        this.yPos = yPos;
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
        ctx.fillText(`${this.index + 1}`, this.xPos, this.yPos);
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
    }
}
//# sourceMappingURL=Circle.js.map