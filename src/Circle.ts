export default class Circle {
  private index: number;

  private xPos: number;

  private yPos: number;

  private radius: number = 50;

  /**
   * Initialize Circle
   *
   * @param index Index
   * @param xPos x Position
   * @param yPos y Position
   */
  public constructor(index: number, xPos: number, yPos: number) {
    this.index = index;
    this.xPos = xPos;
    this.yPos = yPos;
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
    ctx.fillText(`${this.index + 1}`, this.xPos, this.yPos);
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
  }
}
