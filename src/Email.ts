import Button from './Button.js';
import Game from './Game.js';
import Level from './Level.js';
import Player from './Player.js';

export default class Email extends Level {
  private buttons: Button[];

  private emails: string[];

  private currentEmail: string;

  private correctAnswers: string[];

  private answers: string[];

  private correctAnswer: string;

  private index: number;

  private randomIndexArray: number[];

  private indexArray: number[];

  /**
   * Initialize Bossfight
   *
   * @param canvas HTML Canvas Element
   */
  public constructor(canvas: HTMLCanvasElement) {
    super(100, canvas);
    this.isCompleted = false;
    this.emails = ['./assets/images/emails/echtepostnl.png',
      './assets/images/emails/echteofferte.png',
      './assets/images/emails/echteoma.png',
      './assets/images/emails/echteprijs.png',
      './assets/images/emails/echtetandarts.png',
      './assets/images/emails/nepbank.png',
      './assets/images/emails/nepboodschappen.png',
      './assets/images/emails/nepoliesjeik.png',
    ];
    this.answers = ['Ja', 'Nee'];
    this.correctAnswers = ['Nee',
      'Ja',
      'Ja',
      'Ja',
      'Ja',
      'Nee',
      'Nee',
      'Nee',
    ];
    this.index = 0;
    this.buttons = [];
    this.indexArray = [0, 1, 2, 3, 4, 5, 6, 7];
    this.randomIndexArray = [];
    let i = this.indexArray.length;
    let j = 0;
    // eslint-disable-next-line no-plusplus
    while (i--) {
      j = Math.floor(Math.random() * (i + 1));
      this.randomIndexArray.push(this.indexArray[j]);
      this.indexArray.splice(j, 1);
    }
    this.questionGenerator();
    this.answers.forEach((answer, index) => {
      if (answer === 'Ja') {
        this.buttons.push(new Button(
          index,
          this.canvas.width / 3.2,
          this.canvas.height / 1.3,
          Game.loadNewImage('./assets/images/icons/real.png'),
          'Ja',
        ));
      }
      if (answer === 'Nee') {
        this.buttons.push(new Button(
          index,
          this.canvas.width / 2.1,
          this.canvas.height / 1.3,
          Game.loadNewImage('./assets/images/icons/fake.png'),
          'Nee',
        ));
      }
    });
  }

  /**
   * Generates questions
   */
  public questionGenerator(): void {
    this.correctAnswer = this.correctAnswers[this.randomIndexArray[this.index]];
    this.currentEmail = this.emails[this.randomIndexArray[this.index]];

    if (this.index !== this.emails.length + 1) {
      if (this.index <= 8) {
        this.index += 1;
      }
    }
  }

  /**
   * Resets level
   */
  public reset(): void {
    this.isCompleted = false;
  }

  /**
   * Resets index
   */
  public resetIndex(): void {
    this.index = 0;
    this.questionGenerator();
  }

  /**
   * Selects answer
   *
   * @param player Player
   */
  public answerSelect(player: Player): void {
    this.buttons.forEach((button) => {
      if (player.collidesWithButton(button)) {
        if (button.getType() === this.correctAnswer) {
          console.log('correct');
          this.questionGenerator();
          player.setXPos(this.canvas);
          player.setYPos(this.canvas);
          player.addPoints(10);
          this.questionDone = true;
          if (this.index > this.emails.length) {
            this.isCompleted = true;
          }
        } else {
          console.log('wrong');
          player.damageHP(25);
          player.setXPos(this.canvas);
          player.setYPos(this.canvas);
        }
      }
    });
  }

  /**
   * Draws the required items
   */
  public draw(): void {
    this.canvas.style.backgroundImage = `url(${this.currentEmail})`;
    this.canvas.style.backgroundRepeat = 'no-repeat';
    this.canvas.style.backgroundSize = '1600px 900px';
    this.canvas.style.marginLeft = 'auto';
    this.canvas.style.marginRight = 'auto';
    this.buttons.forEach((button) => {
      button.draw(this.ctx);
    });
  }
}
