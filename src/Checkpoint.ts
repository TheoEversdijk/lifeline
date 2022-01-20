import Game from './Game.js';
import RoundObject from './RoundObject.js';

export default class Checkpoint extends RoundObject {
  protected color: string;

  protected image: HTMLImageElement;

  /**
   * Initialize Circle
   *
   * @param index Index
   * @param xPos x Position
   * @param yPos y Position
   */
  public constructor(index: number, xPos: number, yPos: number) {
    super(index, xPos, yPos, 35);
    if (this.index === 4) {
      this.image = Game.loadNewImage('../assets/images/icons/boss.png');
    } else {
      this.image = Game.loadNewImage('../assets/images/icons/level_todo.png');
    }
  }

  /**
   * Changes color when level is passed
   */
  public changeColor(): void {
    if (this.index === 4) {
      this.image = Game.loadNewImage('../assets/images/icons/boss_complete.png');
    } else {
      this.image = Game.loadNewImage('../assets/images/icons/level_complete.png');
    }
  }

  /**
   * Draws checkpoints
   *
   * @param ctx canvas renderer
   */
  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.image, this.xPos, this.yPos);
    // ctx.beginPath();
    // /* ctx.arc(x, y, radius, startAngle, endAngle[, counterclockwise] */
    // ctx.arc(this.xPos, this.yPos, this.radius, 0, 2 * Math.PI);
    // ctx.fillStyle = this.color;
    // ctx.fill();

    // ctx.beginPath();
    // ctx.font = `${20}px sans-serif`;
    // ctx.fillStyle = 'black';
    // ctx.textAlign = 'center';
    // ctx.fillText(`Level ${this.index + 1}`, this.xPos, this.yPos + 7);
  }
}
