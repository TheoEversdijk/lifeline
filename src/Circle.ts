import RoundObject from './RoundObject.js';

export default class Circle extends RoundObject {
  protected type: string;

  /**
   * Initialize Circle
   *
   * @param index Index
   * @param xPos x Position
   * @param yPos y Position
   * @param type type of circle
   */
  public constructor(index: number, xPos: number, yPos: number, type: string) {
    super(index, xPos, yPos, 50);
    this.type = type;
  }

  /**
   * Fuck
   *
   * @returns Type
   */
  public getType(): string {
    return this.type;
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
