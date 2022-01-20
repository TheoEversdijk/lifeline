export default class Button {
  protected image: HTMLImageElement;

  protected index: number;

  protected xPos: number;

  protected yPos: number;

  protected type: string;

  /**
   * Initialize Circle
   *
   * @param index Index
   * @param xPos x Position
   * @param yPos y Position
   * @param image image
   * @param type type of button
   */
  public constructor(index: number,
    xPos: number,
    yPos: number,
    image: HTMLImageElement,
    type: string) {
    this.index = index;
    this.yPos = yPos;
    this.xPos = xPos;
    this.image = image;
    this.type = type;
  }

  /**
   * True or false
   *
   * @returns Type
   */
  public getType(): string {
    return this.type;
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
   * Gets index
   *
   * @returns Index
   */
  public getIndex(): number {
    return this.index;
  }

  /**
   * Fucks
   *
   * @returns Image
   */
  public getImage(): HTMLImageElement {
    return this.image;
  }

  /**
   * Draws checkpoints
   *
   * @param ctx canvas renderer
   */
  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.image, this.xPos, this.yPos);
  }
}
