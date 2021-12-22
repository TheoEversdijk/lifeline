import Game from './Game.js';
const start = document.getElementById('button');
const body = document.querySelector('body');
const background = document.getElementById('background');
const startGame = () => {
    body.innerHTML = '';
    const canvas = document.createElement('canvas');
    body.append(canvas);
    const game = new Game(canvas);
};
const init = () => {
    const button = document.createElement('button');
    button.innerHTML = 'Start Game';
    start.append(button);
    button.addEventListener('click', startGame);
};
window.addEventListener('load', init);
//# sourceMappingURL=app.js.map