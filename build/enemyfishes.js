import Game from './Game.js';
export default class EnemyFishes {
    xPos;
    yPos;
    speed;
    fish;
    constructor(canvas, index) {
        if (index === 4) {
            this.xPos = Game.randomNumber(450, canvas.width - 300);
        }
        else {
            this.xPos = Game.randomNumber(350, canvas.width - 500);
        }
        this.yPos = 0;
        this.fish = (Game.loadNewImage('./assets/images/fish/fishe.png'));
        this.speed = Game.randomNumber(1, 4);
    }
    move() {
        this.yPos += this.speed;
    }
    draw(ctx) {
        ctx.drawImage(this.fish, this.xPos, this.yPos);
    }
    outOfCanvas(width, height) {
        if (this.yPos + this.fish.height >= height) {
            this.yPos = 0;
            this.xPos = Game.randomNumber(450, width - 300);
        }
    }
    getXPos() {
        return this.xPos;
    }
    getYPos() {
        return this.yPos;
    }
    getImage() {
        return this.fish;
    }
}
//# sourceMappingURL=enemyfishes.js.map