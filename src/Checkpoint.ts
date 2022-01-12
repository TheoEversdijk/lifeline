<<<<<<< Updated upstream
export default class Checkpoint {
  private index: number;

  private xPos: number;

  private yPos: number;

  private radius: number = 30;

=======
import RoundObject from './RoundObject.js';

export default class Checkpoint extends RoundObject {
>>>>>>> Stashed changes
  /**
   * Initialize Circle
   *
   * @param index Index
   * @param xPos x Position
   * @param yPos y Position
   */
  public constructor(index: number, xPos: number, yPos: number) {
<<<<<<< Updated upstream
    this.index = index;
    this.xPos = xPos;
    this.yPos = yPos;
=======
    super(index, xPos, yPos, 35);
>>>>>>> Stashed changes
  }

  /**
   * Draws checkpoints
   *
   * @param ctx canvas renderer
   */
  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    /* ctx.arc(x, y, radius, startAngle, endAngle[, counterclockwise] */
    ctx.arc(this.xPos, this.yPos, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = '#88c7dc';
    ctx.fill();

    ctx.beginPath();
    ctx.font = `${20}px sans-serif`;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
<<<<<<< Updated upstream
    ctx.fillText(`Level ${this.index + 1}`, this.xPos, this.yPos);
  }

  /**
   * Gets x Position
   *
   * @returns x Position
   */
  public getXPos(): number {
    return this.xPos;
  }

  /**
   * Gets y Position
   *
   * @returns y Position
   */
  public getYPos(): number {
    return this.yPos;
  }

  /**
   * Gets circle radius
   *
   * @returns Radius
   */
  public getRadius(): number {
    return this.radius;
  }

  /**
   * Gets index
   *
   * @returns Index
   */
  public getIndex(): number {
    return this.index;
=======
    ctx.fillText(`Level ${this.index + 1}`, this.xPos, this.yPos + 7);
>>>>>>> Stashed changes
  }
}
