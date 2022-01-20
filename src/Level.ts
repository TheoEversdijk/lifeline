export default class Level {
  protected canvas: HTMLCanvasElement;

  protected ctx: CanvasRenderingContext2D;

  protected coins: number;

  protected isCompleted: boolean;

  protected questionDone: boolean;

  protected points: number;

  /**
   * @param coins How many coins the question should reward if the answer is correct
   * @param canvasId canvas ID
   */
  public constructor(
    coins: number,
    canvasId: HTMLCanvasElement,
  ) {
    this.coins = coins;
    this.points = 0;
    this.questionDone = false;

    this.canvas = canvasId;
    this.canvas.width = 1700;
    this.canvas.height = 956.25;
    this.ctx = this.canvas.getContext('2d');
  }

  // /**
  //  * Draw Level
  //  */
  // public draw(): void {
  // }

  /**
   * Gets status
   *
   * @returns True if level done
   */
  public getCompletion(): boolean {
    return this.isCompleted;
  }

  /**
   * Test
   *
   * @returns status
   */
  public getStatus(): boolean {
    return this.questionDone;
  }

  /**
   * Test
   */
  public setStatus(): void {
    this.questionDone = false;
  }

  /**
   * Gets the points
   *
   * @returns Number of points
   */
  public getPoints(): number {
    return this.points;
  }

  /**
   * Money
   *
   * @returns Money
   */
  public getCoins(): number {
    return this.coins;
  }

  /**
   * Writes text to the canvas
   *
   * @param text - Text to write
   * @param fontSize - Font size in pixels
   * @param xCoordinate - Horizontal coordinate in pixels
   * @param yCoordinate - Vertical coordinate in pixels
   * @param alignment - Where to align the text
   * @param color - The color of the text
   */
  public writeTextToCanvas(
    text: string,
    fontSize: number = 20,
    xCoordinate: number,
    yCoordinate: number,
    alignment: CanvasTextAlign = 'center',
    color: string = 'black',
  ): void {
    this.ctx.font = `${fontSize}px sans-serif`;
    this.ctx.fillStyle = color;
    this.ctx.textAlign = alignment;
    this.ctx.fillText(text, xCoordinate, yCoordinate);
  }
}
