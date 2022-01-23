import GenderSelector from './GenderSelector.js';
const start = document.getElementById('button');
const body = document.querySelector('body');
const startGame = () => {
    body.innerHTML = '';
    const genderSelect = new GenderSelector(body);
};
const init = () => {
    document.getElementById('logo').onmouseup = (event) => {
        if (event.button === 2) {
            window.open('https://www.youtube.com/watch?v=9gAVaTKcpMY');
        }
    };
    const button = document.createElement('button');
    button.innerHTML = 'Start Game';
    start.append(button);
    button.addEventListener('click', startGame);
};
window.addEventListener('load', init);
//# sourceMappingURL=app.js.map