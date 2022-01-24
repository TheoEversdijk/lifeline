import Button from './button.js';
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

  private reset: boolean;

  private poggers: boolean;

  /**
   * Initialize player
   *
   * @param canvas Canvas
   * @param gender gender
   */
  public constructor(canvas: HTMLCanvasElement, gender: string) {
    this.keyListener = new KeyboardListener();
    if (gender === 'Male') {
      this.image = Game.loadNewImage('../assets/images/fish/male/player.png');
    }
    if (gender === 'Female') {
      this.image = Game.loadNewImage('../assets/images/fish/female/player.png');
    }
    this.xPos = canvas.width / 16;
    this.yPos = canvas.height / 1.3;
    this.velocity = 4;
    this.health = 100;
    this.points = 0;
    this.coins = 0;
    this.status = 'alive';
    this.reset = false;
    this.poggers = false;
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
   * Resets status
   */
  public resetStatus(): void {
    this.status = 'alive';
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
   *
   * @param state life status
   */
  public death(state: boolean): void {
    this.reset = state;
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
   * Checks if player collides with checkpoint
   *
   * @param button checkpoints
   * @returns true of collides
   */
  public collidesWithButton(button: Button): boolean {
    let testX = this.xPos;
    let testY = this.yPos;
    if (this.xPos < button.getXPos()) {
      testX = button.getXPos();
    } else if (this.xPos > button.getXPos() + button.getImage().width) {
      testX = button.getXPos() + button.getImage().width;
    }
    if (this.yPos < button.getYPos()) {
      testY = button.getYPos();
    } else if (this.yPos > button.getYPos() + button.getImage().height) {
      testY = button.getYPos() + button.getImage().height;
    }
    const distX = this.xPos - testX;
    const distY = this.yPos - testY;
    const distance = Math.sqrt(distX * distX + distY * distY);
    if (distance <= this.image.height - 70
    || distance <= this.image.width - 70) {
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
    if (distance + 60 <= this.image.height || distance + 100 <= this.image.width) {
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
   * Damages player
   *
   * @param damage Amount of damage
   */
  public damageHP(damage: number): void {
    this.health -= damage;
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
   * Draws player
   *
   * @param ctx canvas rendering element
   */
  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.image, this.xPos, this.yPos);
  }
}
