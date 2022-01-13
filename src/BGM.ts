import Player from './Player.js';

export default class BGM {
  private bgm: HTMLAudioElement;

  private easterEgg: HTMLAudioElement;

  private mainMenuTheme: HTMLAudioElement;

  /**
   * Music
   */
  public constructor() {
    this.bgm = new Audio('./assets/audio/music/bossfight.mp3');
    this.easterEgg = new Audio('./assets/audio/music/mega.mp3');
    this.mainMenuTheme = new Audio('../assets/audio/music/mainmenu.mp3');
  }

  /**
   * Plays music
   */
  public playMusic(): void {
    this.bgm.load();
    this.bgm.play();
    this.bgm.loop = true;
    this.bgm.volume = 0.5;
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
    if (player.getPoints() >= 240) {
      this.easterEgg.pause();
    } else {
      this.bgm.pause();
    }
  }

  /**
   * Stops the music
   */
  public stopMain(): void {
    this.mainMenuTheme.pause();
  }
}
