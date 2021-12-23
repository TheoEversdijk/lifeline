import Game from './Game.js';
import KeyboardListener from './KeyboardListener.js';
export default class Player {
    keyListener;
    xPos;
    yPos;
    velocity;
    health;
    image;
    status;
    score;
    constructor(canvas) {
        this.keyListener = new KeyboardListener();
        this.image = Game.loadNewImage('./assets/images/fish/player.png');
        this.xPos = canvas.width / 2;
        this.yPos = canvas.height / 2;
        this.velocity = 5;
        this.score = 0;
        this.health = 100;
        this.status = 'alive';
    }
    move(canvas) {
        if (this.keyListener.isKeyDown(KeyboardListener.KEY_DOWN)
            && this.yPos + this.image.height < canvas.height) {
            this.yPos += this.velocity;
        }
        if (this.keyListener.isKeyDown(KeyboardListener.KEY_UP)
            && this.yPos > 0) {
            this.yPos -= this.velocity;
        }
        if (this.keyListener.isKeyDown(KeyboardListener.KEY_RIGHT)
            && this.xPos + this.image.width < canvas.width) {
            this.xPos += this.velocity;
        }
        if (this.keyListener.isKeyDown(KeyboardListener.KEY_LEFT)
            && this.xPos > 0) {
            this.xPos -= this.velocity;
        }
    }
    lockAnswer() {
        return this.keyListener.isKeyDown(KeyboardListener.KEY_SPACE);
    }
    collidesWith(circle) {
        return this.xPos < circle.getXPos() + circle.getRadius()
            && this.xPos + this.image.width > circle.getXPos()
            && this.yPos < circle.getYPos() + circle.getRadius()
            && this.xPos + this.image.height > circle.getYPos();
    }
    damageHP(damage) {
        this.health -= damage;
        if (this.health === 0) {
            this.status = 'dead';
            console.log('You died');
        }
        console.log(this.health);
    }
    getHP() {
        return this.health;
    }
    setXPos(canvas) {
        this.xPos = canvas.width / 2;
    }
    setYPos(canvas) {
        this.yPos = canvas.height / 2;
    }
    getStatus() {
        return this.status;
    }
    getScore() {
        return this.score;
    }
    setScore(points) {
        this.score += points;
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.xPos, this.yPos);
    }
}
//# sourceMappingURL=Player.js.map