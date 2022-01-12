export default class RoundObject {
  protected index: number;

  protected xPos: number;

  protected yPos: number;

  protected radius: number;

  /**
   * Init RoundObject
   *
   * @param index index
   * @param xPos xposition
   * @param yPos yposition
   * @param radius radius of circle
   */
  public constructor(index: number, xPos: number, yPos: number, radius: number) {
    this.index = index;
    this.xPos = xPos;
    this.yPos = yPos;
    this.radius = radius;
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
