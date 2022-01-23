import Player from './Player.js';

export default class BGM {
  private bgm1: HTMLAudioElement;

  private bgm2: HTMLAudioElement;

  private easterEgg: HTMLAudioElement;

  private mainMenuTheme: HTMLAudioElement;

  private levelselect: HTMLAudioElement;

  private bosslevel: HTMLAudioElement;

  /**
   * Music
   */
  public constructor() {
    this.bgm1 = new Audio('./assets/audio/music/knights.mp3');
    this.bgm2 = new Audio('./assets/audio/music/forest.mp3');
    this.easterEgg = new Audio('./assets/audio/music/easteregg.mp3');
    this.levelselect = new Audio('./assets/audio/music/worldmap.mp3');
    this.mainMenuTheme = new Audio('../assets/audio/music/mainmenu.mp3');
    this.bosslevel = new Audio('../assets/audio/music/bossfight.mp3');
  }

  /**
   * Plays music
   */
  public playbgm1(): void {
    this.bgm1.load();
    this.bgm1.play();
    this.bgm1.loop = true;
    this.bgm1.volume = 0.5;
  }

  /**
   * Plays music
   */
  public playbgm2(): void {
    this.bgm2.load();
    this.bgm2.play();
    this.bgm2.loop = true;
    this.bgm2.volume = 0.5;
  }

  /**
   * Plays on the fifth level
   */
  public bossfight(): void {
    this.bosslevel.load();
    this.bosslevel.play();
    this.bosslevel.loop = true;
    this.bosslevel.volume = 0.5;
  }

  /**
   * Plays levelselect theme
   */
  public levelSelect(): void {
    this.levelselect.load();
    this.levelselect.play();
    this.levelselect.loop = true;
    this.levelselect.volume = 0.5;
  }

  /**
   * Plays easterEgg music
   */
  public easterEggMusic(): void {
    this.easterEgg.load();
    this.easterEgg.play();
    this.easterEgg.loop = true;
    this.easterEgg.volume = 0.5;
  }

  /**
   * Plays main menu music
   */
  public mainMenu(): void {
    this.mainMenuTheme.load();
    this.mainMenuTheme.play();
    this.mainMenuTheme.loop = true;
    this.mainMenuTheme.volume = 0.5;
  }

  /**
   * Stops the music
   *
   * @param player player
   */
  public stopMusic(player: Player): void {
    if (player.getPoints() >= 400) {
      this.easterEgg.pause();
    } else {
      this.bgm1.pause();
      this.bgm2.pause();
      this.bosslevel.pause();
    }
  }

  /**
   * Stops the music
   */
  public stopLevelSelect(): void {
    this.levelselect.pause();
  }
}
