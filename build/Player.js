import Game from './Game.js';
import KeyboardListener from './KeyboardListener.js';
export default class Player {
    keyListener;
    xPos;
    yPos;
    velocity;
    health;
    points;
    coins;
    image;
    status;
<<<<<<< Updated upstream
    score;
=======
    reset;
    poggers;
>>>>>>> Stashed changes
    constructor(canvas) {
        this.keyListener = new KeyboardListener();
        this.image = Game.loadNewImage('./assets/images/fish/player.png');
        this.xPos = canvas.width / 2;
        this.yPos = canvas.height / 2;
<<<<<<< Updated upstream
        this.velocity = 5;
        this.score = 0;
        this.health = 100;
        this.status = 'alive';
=======
        this.velocity = 4;
        this.health = 100;
        this.points = 0;
        this.coins = 0;
        this.status = 'alive';
        this.reset = false;
        this.poggers = false;
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
    currentStatus() {
        if (this.health <= 0) {
            this.status = 'dead';
        }
    }
    getStatus() {
        return this.status;
    }
    death() {
        this.reset = true;
    }
    getDeath() {
        return this.reset;
    }
>>>>>>> Stashed changes
    select() {
        return this.keyListener.isKeyDown(KeyboardListener.KEY_SPACE);
    }
    collidesWith(circle) {
        let testX = this.xPos;
        let testY = this.yPos;
        if (this.xPos < circle.getXPos()) {
            testX = circle.getXPos();
        }
        else if (this.xPos > circle.getXPos() + circle.getRadius()) {
            testX = circle.getXPos() + circle.getRadius();
        }
        if (this.yPos < circle.getYPos()) {
            testY = circle.getYPos();
        }
        else if (this.yPos > circle.getYPos() + circle.getRadius()) {
            testY = circle.getYPos() + circle.getRadius();
        }
        const distX = this.xPos - testX;
        const distY = this.yPos - testY;
        const distance = Math.sqrt(distX * distX + distY * distY);
        if (distance <= this.image.height
            || distance <= this.image.width) {
            return true;
        }
        return false;
    }
    collidesWithCheckpoint(checkpoint) {
        let testX = this.xPos;
        let testY = this.yPos;
        if (this.xPos < checkpoint.getXPos()) {
            testX = checkpoint.getXPos();
        }
        else if (this.xPos > checkpoint.getXPos() + checkpoint.getRadius()) {
            testX = checkpoint.getXPos() + checkpoint.getRadius();
        }
        if (this.yPos < checkpoint.getYPos()) {
            testY = checkpoint.getYPos();
        }
        else if (this.yPos > checkpoint.getYPos() + checkpoint.getRadius()) {
            testY = checkpoint.getYPos() + checkpoint.getRadius();
        }
        const distX = this.xPos - testX;
        const distY = this.yPos - testY;
        const distance = Math.sqrt(distX * distX + distY * distY);
        if (distance <= this.image.height
            || distance <= this.image.width) {
            return true;
        }
        return false;
    }
    collidesWithFish(canvas, fish) {
        let testX = this.xPos;
        let testY = this.yPos;
        if (this.xPos < fish.getXPos()) {
            testX = fish.getXPos();
        }
        else if (this.xPos > fish.getXPos() + fish.getImage().width) {
            testX = fish.getXPos() + fish.getImage().width;
        }
        if (this.yPos < fish.getYPos()) {
            testY = fish.getYPos();
        }
        else if (this.yPos > fish.getYPos() + fish.getImage().height) {
            testY = fish.getYPos() + fish.getImage().height;
        }
        const distX = this.xPos - testX;
        const distY = this.yPos - testY;
        const distance = Math.sqrt(distX * distX + distY * distY);
        if (distance + 60 <= this.image.height || distance + 90 <= this.image.width) {
            this.damageHP(5);
            this.xPos = canvas.width / 1.1;
        }
    }
    lvlComplete() {
        this.poggers = true;
    }
    resetCompletion() {
        this.poggers = false;
    }
    getlvlComplete() {
        return this.poggers;
    }
    addPoints(points) {
        this.points += points;
    }
    getPoints() {
        return this.points;
    }
    addCoins(coins) {
        this.coins += coins;
    }
    getCoins() {
        return this.coins;
    }
    collidesWithCheckpoint(checkpoint) {
        return this.xPos < checkpoint.getXPos() + checkpoint.getRadius()
            && this.xPos + this.image.width > checkpoint.getXPos()
            && this.yPos < checkpoint.getYPos() + checkpoint.getRadius()
            && this.xPos + this.image.height > checkpoint.getYPos();
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
    setHP() {
        this.health = 100;
    }
    setXPos(canvas) {
        this.xPos = canvas.width / 1.1;
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