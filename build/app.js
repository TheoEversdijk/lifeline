import Game from './Game.js';
const start = document.getElementById('button');
const body = document.querySelector('body');
const mainMenuTheme = new Audio('../assets/audio/music/mainmenu.mp3');
const startGame = () => {
    mainMenuTheme.pause();
    body.innerHTML = '';
    const canvas = document.createElement('canvas');
    body.append(canvas);
    const game = new Game(canvas);
};
const init = () => {
    mainMenuTheme.load();
    mainMenuTheme.play();
    mainMenuTheme.loop = true;
    mainMenuTheme.volume = 0.5;
    const button = document.createElement('button');
    button.innerHTML = 'Start Game';
    start.append(button);
    button.addEventListener('click', startGame);
};
window.addEventListener('load', init);
//# sourceMappingURL=app.js.map