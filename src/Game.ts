import Bossfight from './Bossfight.js';
import EnemyFishes from './enemyfishes.js';
import Player from './Player.js';

export default class Game {
  private canvas: HTMLCanvasElement;

  private ctx: CanvasRenderingContext2D;

  private score: number;

  private player: Player;

  private bossfight: Bossfight;

  private enemyfishes: EnemyFishes[];

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
    this.visBucks = 0;

    this.player = new Player(this.canvas);
    this.bossfight = new Bossfight(this.canvas);
    this.bossfight.playMusic();
    this.enemyfishes = [];
    for (let i = 0; i < 3; i++) {
      this.enemyfishes.push(new EnemyFishes(this.canvas));
    }

    this.loop();
  }

  private loop = () => {
    this.handleKeyBoard();
    this.enemyfishes.forEach((fish) => {
      fish.move();
      if (this.player.collidesWithFish(fish)) {
        this.player.damageHP(5);
        this.player.setXPos(this.canvas);
      }
    });
    this.draw();
    if (this.player.lockAnswer()) {
      this.bossfight.answerSelect(this.player);
    }

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
      this.enemyfishes.forEach((fish) => {
        fish.outOfCanvas(this.canvas.width, this.canvas.height);
      });
      requestAnimationFrame(this.loop);
    }
  };

  /**
   * Handle the UP key on the keyboard to give the player the ability to move the fish up
   */
  private handleKeyBoard() {
    this.player.move(this.canvas);
  }

  // private levelCompleted() {
  //   const winner = new Audio('../assets/audio/sfx/gamewin.wav');
  //   winner.load();
  //   winner.volume = 0.5;
  //   winner.play();
  //   setTimeout(() => {
  //     winner.pause();
  //     this.bossfight.setCompletion();
  //     this.bossfight = new Bossfight(this.canvas);
  //     if (this.player.getScore() >= 240) {
  //       this.bossfight.easterEggMusic();
  //     } else {
  //       this.bossfight.playMusic();
  //     }
  //     this.loop();
  //   }, 5000);
  // }

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

  /**
   * Draws all the necessary elements to the canvas
   */
  private draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.player.draw(this.ctx);
    this.bossfight.draw();
    this.enemyfishes.forEach((fish) => {
      fish.draw(this.ctx);
    });

    // write the current score
    this.writeTextToCanvas(
      `Score: ${this.player.getScore()}`,
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

    if (this.bossfight.getCompletion() === true) {
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
