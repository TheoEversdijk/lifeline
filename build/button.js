export default class Button {
    image;
    index;
    xPos;
    yPos;
    type;
    constructor(index, xPos, yPos, image, type) {
        this.index = index;
        this.yPos = yPos;
        this.xPos = xPos;
        this.image = image;
        this.type = type;
    }
    getType() {
        return this.type;
    }
    getXPos() {
        return this.xPos;
    }
    getYPos() {
        return this.yPos;
    }
    getIndex() {
        return this.index;
    }
    getImage() {
        return this.image;
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.xPos, this.yPos);
    }
}
//# sourceMappingURL=button.js.map