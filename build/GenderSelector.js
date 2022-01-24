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
        const choose = document.createElement('h1');
        choose.innerHTML = 'Kies je vis';
        choose.setAttribute('style', 'font-family: Arial, Helvetica, sans-serif;color: cyan; -webkit-text-stroke: 2px black;font-size: 90px;');
        body.append(choose);
        const male = document.createElement('img');
        male.src = './assets/images/fish/male/big_player.png';
        male.setAttribute('style', 'height: auto; width: auto; max-width: 500px; max-height: 500px;right:1000px;bottom:250px');
        body.append(male);
        const female = document.createElement('img');
        female.src = './assets/images/fish/female/big_player.png';
        female.setAttribute('style', 'height: auto; width: auto; max-width: 500px; max-height: 500px;bottom:250px');
        body.append(female);
        male.addEventListener('click', () => this.startGame(body, 'Male'));
        female.addEventListener('click', () => this.startGame(body, 'Female'));
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