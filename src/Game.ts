import Level from './Level.js';
import Player from './Player.js';

export default class Game {
  // Properties for canvas and keyboard
  private canvas: HTMLCanvasElement;

  private ctx: CanvasRenderingContext2D;

  private score: number;

  private player: Player;

  private level: Level;

  private visBucks: number;

  /**
   * Initialize the Game
   *
   * @param canvasId the id of the canvas
   */
  public constructor(canvasId: HTMLCanvasElement) {
    // Construct all of the canvas
    this.canvas = canvasId;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');
    this.score = 0;
    this.visBucks = 0;

    this.player = new Player(this.canvas);
    this.level = new Level(10, 'Wat is geen scam', 'Microsoft Tech Support ', 'Nigerian Prince', 'Je moeder', 'Amazon Customer Service', 'Je moeder', this.canvas);

    this.loop();
  }

  private loop = () => {
    this.handleKeyBoard();
    this.draw();
    if (this.player.lockAnswer()) {
      this.level.answerSelect(this.player);
    }

    this.isCompleted();

    requestAnimationFrame(this.loop);
  };

  /**
   * Handle the UP key on the keyboard to give the player the ability to move the HZ bird up
   */
  private handleKeyBoard() {
    this.player.move(this.canvas);
  }

  private isCompleted() {
    if (this.level.getCompletion() === false) {
      this.level.draw();
    }

    if (this.level.getCompletion() === true) {
      this.level.setCompletion();
      this.score += 10;
      this.level = new Level(10, 'Wat is geen scam', 'Microsoft Tech Support ', 'Nigerian Prince', 'Je moeder', 'Amazon Customer Service', 'Je moeder', this.canvas);
    }
  }

  /**
   * Draws all the necessary elements to the canvas
   */
  private draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.player.draw(this.ctx);

    // write the current score
    this.writeTextToCanvas(
      `Score: ${this.score}`,
      40,
      this.canvas.width / 2,
      50,
    );
    this.writeTextToCanvas(
      `VisBuck: ${this.visBucks}`,
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
