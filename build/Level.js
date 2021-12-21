import Circle from './Circle.js';
export default class Level {
    canvas;
    ctx;
    pointsWorth;
    correctAnswer;
    question;
    answers;
    circles;
    answerOne;
    answerTwo;
    answerThree;
    answerFour;
    isCompleted;
    constructor(pointsworth, question, answerOne, answerTwo, answerThree, answerFour, correctAnswer, canvasId) {
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
            this.circles.push(new Circle(index, (this.canvas.width / 4) + (index * 400), this.canvas.height / 4));
        });
    }
    answerSelect(player) {
        let currentIndex;
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
                }
                else {
                    console.log('wrong');
                    player.damageHP(10);
                    player.setXPos(this.canvas);
                    player.setYPos(this.canvas);
                    this.isCompleted = false;
                }
            }
        });
    }
    draw() {
        this.writeTextToCanvas(`${this.question}?`, 40, this.canvas.width / 2, this.canvas.height / 1.25);
        let spacing = 0;
        this.answers.forEach((answer, index) => {
            spacing += 40;
            this.writeTextToCanvas(`${index + 1} ${answer}`, 40, this.canvas.width / 2, this.canvas.height / 1.20 + spacing);
            this.circles.forEach((circle) => {
                circle.draw(this.ctx);
            });
        });
    }
    getCompletion() {
        return this.isCompleted;
    }
    setCompletion() {
        this.isCompleted = false;
    }
    writeTextToCanvas(text, fontSize = 20, xCoordinate, yCoordinate, alignment = 'center', color = 'black') {
        this.ctx.font = `${fontSize}px sans-serif`;
        this.ctx.fillStyle = color;
        this.ctx.textAlign = alignment;
        this.ctx.fillText(text, xCoordinate, yCoordinate);
    }
}
//# sourceMappingURL=Level.js.map