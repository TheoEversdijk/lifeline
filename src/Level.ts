export default class Level {
  private pointsWorth: number;

  private correctAnswer: string;

  private question: string;

  private answerOne: string;

  private answerTwo: string;

  private answerThree: string;

  private answerFour: string;

  /**
   * @param pointsworth How many points the question should reward if the answer is correct
   * @param question The question to be answered
   * @param answerOne Answer option one
   * @param answerTwo Answer option two
   * @param answerThree Answer option three
   * @param answerFour Answer option four
   * @param correctAnswer The correct answer
   */
  public constructor(
    pointsworth: number,
    question: string,
    answerOne: string,
    answerTwo: string,
    answerThree: string,
    answerFour: string,
    correctAnswer: string,
  ) {
    this.pointsWorth = pointsworth;
    this.question = question;
    this.answerOne = answerOne;
    this.answerTwo = answerTwo;
    this.answerThree = answerThree;
    this.answerFour = answerFour;
    this.correctAnswer = correctAnswer;
  }
}
