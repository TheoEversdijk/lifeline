/**
 * This class handles the keyboard events. It knows the last known state of its
 * keys
 *
 * Some parts of this class are pretty complex, but the class itself is fairly
 * easy to use. You just instantiate one object in your game and us the method
 * `isKeyDown()` to check if a specific key is currently pressed down by the
 * user.
 *
 * NOTE: It is known that the MouseEvent.keyCode property is deprecated, which
 * means that there will be a moment that this class will not work anymore.
 *
 * @author BugSlayer
 */
export default class KeyListener {
  // Some convenient key codes already defined here. If you need a specific
  // keycode, see:https://keycode.info/
  public static readonly KEY_ENTER = 13;

  public static readonly KEY_SHIFT = 16;

  public static readonly KEY_CTRL = 17;

  public static readonly KEY_ALT = 18;

  public static readonly KEY_ESC = 27;

  public static readonly KEY_SPACE = 32;

  public static readonly KEY_LEFT = 37;

  public static readonly KEY_UP = 38;

  public static readonly KEY_RIGHT = 39;

  public static readonly KEY_DOWN = 40;

  public static readonly KEY_DEL = 46;

  public static readonly KEY_1 = 49;

  public static readonly KEY_2 = 50;

  public static readonly KEY_3 = 51;

  public static readonly KEY_4 = 52;

  public static readonly KEY_5 = 53;

  public static readonly KEY_6 = 54;

  public static readonly KEY_7 = 55;

  public static readonly KEY_8 = 56;

  public static readonly KEY_9 = 57;

  public static readonly KEY_0 = 58;

  public static readonly KEY_A = 65;

  public static readonly KEY_B = 66;

  public static readonly KEY_C = 67;

  public static readonly KEY_D = 68;

  public static readonly KEY_E = 69;

  public static readonly KEY_F = 70;

  public static readonly KEY_G = 71;

  public static readonly KEY_H = 72;

  public static readonly KEY_I = 73;

  public static readonly KEY_J = 74;

  public static readonly KEY_K = 75;

  public static readonly KEY_L = 76;

  public static readonly KEY_M = 77;

  public static readonly KEY_N = 78;

  public static readonly KEY_O = 79;

  public static readonly KEY_P = 80;

  public static readonly KEY_Q = 81;

  public static readonly KEY_R = 82;

  public static readonly KEY_S = 83;

  public static readonly KEY_T = 84;

  public static readonly KEY_U = 85;

  public static readonly KEY_V = 86;

  public static readonly KEY_W = 87;

  public static readonly KEY_X = 88;

  public static readonly KEY_Y = 89;

  public static readonly KEY_Z = 90;

  /**
   * Array that holds a boolean for each keycode. The keycode is the index of
   * the array and the boolean is the state of that key (`true` means that
   * the key is down).
   */
  private keyCodeStates: boolean[] = new Array<boolean>();

  /**
   * Constructs a new KeyListener.
   */
  constructor() {
    // Register the arrow methods as listeners to keyevents
    // There is a third event ('keypress'), but we do not need to use it
    window.addEventListener('keydown', (ev: KeyboardEvent) => {
      this.keyCodeStates[ev.keyCode] = true;
    });
    window.addEventListener('keyup', (ev: KeyboardEvent) => {
      this.keyCodeStates[ev.keyCode] = false;
    });
  }

  /**
   * Returns `true` if and only if the last known state of the keyboard
   * reflects that the specified key is currently pressed.
   *
   * @param keyCode the keyCode to check
   * @returns `true` when the specified key is currently down
   */
  public isKeyDown(keyCode: number): boolean {
    return this.keyCodeStates[keyCode] === true;
  }
}
