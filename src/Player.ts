import Circle from './Circle.js';
import Game from './Game.js';
import KeyboardListener from './KeyboardListener.js';

export default class Player {
  private keyListener: KeyboardListener;

  private xPos: number;

  private yPos: number;

  private velocity: number;

  private health: number;

  private image: HTMLImageElement;

  private status: string;

  private score: number;

  /**
   * Initialize player
   *
   * @param canvas Canvas
   */
  public constructor(canvas: HTMLCanvasElement) {
    this.keyListener = new KeyboardListener();
    this.image = Game.loadNewImage('./assets/images/fish/player.png');
    this.xPos = canvas.width / 2;
    this.yPos = canvas.height / 2;
    this.velocity = 5;
    this.score = 0;
    this.health = 100;
    this.status = 'alive';
  }

  /**
   * Handles inputs and makes the player move
   *
   * @param canvas The canvas
   */
  public move(canvas: HTMLCanvasElement): void {
    if (this.keyListener.isKeyDown(KeyboardListener.KEY_DOWN)
        && this.yPos + this.image.height < canvas.height
    ) {
      this.yPos += this.velocity;
    }

    if (this.keyListener.isKeyDown(KeyboardListener.KEY_UP)
        && this.yPos > 0
    ) {
      this.yPos -= this.velocity;
    }

    if (this.keyListener.isKeyDown(KeyboardListener.KEY_RIGHT)
        && this.xPos + this.image.width < canvas.width
    ) {
      this.xPos += this.velocity;
    }

    if (this.keyListener.isKeyDown(KeyboardListener.KEY_LEFT)
        && this.xPos > 0
    ) {
      this.xPos -= this.velocity;
    }
  }

  /**
   * Locks answer in
   *
   * @returns True when Space has been pressed
   */
  public lockAnswer(): boolean {
    return this.keyListener.isKeyDown(KeyboardListener.KEY_SPACE);
  }

  /**
   * Checks if circle collides with player
   *
   * @param circle circle
   * @returns true if collides
   */
  public collidesWith(circle: Circle): boolean {
    return this.xPos < circle.getXPos() + circle.getRadius()
        && this.xPos + this.image.width > circle.getXPos()
        && this.yPos < circle.getYPos() + circle.getRadius()
        && this.xPos + this.image.height > circle.getYPos();
  }

  /**
   * Damages player
   *
   * @param damage Amount of damage
   */
  public damageHP(damage: number): void {
    this.health -= damage;
    if (this.health === 0) {
      this.status = 'dead';
      console.log('You died');
    }
    console.log(this.health);
  }

  /**
   * Gets the HP
   *
   * @returns HP of the player
   */
  public getHP(): number {
    return this.health;
  }

  /**
   * Sets x Position of the player
   *
   * @param canvas canvas element
   */
  public setXPos(canvas: HTMLCanvasElement): void {
    this.xPos = canvas.width / 2;
  }

  /**
   * Sets y Position of the player
   *
   * @param canvas canvas element
   */
  public setYPos(canvas: HTMLCanvasElement): void {
    this.yPos = canvas.height / 2;
  }

  /**
   * Gets the status of the player
   *
   * @returns status of player
   */
  public getStatus(): string {
    return this.status;
  }

  /**
   * Gets score
   *
   * @returns Score
   */
  public getScore(): number {
    return this.score;
  }

  /**
   * Sets score
   *
   * @param points Points per lvl
   */
  public setScore(points: number): void {
    this.score += points;
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
