import Circle from './Circle.js';
import EnemyFishes from './enemyfishes.js';
import Game from './Game.js';
import Level from './Level.js';
export default class Bossfight extends Level {
    circles;
    question;
    correctAnswers;
    answerOne;
    answerTwo;
    answerThree;
    answerFour;
    currentAnswers;
    correctAnswer;
    currentQuestion;
    index;
    randomIndexArray;
    indexArray;
    enemyfishes;
    checkpointIndex;
    bossHealth;
    constructor(canvas, index) {
        super(100, canvas);
        this.checkpointIndex = index;
        this.isCompleted = false;
        if (this.checkpointIndex === 4) {
            this.bossHealth = 400;
        }
        this.question = ['Wie kan je niet vertrouwen?',
            'Wat doe je al je door een oplichter gebeld wordt?',
            'Wat doe je als iemand gecyberpest wordt?',
            'Accepteer je iedere volger op Instagram?',
            'Je krijgt een eng berichtje via WhatsApp, volgens dit bericht moet je het doorsturen aan 10 anderen want anders gebeurt er iets ergs.',
            'Sommige mensen sturen schokkende fotos via WhatsApp. Hoe check je of deze afbeeldingen echt zijn?',
            'Een vriend van vroeger stuurt je een berichtje: "Heb jij deze gekke foto van jou gezien? Klik ff op deze link!" Wat doe je?',
            'Wat doe je als er een ongepaste foto op Instagram naar jou wordt gestuurd?',
        ];
        this.answerOne = ['Je ouders.',
            'Ophangen en melden aan de politie.',
            'Ik wacht het af en kijk wat er gebeurt.',
            'Nee, er zijn ook rare mensen met neppe accounts.',
            'Je laat het aan je kleine broertje of zusje zien.',
            'Het is niet te controleren.',
            'Vragen of deze link wel echt is.',
            'Verwijderen en melden.',
        ];
        this.answerTwo = ['Je leerkrachten.',
            'De instructies van de oplichter volgen.',
            'Ik ga naar de politie en doe aangifte.',
            'Tuurlijk wel, hoe meer volgers hoe beter!',
            'Je stuurt het meteen door aan 10 vrienden.',
            'Uploaden naar reverse image search van Google.',
            'Op de link klikken.',
            'Doorsturen naar vrienden.',
        ];
        this.answerThree = ['Je vrienden.',
            'Je ouders om hulp vragen.',
            'Ik probeer diegene te helpen (en ik meld het).',
            'Ja, nieuwe mensen ontmoeten is goed.',
            'Je wilt niemand bang maken en je verwijdert het.',
            'Via WhatsApp groepen vragen of iemand het weet.',
            'Een bericht naar hem sturen via een andere app.',
            'Op je instagram reposten.',
        ];
        this.answerFour = ['Vreemdelingen.',
            'Ophangen.',
            'Ik pest mee.',
            'Nee, je moet nooit volgverzoeken accepteren.',
            'Je stuurt een bericht terug naar die persoon.',
            'Niks is te geloven wat je op WhatsApp leest.',
            'Hem meteen blokkeren.',
            'Niks.',
        ];
        this.correctAnswers = ['Vreemdelingen.',
            'Ophangen en melden aan de politie.',
            'Ik probeer diegene te helpen (en ik meld het).',
            'Nee, er zijn ook rare mensen met neppe accounts.',
            'Je wilt niemand bang maken en je verwijdert het.',
            'Uploaden naar reverse image search van Google.',
            'Een bericht naar hem sturen via een andere app.',
            'Verwijderen en melden.',
        ];
        this.currentAnswers = [];
        this.circles = [];
        this.index = 0;
        this.indexArray = [0, 1, 2, 3, 4, 5, 6, 7];
        this.randomIndexArray = [];
        let i = this.indexArray.length;
        let j = 0;
        while (i--) {
            j = Math.floor(Math.random() * (i + 1));
            this.randomIndexArray.push(this.indexArray[j]);
            this.indexArray.splice(j, 1);
        }
        this.enemyfishes = [];
        if (this.checkpointIndex === 4) {
            for (let k = 0; k < 7; k++) {
                this.enemyfishes.push(new EnemyFishes(this.canvas, this.checkpointIndex));
            }
        }
        else {
            for (let k = 0; k < 5; k++) {
                this.enemyfishes.push(new EnemyFishes(this.canvas, this.checkpointIndex));
            }
        }
        this.questionGenerator();
    }
    questionGenerator() {
        this.correctAnswer = this.correctAnswers[this.randomIndexArray[this.index]];
        this.currentQuestion = this.question[this.randomIndexArray[this.index]];
        this.currentAnswers = [];
        this.currentAnswers.push(this.answerOne[this.randomIndexArray[this.index]], this.answerTwo[this.randomIndexArray[this.index]], this.answerThree[this.randomIndexArray[this.index]], this.answerFour[this.randomIndexArray[this.index]]);
        if (this.index !== this.question.length + 1) {
            if (this.index <= 8) {
                this.index += 1;
            }
        }
        this.circleGenerator();
    }
    reset() {
        this.isCompleted = false;
    }
    resetIndex() {
        this.index = 0;
        this.questionGenerator();
    }
    answerSelect(player) {
        let currentIndex;
        this.circles.forEach((circle) => {
            if (player.collidesWith(circle)) {
                currentIndex = circle.getIndex();
            }
        });
        this.currentAnswers.forEach((answer, index) => {
            if (currentIndex === index) {
                if (answer === this.correctAnswer) {
                    if (this.checkpointIndex === 4) {
                        this.bossHealth -= 80;
                    }
                    console.log('correct');
                    this.questionGenerator();
                    player.setXPos(this.canvas);
                    player.setYPos(this.canvas);
                    player.addPoints(10);
                    this.questionDone = true;
                    if (this.index > this.question.length) {
                        this.isCompleted = true;
                    }
                }
                else {
                    console.log('wrong');
                    player.damageHP(10);
                    player.setXPos(this.canvas);
                    player.setYPos(this.canvas);
                }
            }
        });
    }
    circleGenerator() {
        this.currentAnswers.forEach((element, index) => {
            if (this.checkpointIndex === 4) {
                this.circles.push(new Circle(index, this.canvas.width / 4, (this.canvas.height / 8) + (index * 160), 'circle'));
            }
            else {
                this.circles.push(new Circle(index, this.canvas.width / 16, (this.canvas.height / 8) + (index * 160), 'circle'));
            }
        });
    }
    draw(player, ctx) {
        this.canvas.style.backgroundImage = "url('./assets/images/backgrounds/background1.png')";
        this.canvas.style.backgroundSize = 'cover';
        this.enemyfishes.forEach((enemyfish) => {
            enemyfish.draw(ctx);
            player.collidesWithFish(this.canvas, enemyfish);
            enemyfish.move();
            enemyfish.outOfCanvas(this.canvas.width, this.canvas.height);
        });
        this.ctx.beginPath();
        this.ctx.rect(0, this.canvas.height / 1.35, this.canvas.width, 350);
        this.ctx.fillStyle = 'rgba(173, 216, 230, 0.5)';
        this.ctx.fill();
        this.ctx.stroke();
        this.writeTextToCanvas(`${this.currentQuestion}`, 25, this.canvas.width / 2, this.canvas.height / 1.25);
        let spacing = 0;
        this.currentAnswers.forEach((answer, index) => {
            spacing += 30;
            this.writeTextToCanvas(`${index + 1} ${answer}`, 25, this.canvas.width / 2, this.canvas.height / 1.24 + spacing);
            this.circles.forEach((circle) => {
                circle.draw(this.ctx);
            });
        });
        if (this.checkpointIndex === 4) {
            const shark = Game.loadNewImage('./assets/images/fish/shark.png');
            this.ctx.drawImage(shark, -40, this.canvas.height / 4);
            this.writeTextToCanvas(`Boss HP: ${this.bossHealth}`, 25, this.canvas.width / 16, 50);
        }
    }
}
//# sourceMappingURL=Bossfight.js.map