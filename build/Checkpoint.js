import Game from './Game.js';
import RoundObject from './RoundObject.js';
export default class Checkpoint extends RoundObject {
    color;
    image;
    constructor(index, xPos, yPos) {
        super(index, xPos, yPos, 35);
        if (this.index === 4) {
            this.image = Game.loadNewImage('../assets/images/icons/boss.png');
        }
        else {
            this.image = Game.loadNewImage('../assets/images/icons/level_todo.png');
        }
    }
    changeColor() {
        if (this.index === 4) {
            this.image = Game.loadNewImage('../assets/images/icons/boss_complete.png');
        }
        else {
            this.image = Game.loadNewImage('../assets/images/icons/level_complete.png');
        }
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.xPos, this.yPos);
    }
}
//# sourceMappingURL=Checkpoint.js.map