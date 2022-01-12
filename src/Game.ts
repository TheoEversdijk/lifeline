<<<<<<< Updated upstream
import Bossfight from './Bossfight.js';
=======
>>>>>>> Stashed changes
import LevelSelector from './LevelSelector.js';
import Player from './Player.js';

export default class Game {
  private canvas: HTMLCanvasElement;

  private ctx: CanvasRenderingContext2D;

  private player: Player;

<<<<<<< Updated upstream
  private bossfight: Bossfight;

  private levelSelector: LevelSelector;

  private visBucks: number;
=======
  private levelSelector: LevelSelector;
>>>>>>> Stashed changes

  private status: boolean;

  /**
   * Initialize the Game
   *
   * @param canvasId the id of the canvas
   */
  public constructor(canvasId: HTMLCanvasElement) {
    // Construct all of the canvas
    this.canvas = canvasId;
    this.canvas.width = 1800;
    this.canvas.height = 900;
    this.ctx = this.canvas.getContext('2d');
<<<<<<< Updated upstream
    this.visBucks = 0;
    this.status = false;

    this.player = new Player(this.canvas);
<<<<<<< Updated upstream
    this.bossfight = new Bossfight(this.canvas);
    this.bossfight.playMusic();
=======
    this.levelSelector = new LevelSelector(this.canvas);
    // this.bossfight = new Bossfight(this.canvas);
>>>>>>> Stashed changes
=======

    this.player = new Player(this.canvas);
    this.levelSelector = new LevelSelector(this.canvas);
>>>>>>> Stashed changes

    this.loop();
  }

  private loop = () => {
    this.handleKeyBoard();
    this.draw();
<<<<<<< Updated upstream
    if (this.player.select()) {
      this.levelSelector.selectLevel(this.player);
      this.status = true;
      // this.bossfight.answerSelect(this.player);
    }

<<<<<<< Updated upstream
    this.isCompleted();

    if (this.player.getStatus() === 'dead') {
      this.bossfight.stopMusic();
      const death = new Audio('../assets/audio/sfx/gamelose.wav');
      death.load();
      death.play();
      death.volume = 0.5;
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
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    }

    if (this.bossfight.getCompletion() !== true && this.player.getHP() !== 0) {
      requestAnimationFrame(this.loop);
    }
=======
=======
    this.player.currentStatus();
    if (this.player.select() && this.levelSelector.getLevelStatus() === false) {
      this.levelSelector.select(this.player);
    }
    if (this.player.select() && this.levelSelector.getLevelStatus() === true) {
      this.levelSelector.answerSelector(this.player, this.ctx);
    }
>>>>>>> Stashed changes
    requestAnimationFrame(this.loop);
>>>>>>> Stashed changes
  };

  /**
   * Handle the UP key on the keyboard to give the player the ability to move the fish up
   */
  private handleKeyBoard() {
    this.player.move(this.canvas);
  }

<<<<<<< Updated upstream
<<<<<<< Updated upstream
  private isCompleted() {
    if (this.bossfight.getCompletion() === false) {
      this.bossfight.draw();
    }

    if (this.bossfight.getCompletion() === true) {
      this.visBucks += this.bossfight.getMoney();
      this.draw();
      const winner = new Audio('../assets/audio/sfx/gamewin.wav');
      winner.load();
      winner.volume = 0.5;
      winner.play();
      setTimeout(() => {
        winner.pause();
        this.bossfight.setCompletion();
        this.bossfight = new Bossfight(this.canvas);
        if (this.player.getScore() >= 240) {
          this.bossfight.easterEggMusic();
        } else {
          this.bossfight.playMusic();
        }
        this.loop();
      }, 5000);
    }

    if (this.bossfight.getStatus() === true) {
      this.player.setScore(this.bossfight.getPoints());
      this.bossfight.setStatus();
    }
  }

=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
  /**
   * Draws all the necessary elements to the canvas
   */
  public draw(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.player.draw(this.ctx);
<<<<<<< Updated upstream
    if (this.status === false) {
      this.levelSelector.draw(this.ctx);
    }
    if (this.status === true) {
      this.levelSelector.levelDrawer();
=======
    if (this.levelSelector.getLevelStatus() === false) {
      this.levelSelector.draw(this.ctx);
    }
    if (this.levelSelector.getLevelStatus() === true) {
      this.levelSelector.levelDrawer(this.player, this.ctx);
>>>>>>> Stashed changes
    }

    // write the current score
    this.writeTextToCanvas(
<<<<<<< Updated upstream
      `Score: ${this.player.getScore()}`,
=======
      `Score: ${this.player.getPoints()}`,
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
    if (this.bossfight.getCompletion() === true) {
=======
    if (this.player.getStatus() === 'dead') {
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
>>>>>>> Stashed changes
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
