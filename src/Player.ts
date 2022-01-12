import Checkpoint from './Checkpoint.js';
import Circle from './Circle.js';
import EnemyFishes from './enemyfishes.js';
import Game from './Game.js';
import KeyboardListener from './KeyboardListener.js';

export default class Player {
  private keyListener: KeyboardListener;

  private xPos: number;

  private yPos: number;

  private velocity: number;

  private health: number;

  private points: number;

  private coins: number;

  private image: HTMLImageElement;

  private status: string;

<<<<<<< Updated upstream
  private score: number;
=======
  private reset: boolean;

  private poggers: boolean;
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
    this.velocity = 5;
    this.score = 0;
    this.health = 100;
    this.status = 'alive';
=======
    this.velocity = 4;
    this.health = 100;
    this.points = 0;
    this.coins = 0;
    this.status = 'alive';
    this.reset = false;
    this.poggers = false;
>>>>>>> Stashed changes
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
   * Checks current status
   */
  public currentStatus(): void {
    if (this.health <= 0) {
      this.status = 'dead';
    }
  }

  /**
   * Gets status of player
   *
   * @returns Status
   */
  public getStatus(): string {
    return this.status;
  }

  /**
   * death
   */
  public death(): void {
    this.reset = true;
  }

  /**
   * Sad Pepe
   *
   * @returns deathstatus
   */
  public getDeath(): boolean {
    return this.reset;
  }

  /**
   * Locks answer in
   *
   * @returns True when Space has been pressed
   */
  public select(): boolean {
    return this.keyListener.isKeyDown(KeyboardListener.KEY_SPACE);
  }

  /**
   * Checks if circle collides with player
   *
   * @param circle circle
   * @returns true if collides
   */
  public collidesWith(circle: Circle): boolean {
    let testX = this.xPos;
    let testY = this.yPos;
    if (this.xPos < circle.getXPos()) {
      testX = circle.getXPos();
    } else if (this.xPos > circle.getXPos() + circle.getRadius()) {
      testX = circle.getXPos() + circle.getRadius();
    }
    if (this.yPos < circle.getYPos()) {
      testY = circle.getYPos();
    } else if (this.yPos > circle.getYPos() + circle.getRadius()) {
      testY = circle.getYPos() + circle.getRadius();
    }
    const distX = this.xPos - testX;
    const distY = this.yPos - testY;
    const distance = Math.sqrt(distX * distX + distY * distY);
    if (distance <= this.image.height
    || distance <= this.image.width) {
      return true;
    } return false;
  }

  /**
   * Checks if player collides with checkpoint
   *
   * @param checkpoint checkpoints
   * @returns true of collides
   */
  public collidesWithCheckpoint(checkpoint: Checkpoint): boolean {
    let testX = this.xPos;
    let testY = this.yPos;
    if (this.xPos < checkpoint.getXPos()) {
      testX = checkpoint.getXPos();
    } else if (this.xPos > checkpoint.getXPos() + checkpoint.getRadius()) {
      testX = checkpoint.getXPos() + checkpoint.getRadius();
    }
    if (this.yPos < checkpoint.getYPos()) {
      testY = checkpoint.getYPos();
    } else if (this.yPos > checkpoint.getYPos() + checkpoint.getRadius()) {
      testY = checkpoint.getYPos() + checkpoint.getRadius();
    }
    const distX = this.xPos - testX;
    const distY = this.yPos - testY;
    const distance = Math.sqrt(distX * distX + distY * distY);
    if (distance <= this.image.height
    || distance <= this.image.width) {
      return true;
    } return false;
  }

  /**
   * Collide
   *
   * @param canvas canvas
   * @param fish fish
   */
  public collidesWithFish(canvas: HTMLCanvasElement, fish: EnemyFishes): void {
    let testX = this.xPos;
    let testY = this.yPos;
    if (this.xPos < fish.getXPos()) {
      testX = fish.getXPos();
    } else if (this.xPos > fish.getXPos() + fish.getImage().width) {
      testX = fish.getXPos() + fish.getImage().width;
    }
    if (this.yPos < fish.getYPos()) {
      testY = fish.getYPos();
    } else if (this.yPos > fish.getYPos() + fish.getImage().height) {
      testY = fish.getYPos() + fish.getImage().height;
    }
    const distX = this.xPos - testX;
    const distY = this.yPos - testY;
    const distance = Math.sqrt(distX * distX + distY * distY);
    if (distance + 60 <= this.image.height || distance + 90 <= this.image.width) {
      this.damageHP(5);
      this.xPos = canvas.width / 1.1;
    }
  }

  /**
   * Winner winner chicken dinner
   */
  public lvlComplete(): void {
    this.poggers = true;
  }

  /**
   * Winner winner chicken dinner
   */
  public resetCompletion(): void {
    this.poggers = false;
  }

  /**
   * Gets lvl status
   *
   * @returns boolean
   */
  public getlvlComplete(): boolean {
    return this.poggers;
  }

  /**
   * Adds points
   *
   * @param points points
   */
  public addPoints(points: number): void {
    this.points += points;
  }

  /**
   * Gets points
   *
   * @returns Amount of points
   */
  public getPoints(): number {
    return this.points;
  }

  /**
   * Adds coins
   *
   * @param coins Amount of coins
   */
  public addCoins(coins: number): void {
    this.coins += coins;
  }

  /**
   * Gets coins
   *
   * @returns Amount of coins
   */
  public getCoins(): number {
    return this.coins;
  }

  /**
   * Checks if player collides with checkpoint
   *
   * @param checkpoint checkpoints
   * @returns true of collides
   */
  public collidesWithCheckpoint(checkpoint: Checkpoint): boolean {
    return this.xPos < checkpoint.getXPos() + checkpoint.getRadius()
        && this.xPos + this.image.width > checkpoint.getXPos()
        && this.yPos < checkpoint.getYPos() + checkpoint.getRadius()
        && this.xPos + this.image.height > checkpoint.getYPos();
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
   * Resets HP
   */
  public setHP(): void {
    this.health = 100;
  }

  /**
   * Sets x Position of the player
   *
   * @param canvas canvas element
   */
  public setXPos(canvas: HTMLCanvasElement): void {
    this.xPos = canvas.width / 1.1;
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
