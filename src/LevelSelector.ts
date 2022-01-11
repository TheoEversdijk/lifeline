import Bossfight from './Bossfight.js';
import Checkpoint from './Checkpoint.js';
import Player from './Player.js';

export default class LevelSelector {
  private canvas: HTMLCanvasElement;

  private levels: Bossfight[];

  private checkpoints: Checkpoint[];

  private currentLevel: Bossfight;

  /**
   * Initialize level selector
   *
   * @param canvas Canvas element
   */
  public constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.levels = [];
    this.checkpoints = [];
    for (let i = 0; i < 5; i++) {
      this.levels.push(new Bossfight(this.canvas));
    }
    this.levels.forEach((level, index) => {
      let xPos;
      let yPos;
      if (index === 0) {
        xPos = canvas.width / 5;
        yPos = canvas.height / 1.15;
      }
      if (index === 1) {
        xPos = canvas.width / 2.26;
        yPos = canvas.height / 1.15;
      }
      if (index === 2) {
        xPos = canvas.width / 1.735;
        yPos = canvas.height / 1.62;
      }
      if (index === 3) {
        xPos = canvas.width / 1.379;
        yPos = canvas.height / 2.68;
      }
      if (index === 4) {
        xPos = canvas.width / 1.43;
        yPos = canvas.height / 7.5;
      }
      this.checkpoints.push(new Checkpoint(index, xPos, yPos));
    });
  }

  /**
   * Selects level
   *
   * @param player Player
   */
  public selectLevel(player: Player): void {
    let currentIndex: number;
    this.checkpoints.forEach((checkpoint) => {
      if (player.collidesWithCheckpoint(checkpoint)) {
        currentIndex = checkpoint.getIndex();
      }
    });
    this.levels.forEach((level, index) => {
      if (currentIndex === index) {
        this.currentLevel = level;
      }
    });
  }

  /**
   * Draws current level
   */
  public levelDrawer(): void {
    this.currentLevel.draw();
  }

  // private isCompleted() {
  //   if (this.bossfight.getCompletion() === false) {
  //     this.bossfight.draw();
  //   }

  //   if (this.bossfight.getCompletion() === true) {
  //     this.levelSelector.draw(this.ctx);
  //     this.bossfight.setCompletion();
  //     this.visBucks += this.bossfight.getMoney();
  //   }

  //   if (this.bossfight.getStatus() === true) {
  //     this.score += this.bossfight.getPoints();
  //     this.bossfight.setStatus();
  //   }
  // }

  /**
   * Draws SelectionScreen
   *
   * @param ctx canvas renderer
   */
  public draw(ctx: CanvasRenderingContext2D): void {
    this.canvas.style.backgroundImage = "url('../assets/images/backgrounds/worldmap_concept.png')";
    this.canvas.style.backgroundSize = 'contain';
    this.checkpoints.forEach((checkpoint) => {
      checkpoint.draw(ctx);
    });
  }
}
