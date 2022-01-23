import Game from './Game.js';

export default class EnemyFishes {
  private xPos: number;

  private yPos: number;

  private speed: number;

  private fish: HTMLImageElement;

  /**
   * Initialize Rocket
   *
   * @param canvas canvas
   * @param index Index
   */
  public constructor(
    canvas: HTMLCanvasElement,
    index: number,
  ) {
    if (index === 4) {
      this.xPos = Game.randomNumber(450, canvas.width - 300);
    } else {
      this.xPos = Game.randomNumber(350, canvas.width - 500);
    }
    this.yPos = 0;
    this.fish = (Game.loadNewImage('./assets/images/fish/fishe.png'));
    this.speed = Game.randomNumber(1, 4);
  }

  /**
   * Moves the rockets
   */
  public move(): void {
    this.yPos += this.speed;
  }

  /**
   * test
   *
   * @param ctx drawin
   */
  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.fish, this.xPos, this.yPos);
  }

  /**
   * Method to check if the rocket went out of bounds
   *
   * @param width Canvas Width
   * @param height Canvas Height
   */
  public outOfCanvas(width: number, height: number): void {
    if (this.yPos + this.fish.height >= height) {
      this.yPos = 0;
      this.xPos = Game.randomNumber(450, width - 300);
    }
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
   * Gets y Position
   *
   * @returns y Position
   */
  public getImage(): HTMLImageElement {
    return this.fish;
  }
}
