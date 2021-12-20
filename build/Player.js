<<<<<<< HEAD
import Game from './Game.js';
import KeyboardListener from './KeyboardListener.js';
export default class Player {
    keyListener;
    xPos;
    yPos;
    velocity;
    image;
    constructor(canvas) {
        this.keyListener = new KeyboardListener();
        this.image = Game.loadNewImage('../assets/images/fish/player.png');
        this.xPos = canvas.width / 2;
        this.yPos = canvas.height / 2;
        this.velocity = 3;
    }
    move() {
        if (this.keyListener.isKeyDown(KeyboardListener.KEY_DOWN)) {
            this.yPos += this.velocity;
        }
        if (this.keyListener.isKeyDown(KeyboardListener.KEY_UP)) {
            this.yPos -= this.velocity;
        }
        if (this.keyListener.isKeyDown(KeyboardListener.KEY_RIGHT)) {
            this.xPos += this.velocity;
        }
        if (this.keyListener.isKeyDown(KeyboardListener.KEY_LEFT)) {
            this.xPos -= this.velocity;
        }
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.xPos, this.yPos);
    }
=======
export default class Player {
    keyListener;
>>>>>>> b04dd653a5a7601a8f4e148766f04915d1baad9c
}
//# sourceMappingURL=Player.js.map