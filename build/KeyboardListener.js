export default class KeyListener {
    static KEY_ENTER = 13;
    static KEY_SHIFT = 16;
    static KEY_CTRL = 17;
    static KEY_ALT = 18;
    static KEY_ESC = 27;
    static KEY_SPACE = 32;
    static KEY_LEFT = 37;
    static KEY_UP = 38;
    static KEY_RIGHT = 39;
    static KEY_DOWN = 40;
    static KEY_DEL = 46;
    static KEY_1 = 49;
    static KEY_2 = 50;
    static KEY_3 = 51;
    static KEY_4 = 52;
    static KEY_5 = 53;
    static KEY_6 = 54;
    static KEY_7 = 55;
    static KEY_8 = 56;
    static KEY_9 = 57;
    static KEY_0 = 58;
    static KEY_A = 65;
    static KEY_B = 66;
    static KEY_C = 67;
    static KEY_D = 68;
    static KEY_E = 69;
    static KEY_F = 70;
    static KEY_G = 71;
    static KEY_H = 72;
    static KEY_I = 73;
    static KEY_J = 74;
    static KEY_K = 75;
    static KEY_L = 76;
    static KEY_M = 77;
    static KEY_N = 78;
    static KEY_O = 79;
    static KEY_P = 80;
    static KEY_Q = 81;
    static KEY_R = 82;
    static KEY_S = 83;
    static KEY_T = 84;
    static KEY_U = 85;
    static KEY_V = 86;
    static KEY_W = 87;
    static KEY_X = 88;
    static KEY_Y = 89;
    static KEY_Z = 90;
    keyCodeStates = new Array();
    constructor() {
        window.addEventListener('keydown', (ev) => {
            this.keyCodeStates[ev.keyCode] = true;
        });
        window.addEventListener('keyup', (ev) => {
            this.keyCodeStates[ev.keyCode] = false;
        });
    }
    isKeyDown(keyCode) {
        return this.keyCodeStates[keyCode] === true;
    }
}
//# sourceMappingURL=KeyboardListener.js.map