import RoundObject from './RoundObject.js';

export default class Circle extends RoundObject {
  /**
   * Initialize Circle
   *
   * @param index Index
   * @param xPos x Position
   * @param yPos y Position
   */
  public constructor(index: number, xPos: number, yPos: number) {
    super(index, xPos, yPos, 50);
  }

  /**
   * Draws circle
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
    ctx.fillText(`${this.index + 1}`, this.xPos, this.yPos + 7);
  }
}
