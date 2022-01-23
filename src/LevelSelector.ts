import BGM from './BGM.js';
import Bossfight from './Bossfight.js';
import Checkpoint from './Checkpoint.js';
import Email from './Email.js';
import Player from './Player.js';

export default class LevelSelector {
  private canvas: HTMLCanvasElement;

  private levels: (Bossfight | Email)[];

  private checkpoints: Checkpoint[];

  private currentLevel: (Bossfight | Email);

  private levelType: string;

  private completion: boolean;

  private levelStatus: boolean;

  private currentIndex: number;

  private bgm: BGM;

  /**
   * Initialize level selector
   *
   * @param canvas Canvas element
   */
  public constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.bgm = new BGM();
    this.bgm.levelSelect();
    this.levelStatus = false;
    this.checkpoints = [];
    this.levels = [];
    for (let index = 0; index <= 4; index++) {
      let xPos;
      let yPos;
      if (index === 0) {
        xPos = canvas.width / 5.2;
        yPos = canvas.height / 1.2;
      }
      if (index === 1) {
        xPos = canvas.width / 2.2;
        yPos = canvas.height / 1.2;
      }
      if (index === 2) {
        xPos = canvas.width / 1.67;
        yPos = canvas.height / 1.7;
      }
      if (index === 3) {
        xPos = canvas.width / 1.3;
        yPos = canvas.height / 2.95;
      }
      if (index === 4) {
        xPos = canvas.width / 1.35;
        yPos = canvas.height / 7.5;
      }
      this.checkpoints.push(new Checkpoint(index, xPos, yPos));
    }
    this.checkpoints.forEach((element, index) => {
      if (index % 2 === 0) {
        this.levels.push(new Bossfight(this.canvas, index));
      } else {
        this.levels.push(new Email(this.canvas));
      }
    });
  }

  /**
   * Selects level
   *
   * @param player Player
   */
  public select(player: Player): void {
    this.checkpoints.forEach((checkpoint) => {
      if (player.collidesWithCheckpoint(checkpoint)) {
        this.currentIndex = checkpoint.getIndex();
        console.log(this.currentIndex);
      }
    });
    this.levels.forEach((level, index) => {
      if (this.currentIndex === index) {
        this.currentLevel = level;
        if (index % 2 === 0) {
          this.levelType = 'Bossfight';
        } else {
          this.levelType = 'Email';
        }
        this.setLevelStatus(true);
        player.setXPos(this.canvas);
        this.bgm.stopLevelSelect();
        if (player.getPoints() >= 400) {
          this.bgm.easterEggMusic();
        } else if (this.currentIndex % 2 !== 0) {
          this.bgm.playbgm1();
        } else if (this.currentIndex % 2 === 0) {
          if (this.currentIndex === 4) {
            this.bgm.bossfight();
          } else {
            this.bgm.playbgm2();
          }
        }
      }
    });
  }

  /**
   * Draws current level
   *
   * @param player player
   * @param ctx ctx
   */
  public levelDrawer(player: Player, ctx: CanvasRenderingContext2D): void {
    this.currentLevel.draw(player, ctx);
  }

  /**
   * Selects answer
   *
   * @param player Player
   * @param ctx renderer
   */
  public answerSelector(player: Player, ctx: CanvasRenderingContext2D): void {
    this.currentLevel.answerSelect(player);
    if (this.currentLevel.getCompletion() === true) {
      this.isCompleted(ctx);
      this.winner(player);
    }
  }

  /**
   * Winner POV
   *
   * @param player player
   */
  public winner(player: Player): void {
    if (player.getlvlComplete() === false) {
      player.lvlComplete();
      this.bgm.stopMusic(player);
      player.addCoins(this.currentLevel.getCoins());
      const winner = new Audio('../assets/audio/sfx/gamewin.wav');
      winner.load();
      winner.volume = 0.5;
      winner.play();
      setTimeout(() => {
        winner.pause();
        this.checkpoints[this.currentIndex].changeColor();
        this.resetLevel();
        player.resetCompletion();
        this.bgm.levelSelect();
        player.setHP();
      }, 4000);
    }
  }

  /**
   * Loser POV
   *
   * @param player pog
   */
  public loser(player: Player): void {
    if (player.getDeath() === false) {
      player.death(true);
      this.bgm.stopMusic(player);
      const death = new Audio('../assets/audio/sfx/gamelose.wav');
      death.load();
      death.play();
      death.volume = 0.5;
      setTimeout(() => {
        this.resetLevel();
        this.bgm.levelSelect();
        player.setHP();
        player.death(false);
      }, 4000);
    }
  }

  /**
   * Checks if level is completed
   *
   * @param ctx canvas renderer
   */
  public isCompleted(ctx: CanvasRenderingContext2D): void {
    this.draw(ctx);
    this.setCompletion(true);
  }

  /**
   * Resets level
   */
  public resetLevel(): void {
    this.levelStatus = false;
    this.currentLevel.reset();
    this.setCompletion(false);
    this.currentLevel.resetIndex();
  }

  /**
   * Gets level status
   *
   * @returns Boolean
   */
  public getLevelStatus(): boolean {
    return this.levelStatus;
  }

  /**
   * Sets status of level
   *
   * @param status of level
   */
  public setLevelStatus(status: boolean): void {
    this.levelStatus = status;
  }

  /**
   * Sets state of level
   *
   * @param status status
   */
  public setCompletion(status: boolean): void {
    this.completion = status;
  }

  /**
   * State
   *
   * @returns Completion state
   */
  public getCompletion(): boolean {
    return this.completion;
  }

  /**
   * Draws SelectionScreen
   *
   * @param ctx canvas renderer
   */
  public draw(ctx: CanvasRenderingContext2D): void {
    this.canvas.style.backgroundImage = "url('../assets/images/backgrounds/worldmap_concept.png')";
    this.canvas.style.backgroundRepeat = 'no-repeat';
    this.canvas.style.backgroundSize = '1600px 900px';
    this.canvas.style.marginLeft = 'auto';
    this.canvas.style.marginRight = 'auto';
    this.checkpoints.forEach((checkpoint) => {
      checkpoint.draw(ctx);
    });
  }
}
