<<<<<<< Updated upstream
=======
import BGM from './BGM.js';
>>>>>>> Stashed changes
import Bossfight from './Bossfight.js';
import Checkpoint from './Checkpoint.js';
import Player from './Player.js';

export default class LevelSelector {
  private canvas: HTMLCanvasElement;

  private levels: Bossfight[];

  private checkpoints: Checkpoint[];

  private currentLevel: Bossfight;

<<<<<<< Updated upstream
=======
  private completion: boolean;

  private levelStatus: boolean;

  private currentIndex: number;

  private bgm: BGM;

>>>>>>> Stashed changes
  /**
   * Initialize level selector
   *
   * @param canvas Canvas element
   */
  public constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
<<<<<<< Updated upstream
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
=======
    this.bgm = new BGM();
    this.bgm.mainMenu();
    this.levelStatus = false;
    this.checkpoints = [];
    this.levels = [];
    for (let index = 0; index <= 4; index++) {
      let xPos;
      let yPos;
      if (index === 0) {
        xPos = canvas.width / 5.2;
        yPos = canvas.height / 1.15;
      }
      if (index === 1) {
        xPos = canvas.width / 2.3;
        yPos = canvas.height / 1.15;
      }
      if (index === 2) {
        xPos = canvas.width / 1.8;
        yPos = canvas.height / 1.62;
      }
      if (index === 3) {
        xPos = canvas.width / 1.41;
        yPos = canvas.height / 2.68;
      }
      if (index === 4) {
        xPos = canvas.width / 1.47;
        yPos = canvas.height / 7.5;
      }
      this.checkpoints.push(new Checkpoint(index, xPos, yPos));
    }
    this.checkpoints.forEach(() => {
      this.levels.push(new Bossfight(this.canvas));
>>>>>>> Stashed changes
    });
  }

  /**
   * Selects level
   *
   * @param player Player
   */
<<<<<<< Updated upstream
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
=======
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
        this.setLevelStatus(true);
        player.setXPos(this.canvas);
        this.bgm.stopMain();
        if (player.getPoints() >= 240) {
          this.bgm.easterEggMusic();
        } else {
          this.bgm.playMusic();
        }
>>>>>>> Stashed changes
      }
    });
  }

  /**
   * Draws current level
<<<<<<< Updated upstream
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
=======
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
        this.resetLevel();
        player.resetCompletion();
        this.bgm.mainMenu();
        player.setHP();
      }, 5000);
    }
  }

  /**
   * Loser POV
   *
   * @param player pog
   */
  public loser(player: Player): void {
    if (player.getDeath() === false) {
      player.death();
      this.bgm.stopMusic(player);
      const death = new Audio('../assets/audio/sfx/gamelose.wav');
      death.load();
      death.play();
      death.volume = 0.5;
      setTimeout(() => {
        window.location.reload();
      }, 5000);
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
>>>>>>> Stashed changes

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
