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
    reset;
    poggers;
    constructor(canvas, gender) {
        this.keyListener = new KeyboardListener();
        if (gender === 'Male') {
            this.image = Game.loadNewImage('../assets/images/fish/male/player.png');
        }
        if (gender === 'Female') {
            this.image = Game.loadNewImage('../assets/images/fish/female/player.png');
        }
        this.xPos = canvas.width / 16;
        this.yPos = canvas.height / 1.3;
        this.velocity = 4;
        this.health = 100;
        this.points = 0;
        this.coins = 0;
        this.status = 'alive';
        this.reset = false;
        this.poggers = false;
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
    currentStatus() {
        if (this.health <= 0) {
            this.status = 'dead';
        }
    }
    resetStatus() {
        this.status = 'alive';
    }
    getStatus() {
        return this.status;
    }
    death(state) {
        this.reset = state;
    }
    getDeath() {
        return this.reset;
    }
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
    collidesWithButton(button) {
        let testX = this.xPos;
        let testY = this.yPos;
        if (this.xPos < button.getXPos()) {
            testX = button.getXPos();
        }
        else if (this.xPos > button.getXPos() + button.getImage().width) {
            testX = button.getXPos() + button.getImage().width;
        }
        if (this.yPos < button.getYPos()) {
            testY = button.getYPos();
        }
        else if (this.yPos > button.getYPos() + button.getImage().height) {
            testY = button.getYPos() + button.getImage().height;
        }
        const distX = this.xPos - testX;
        const distY = this.yPos - testY;
        const distance = Math.sqrt(distX * distX + distY * distY);
        if (distance <= this.image.height - 70
            || distance <= this.image.width - 70) {
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
        if (distance + 60 <= this.image.height || distance + 100 <= this.image.width) {
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
    damageHP(damage) {
        this.health -= damage;
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
    draw(ctx) {
        ctx.drawImage(this.image, this.xPos, this.yPos);
    }
}
//# sourceMappingURL=Player.js.map