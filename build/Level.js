export default class Level {
    pointsWorth;
    correctAnswer;
    question;
    answerOne;
    answerTwo;
    answerThree;
    answerFour;
    constructor(pointsworth, question, answerOne, answerTwo, answerThree, answerFour, correctAnswer) {
        this.pointsWorth = pointsworth;
        this.question = question;
        this.answerOne = answerOne;
        this.answerTwo = answerTwo;
        this.answerThree = answerThree;
        this.answerFour = answerFour;
        this.correctAnswer = correctAnswer;
    }
}
//# sourceMappingURL=Level.js.map