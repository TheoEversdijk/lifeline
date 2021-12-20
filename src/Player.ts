import Game from './Game.js';
import KeyboardListener from './KeyboardListener.js';

export default class Player {
  private keyListener: KeyboardListener;

  private xPos: number;

  private yPos: number;

  private velocity: number;

  private image: HTMLImageElement;

  /**
   * Initialize player
   *
   * @param canvas Canvas
   */
  public constructor(canvas: HTMLCanvasElement) {
    this.keyListener = new KeyboardListener();
    this.image = Game.loadNewImage('../assets/images/fish/player.png');
    this.xPos = canvas.width / 2;
    this.yPos = canvas.height / 2;
    this.velocity = 3;
  }

  /**
   * Handles inputs and makes the player move
   */
  public move(): void {
    if (this.keyListener.isKeyDown(KeyboardListener.KEY_DOWN)) {
      this.yPos += this.velocity;
    }

    if (this.keyListener.isKeyDown(KeyboardListener.KEY_UP)) {
      this.yPos -= this.velocity;
    }

    if (this.keyListener.isKeyDown(KeyboardListener.KEY_RIGHT)) {
      this.xPos += this.velocity;
    }

    if (this.keyListener.isKeyDown(KeyboardListener.KEY_LEFT)) {
      this.xPos -= this.velocity;
    }
  }

  /**
   * Draws player
   *
   * @param ctx canvas rendering element
   */
  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.image, this.xPos, this.yPos);
  }
}
