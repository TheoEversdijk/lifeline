import Circle from './Circle.js';
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
    bgm = new Audio('./assets/audio/music/bossfight.mp3');
    constructor(canvas) {
        super(100, canvas);
        this.bgm.load();
        this.bgm.play();
        this.bgm.volume = 0.5;
        this.question = ['Wie kan je niet vertrouwen?',
            'Wat doe je al je door een oplichter wordt gebeld?',
            'Wat doe je als je getuige bent van cyberpesten op Instagram?',
            'Ga je iedere volger op Instagram accepteren?',
            'Je krijgt een eng berichtje via WhatsApp dat je, volgens het bericht, moet doorzenden aan 10 anderen want anders gebeurt er iets ergs. Jij',
            'Sommige mensen sturen schokkende fotos via WhatsApp. Hoe check je of deze afbeeldingen echt zijn?',
            'Een vriend van vroeger stuurt je een berichtje via Messenger: Heb jij deze gekke foto van jou gezien? Klik ff op de link! Wat doe je?',
            'Wat doe je als er een ongepaste foto op instagram naar jou wordt gestuurd?',
        ];
        this.answerOne = ['Je ouders.',
            'Ophangen en melden aan de politie.',
            'Ik wacht af en kijk wat er gebeurt.',
            'Nee, er zijn ook rare mensen met fake accounts.',
            '...laat het aan je kleine broertje of zusje zien.',
            'Het is niet te controleren zodra het online staat.',
            'Vragen of deze link wel echt is aan de persoon',
            'Verwijderen en rapporteren',
        ];
        this.answerTwo = ['Je leerkrachten.',
            'De instructies van de oplichter volgen.',
            'Ik ga naar de politie en doe aangifte.',
            'Tuurlijk wel, hoe meer volgers hoe beter!',
            '...stuurt het direct door aan je 10 beste vrienden.',
            'Uploaden naar revese image search van Google.',
            'Vreemd! Snel kijken waar dit over gaat.',
            'Doorsturen naar vrienden',
        ];
        this.answerThree = ['Je vrienden.',
            'Je ouders om hulp vragen.',
            'Ik probeer diegene te helpen en ik rapporteer het.',
            'Ja, nieuwe mensen ontmoeten is goed',
            '...wilt niemand bang maken en je verwijdert het.',
            'Via WhatsAppgroepen checken of iemand het weet',
            'Leuk dat hij een oude foto stuurt. Snel kijken!',
            'Op je instagram reposten',
        ];
        this.answerFour = ['Vreemdelingen.',
            'Ophangen.',
            'Negeren en andere fotos bekijken',
            'Ja hoor, er zijn nauwelijks fake accounts op Insta',
            '...stuurt berichten terug naar die persoon',
            'Zelf er kijken',
            'Ik stuur even een e-mail of SMS om dit te checken.',
            'Niks',
        ];
        this.correctAnswers = ['Vreemdelingen.',
            'Ophangen en melden aan de politie.',
            'Ik probeer diegene te helpen en ik rapporteer het.',
            'Nee, er zijn ook rare mensen met fake accounts.',
            '...wilt niemand bang maken en je verwijdert het.',
            'Uploaden naar revese image search van Google.',
            'Ik stuur even een e-mail of SMS om dit te checken.',
            'Verwijderen en rapporteren',
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
        this.questionGenerator();
    }
    questionGenerator() {
        this.correctAnswer = this.correctAnswers[this.randomIndexArray[this.index]];
        this.currentQuestion = this.question[this.randomIndexArray[this.index]];
        this.currentAnswers = [];
        this.currentAnswers.push(this.answerOne[this.randomIndexArray[this.index]], this.answerTwo[this.randomIndexArray[this.index]], this.answerThree[this.randomIndexArray[this.index]], this.answerFour[this.randomIndexArray[this.index]]);
        if (this.index !== this.question.length + 1) {
            this.index += 1;
        }
        this.circleGenerator();
    }
    stopMusic() {
        this.bgm.pause();
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
                    console.log('correct');
                    this.questionGenerator();
                    player.setXPos(this.canvas);
                    player.setYPos(this.canvas);
                    this.points = 10;
                    this.questionDone = true;
                    if (this.index > this.question.length) {
                        this.isCompleted = true;
                        this.bgm.pause();
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
            this.circles.push(new Circle(index, (this.canvas.width / 4) + (index * 400), this.canvas.height / 4));
        });
    }
    draw() {
        this.canvas.style.backgroundImage = "url('./assets/images/backgrounds/background1.png')";
        this.canvas.style.backgroundSize = 'cover';
        this.ctx.beginPath();
        this.ctx.rect(0, this.canvas.height / 1.35, this.canvas.width, 350);
        this.ctx.fillStyle = 'lightblue';
        this.ctx.fill();
        this.ctx.stroke();
        this.writeTextToCanvas(`${this.currentQuestion}`, 40, this.canvas.width / 2, this.canvas.height / 1.25);
        let spacing = 0;
        this.currentAnswers.forEach((answer, index) => {
            spacing += 40;
            this.writeTextToCanvas(`${index + 1} ${answer}`, 40, this.canvas.width / 2, this.canvas.height / 1.20 + spacing);
            this.circles.forEach((circle) => {
                circle.draw(this.ctx);
            });
        });
    }
}
//# sourceMappingURL=Bossfight.js.map