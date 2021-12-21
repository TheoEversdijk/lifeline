import Circle from './Circle.js';
import Player from './Player.js';

export default class Level {
  private canvas: HTMLCanvasElement;

  private ctx: CanvasRenderingContext2D;

  private pointsWorth: number;

  private correctAnswer: string;

  private question: string;

  private answers: string[];

  private circles: Circle[];

  private answerOne: string;

  private answerTwo: string;

  private answerThree: string;

  private answerFour: string;

  private isCompleted: boolean;

  /**
   * @param pointsworth How many points the question should reward if the answer is correct
   * @param question The question to be answered
   * @param answerOne Answer option one
   * @param answerTwo Answer option two
   * @param answerThree Answer option three
   * @param answerFour Answer option four
   * @param correctAnswer The correct answer
   * @param canvasId canvas ID
   */
  public constructor(
    pointsworth: number,
    question: string,
    answerOne: string,
    answerTwo: string,
    answerThree: string,
    answerFour: string,
    correctAnswer: string,
    canvasId: HTMLCanvasElement,
  ) {
    this.pointsWorth = pointsworth;
    this.question = question;
    this.answerOne = answerOne;
    this.answerTwo = answerTwo;
    this.answerThree = answerThree;
    this.answerFour = answerFour;
    this.correctAnswer = correctAnswer;
    this.isCompleted = false;

    this.canvas = canvasId;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');
    this.answers = [];
    this.answers.push(this.answerOne, this.answerTwo, this.answerThree, this.answerFour);
    this.circles = [];
    this.answers.forEach((element, index) => {
      this.circles.push(new Circle(
        index,
        (this.canvas.width / 4) + (index * 400),
        this.canvas.height / 4,
      ));
    });
  }

  /**
   * Selects answer
   *
   * @param player Player
   */
  public answerSelect(player: Player): void {
    let currentIndex: number;
    this.circles.forEach((circle) => {
      if (player.collidesWith(circle)) {
        currentIndex = circle.getIndex();
      }
    });

    this.answers.forEach((answer, index) => {
      if (currentIndex === index) {
        if (answer === this.correctAnswer) {
          this.isCompleted = true;
          player.setXPos(this.canvas);
          player.setYPos(this.canvas);
        } else {
          console.log('wrong');
          player.damageHP(10);
          player.setXPos(this.canvas);
          player.setYPos(this.canvas);
          this.isCompleted = false;
        }
      }
    });
  }

  /**
   * Draw Level
   */
  public draw(): void {
    this.writeTextToCanvas(
      `${this.question}?`,
      40,
      this.canvas.width / 2,
      this.canvas.height / 1.25,
    );

    let spacing = 0;
    this.answers.forEach((answer, index) => {
      spacing += 40;
      this.writeTextToCanvas(
        `${index + 1} ${answer}`,
        40,
        this.canvas.width / 2,
        this.canvas.height / 1.20 + spacing,
      );

      this.circles.forEach((circle) => {
        circle.draw(this.ctx);
      });
    });
  }

  /**
   * Gets status
   *
   * @returns True if level done
   */
  public getCompletion(): boolean {
    return this.isCompleted;
  }

  /**
   * Sets status
   */
  public setCompletion(): void {
    this.isCompleted = false;
  }

  /**
   * Writes text to the canvas
   *
   * @param text - Text to write
   * @param fontSize - Font size in pixels
   * @param xCoordinate - Horizontal coordinate in pixels
   * @param yCoordinate - Vertical coordinate in pixels
   * @param alignment - Where to align the text
   * @param color - The color of the text
   */
  public writeTextToCanvas(
    text: string,
    fontSize: number = 20,
    xCoordinate: number,
    yCoordinate: number,
    alignment: CanvasTextAlign = 'center',
    color: string = 'black',
  ): void {
    this.ctx.font = `${fontSize}px sans-serif`;
    this.ctx.fillStyle = color;
    this.ctx.textAlign = alignment;
    this.ctx.fillText(text, xCoordinate, yCoordinate);
  }
}
