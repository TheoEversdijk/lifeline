import Game from './Game.js';
export default class GenderSelector {
    mainMenuTheme = new Audio('../assets/audio/music/mainmenu.mp3');
    game;
    body;
    constructor(body) {
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
    startGame(body, gender) {
        const bodyElement = body;
        this.mainMenuTheme.pause();
        bodyElement.innerHTML = '';
        const canvas = document.createElement('canvas');
        body.append(canvas);
        this.game = new Game(canvas, gender);
    }
}
//# sourceMappingURL=GenderSelector.js.map