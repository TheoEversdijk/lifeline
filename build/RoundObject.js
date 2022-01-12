export default class RoundObject {
    index;
    xPos;
    yPos;
    radius;
    constructor(index, xPos, yPos, radius) {
        this.index = index;
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
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
//# sourceMappingURL=RoundObject.js.map