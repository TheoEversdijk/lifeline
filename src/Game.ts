import LevelSelector from './LevelSelector.js';
import Player from './Player.js';

export default class Game {
  private canvas: HTMLCanvasElement;

  private ctx: CanvasRenderingContext2D;

  private player: Player;

  private levelSelector: LevelSelector;

  /**
   * Initialize the Game
   *
   * @param canvasId the id of the canvas
   * @param gender gender
   */
  public constructor(canvasId: HTMLCanvasElement, gender: string) {
    // Construct all of the canvas
    this.canvas = canvasId;
    this.canvas.width = 1600;
    this.canvas.height = 900;
    this.ctx = this.canvas.getContext('2d');

    this.player = new Player(this.canvas, gender);
    this.levelSelector = new LevelSelector(this.canvas);

    this.loop();
  }

  private loop = () => {
    this.handleKeyBoard();
    this.draw();
    this.player.currentStatus();
    if (this.player.select() && this.levelSelector.getLevelStatus() === false) {
      this.levelSelector.select(this.player);
    }
    if (this.player.select() && this.levelSelector.getLevelStatus() === true) {
      this.levelSelector.answerSelector(this.player, this.ctx);
    }
    requestAnimationFrame(this.loop);
  };

  /**
   * Handle the UP key on the keyboard to give the player the ability to move the HZ bird up
   */
  private handleKeyBoard() {
    this.player.move(this.canvas);
  }

  /**
   * Draws all the necessary elements to the canvas
   */
  public draw(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    if (this.levelSelector.getLevelStatus() === false) {
      this.levelSelector.draw(this.ctx);
    }
    if (this.levelSelector.getLevelStatus() === true) {
      this.levelSelector.levelDrawer(this.player, this.ctx);
    }

    // write the current score
    this.writeTextToCanvas(
      `Score: ${this.player.getPoints()}`,
      40,
      this.canvas.width / 2,
      50,
    );
    this.writeTextToCanvas(
      `VisBuck: ${this.player.getCoins()}`,
      40,
      this.canvas.width / 4,
      50,
    );
    this.writeTextToCanvas(
      `HP: ${this.player.getHP()}`,
      40,
      this.canvas.width / 1.40,
      50,
    );

    this.player.draw(this.ctx);

    if (this.player.getStatus() === 'dead') {
      this.player.resetStatus();
      this.levelSelector.loser(this.player);
      this.ctx.beginPath();
      this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fillStyle = 'darkred';
      this.ctx.fill();
      this.writeTextToCanvas(
        'Level Gefaald!',
        100,
        this.canvas.width / 2,
        this.canvas.height / 2,
      );
    }

    if (this.levelSelector.getCompletion() === true) {
      this.ctx.beginPath();
      this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fillStyle = 'lightblue';
      this.ctx.fill();
      this.writeTextToCanvas(
        'Level Gehaald!',
        100,
        this.canvas.width / 2,
        this.canvas.height / 2,
      );
    }
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

  /**
   * Method to load an image
   *
   * @param source the source
   * @returns HTMLImageElement - returns an image
   */
  public static loadNewImage(source: string): HTMLImageElement {
    const img = new Image();
    img.src = source;
    return img;
  }

  /**
   * Returns a random number between min and max
   *
   * @param min - lower boundary
   * @param max - upper boundary
   * @returns a random number between min and max
   */
  public static randomNumber(min: number, max: number): number {
    return Math.round(Math.random() * (max - min) + min);
  }
}
