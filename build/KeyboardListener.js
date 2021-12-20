export default class KeyboardListener {
    static KEY_SPACE = 32;
    static KEY_LEFT = 37;
    static KEY_UP = 38;
    static KEY_RIGHT = 39;
    static KEY_DOWN = 40;
    static KEY_R = 82;
    keyCodeStates;
    constructor() {
        this.keyCodeStates = new Array();
        window.addEventListener('keydown', this.keyDown);
        window.addEventListener('keyup', this.keyUp);
    }
    isKeyDown(keyCode) {
        return this.keyCodeStates[keyCode] === true;
    }
    keyDown = (ev) => {
        this.keyCodeStates[ev.keyCode] = true;
    };
    keyUp = (ev) => {
        this.keyCodeStates[ev.keyCode] = false;
    };
}
//# sourceMappingURL=KeyboardListener.js.map