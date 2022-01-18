import Game from './Game.js';

export default class GenderSelector {
  private mainMenuTheme: HTMLAudioElement = new Audio('../assets/audio/music/mainmenu.mp3');

  private game: Game;

  private body: HTMLBodyElement;

  /**
   * Init Genderselect
   *
   * @param body Body
   */
  public constructor(body: HTMLBodyElement) {
    this.body = body;
    this.mainMenuTheme.load();
    this.mainMenuTheme.play();
    this.mainMenuTheme.loop = true;
    this.mainMenuTheme.volume = 0.5;
    const button = document.createElement('button');
    const buttonFemale = document.createElement('button');
    button.innerText = 'Man';
    buttonFemale.innerText = 'Vrouw';
    body.append(button);
    body.append(buttonFemale);
    button.addEventListener('click', () => this.startGame(body, 'Male'));
    buttonFemale.addEventListener('click', () => this.startGame(body, 'Female'));
  }

  private startGame(body: HTMLBodyElement, gender: string) {
    const bodyElement = body;
    this.mainMenuTheme.pause();
    bodyElement.innerHTML = '';
    const canvas = document.createElement('canvas');
    body.append(canvas);
    this.game = new Game(canvas as HTMLCanvasElement, gender);
  }
}
