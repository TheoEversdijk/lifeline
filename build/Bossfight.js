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
        this.question = ['Wat moet je doen als een vreemdeling je vraagt een foto van jezelf naar hem of haar te sturen?',
            'Wat is het allerbelangrijkste dat je jezelf moet afvragen voordat je iets online zet?',
            'Wat doe je als iemand gecyberpest wordt?',
            'Je ontvangt een nieuw vriendschapsverzoek van een persoon die geen profielfoto heeft, maar je herkent de naam als iemand uit je klas. wat doe je?',
            'Je krijgt een eng berichtje via WhatsApp, volgens dit bericht moet je het doorsturen aan 10 anderen want anders gebeurt er iets ergs.',
            'Een vriend heeft een video van jou op het internet gezet, jij vindt dit niet leuk. Je vriend wil de video niet verwijderen. Wat doe je nu?',
            'Een vriend van vroeger stuurt je een berichtje: "Heb jij deze gekke foto van jou gezien? Klik ff op deze link!" Wat doe je?',
            'Wat doe je als er een ongepaste foto op Instagram naar jou wordt gestuurd?',
            'Je moet een wachtwoord maken voor een belangrijke website. Wat is een goed wachtwoord?',
            'Je vriend vertelt je dat die online met iemand praat en dat ze hem in het weekend gaat ontmoeten, wat moet je doen?',
            'Je bent op een spelletjeswebsite en er wordt je gevraagd om een link te downloaden voordat je kan spelen. Wat moet je doen?',
            'Een van je vrienden wil een nieuwe challenge nadoen en filmen voor een tiktok, deze challenge ziet er gevaarlijk uit. Wat doe je?',
        ];
        this.answerOne = ['Negeren.',
            'Vind ik het goed dat iedereen deze post kan zien?',
            'Ik wacht het af en kijk wat er gebeurt.',
            'Vraag voordat je het vriendschapsverzoek accepteert persoonlijk aan je klasgenoot of hij dat is',
            'Je laat het aan je kleine broertje of zusje zien.',
            'Je blijft je vriend vragen om het te verwijderen tot hij het doet',
            'Vragen of deze link wel echt is.',
            'Verwijderen en melden.',
            'Je volledige naam.',
            'Met je vriend meegaan',
            'Laat de link aan een volwassene zien en vraag of het veilig is',
            'Je doet de challenge om hopelijk likes te krijgen',
        ];
        this.answerTwo = ['Stuur de foto, ook al is het een vreemde.',
            'Zal dit me populair maken?',
            'Ik ga naar de politie en doe aangifte.',
            'Je accepteert het vriendschapsverzoek en je stuurt een berichtje om te vragen of het je vriend is.',
            'Je stuurt het meteen door aan 10 vrienden.',
            'Je praat met je ouders of leerkracht en zegt waarom je het niet leuk vindt.',
            'Op de link klikken.',
            'Doorsturen naar vrienden.',
            'Een bijnaam die je vrienden je geven.',
            'Je vriend alleen laten gaan.',
            'Download het zodat je kan spelen.',
            'Leg uit waarom je denkt dat dit geen goed idee is en meld het aan je ouders of leerkracht.',
        ];
        this.answerThree = ['Stuur de foto als je denkt dat je hem kent.',
            'Zullen mijn vrienden dit grappig vinden?',
            'Ik probeer diegene te helpen (en ik meld het).',
            'Je accepteert het vriendschapsverzoek meteen',
            'Je wilt niemand bang maken en je verwijdert het.',
            'Je laat het, je kunt er verder niets aan doen',
            'Een bericht naar hem sturen via een andere app.',
            'Op je instagram reposten.',
            'Een deel van je naam en een nummer (mario123)',
            'Meteen aan een volwassene vertellen.',
            'Vraag aan je vriend om het eerst te downloaden en testen.',
            'Daag ze uit om iets nog gevaarlijker te doen voor meer views.',
        ];
        this.answerFour = ["Stuur geen foto's en vertel het meteen aan een volwassene.",
            'Heb ik mijn spelling gecontroleerd?',
            'Ik pest mee.',
            'Je stuurt hem een bericht om te vragen wie hij is.',
            'Je stuurt een bericht terug naar die persoon.',
            'Je plaats een grappige foto van je vriend om hem terug te pakken.',
            'Hem meteen blokkeren.',
            'Niks.',
            'Een woord met hoofdletters , cijfers en leestekens (bijvoorbeeld @,!.)',
            'Vertellen aan je andere vrienden.',
            'Je test het spel op iemand anders zijn computer.',
            'Je helpt de video op te nemen maar alleen als je vriend al de gevaarlijke dingen doet.',
        ];
        this.correctAnswers = ["Stuur geen foto's en vertel het meteen aan een volwassene.",
            'Vind ik het goed dat iedereen deze post kan zien?',
            'Ik probeer diegene te helpen (en ik meld het).',
            'Vraag voordat je het vriendschapsverzoek accepteert persoonlijk aan je klasgenoot of hij dat is.',
            'Je wilt niemand bang maken en je verwijdert het.',
            'Je praat met je ouders of leerkracht en zegt waarom je het niet leuk vindt.',
            'Een bericht naar hem sturen via een andere app.',
            'Verwijderen en melden.',
            'Een woord met hoofdletters , cijfers en leestekens (bijvoorbeeld @,!.)',
            'Meteen aan een volwassene vertellen.',
            'Laat de link aan een volwassene zien en vraag of het veilig is.',
            'Leg uit waarom je denkt dat dit geen goed idee is en meld het aan je ouders of leerkracht.',
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
                        this.bossHealth -= 50;
                    }
                    console.log('correct');
                    this.questionGenerator();
                    player.setXPos(this.canvas);
                    player.setYPos(this.canvas);
                    player.addPoints(10);
                    this.questionDone = true;
                    if (this.index > this.randomIndexArray.length) {
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
        if (this.checkpointIndex === 4) {
            this.canvas.style.backgroundImage = "url('./assets/images/backgrounds/background5.png')";
        }
        else {
            this.canvas.style.backgroundImage = "url('./assets/images/backgrounds/background1.png')";
        }
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
            this.writeTextToCanvas(`Haai HP: ${this.bossHealth}`, 25, this.canvas.width / 16, 50);
        }
    }
}
//# sourceMappingURL=Bossfight.js.map