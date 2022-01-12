// import Bossfight from './Bossfight.js';

// export default class Questions extends Bossfight {
//   protected question: string[];

//   protected correctAnswers: string[];

//   protected answerOne: string[];

//   protected answerTwo: string[];

//   protected answerThree: string[];

//   protected answerFour: string[];

//   protected currentAnswers: string[];

//   protected correctAnswer: string;

//   protected currentQuestion: string;

//   protected index: number;

//   protected randomIndexArray: number[];

//   protected indexArray: number[];

//   /**
//    * Constructs questions
//    *
//    * @param canvas canvas
//    */
//   public constructor(canvas: HTMLCanvasElement) {
//     super(canvas);
//     this.question = ['Wie kan je niet vertrouwen?',
//       'Wat doe je al je door een oplichter gebeld wordt?',
//       'Wat doe je als iemand gecyberpest wordt?',
//       'Accepteer je iedere volger op Instagram?',
//       'Je krijgt een eng berichtje via WhatsApp, volgens dit bericht moet je het doorsturen aan 10 anderen want anders gebeurt er iets ergs.',
//       'Sommige mensen sturen schokkende fotos via WhatsApp. Hoe check je of deze afbeeldingen echt zijn?',
//       'Een vriend van vroeger stuurt je een berichtje: "Heb jij deze gekke foto van jou gezien? Klik ff op deze link!" Wat doe je?',
//       'Wat doe je als er een ongepaste foto op Instagram naar jou wordt gestuurd?',
//     ];
//     this.answerOne = ['Je ouders.',
//       'Ophangen en melden aan de politie.',
//       'Ik wacht het af en kijk wat er gebeurt.',
//       'Nee, er zijn ook rare mensen met neppe accounts.',
//       'Je laat het aan je kleine broertje of zusje zien.',
//       'Het is niet te controleren.',
//       'Vragen of deze link wel echt is.',
//       'Verwijderen en melden.',
//     ];
//     this.answerTwo = ['Je leerkrachten.',
//       'De instructies van de oplichter volgen.',
//       'Ik ga naar de politie en doe aangifte.',
//       'Tuurlijk wel, hoe meer volgers hoe beter!',
//       'Je stuurt het meteen door aan 10 vrienden.',
//       'Uploaden naar reverse image search van Google.',
//       'Op de link klikken.',
//       'Doorsturen naar vrienden.',
//     ];
//     this.answerThree = ['Je vrienden.',
//       'Je ouders om hulp vragen.',
//       'Ik probeer diegene te helpen (en ik meld het).',
//       'Ja, nieuwe mensen ontmoeten is goed.',
//       'Je wilt niemand bang maken en je verwijdert het.',
//       'Via WhatsApp groepen vragen of iemand het weet.',
//       'Een bericht naar hem sturen via een andere app.',
//       'Op je instagram reposten.',
//     ];
//     this.answerFour = ['Vreemdelingen.',
//       'Ophangen.',
//       'Ik pest mee.',
//       'Nee, je moet nooit volgverzoeken accepteren.',
//       'Je stuurt een bericht terug naar die persoon.',
//       'Niks is te geloven wat je op WhatsApp leest.',
//       'Hem meteen blokkeren.',
//       'Niks.',
//     ];
//     this.correctAnswers = ['Vreemdelingen.',
//       'Ophangen en melden aan de politie.',
//       'Ik probeer diegene te helpen (en ik meld het).',
//       'Nee, er zijn ook rare mensen met neppe accounts.',
//       'Je wilt niemand bang maken en je verwijdert het.',
//       'Uploaden naar reverse image search van Google.',
//       'Een bericht naar hem sturen via een andere app.',
//       'Verwijderen en melden.',
//     ];
//     this.currentAnswers = [];
//     this.index = 0;
//     this.indexArray = [0, 1, 2, 3, 4, 5, 6, 7];
//     this.randomIndexArray = [];
//     let i = this.indexArray.length;
//     let j = 0;
//     // eslint-disable-next-line no-plusplus
//     while (i--) {
//       j = Math.floor(Math.random() * (i + 1));
//       this.randomIndexArray.push(this.indexArray[j]);
//       this.indexArray.splice(j, 1);
//     }
//     this.questionGenerator();
//   }

//   /**
//    * Generates questions
//    */
//   public questionGenerator(): void {
//     this.correctAnswer = this.correctAnswers[this.randomIndexArray[this.index]];
//     this.currentQuestion = this.question[this.randomIndexArray[this.index]];

//     this.currentAnswers = [];
//     this.currentAnswers.push(
//       this.answerOne[this.randomIndexArray[this.index]],
//       this.answerTwo[this.randomIndexArray[this.index]],
//       this.answerThree[this.randomIndexArray[this.index]],
//       this.answerFour[this.randomIndexArray[this.index]],
//     );
//     if (this.index !== this.question.length + 1) {
//       this.index += 1;
//     }
//     console.log(this.currentAnswers);
//     console.log(this.correctAnswer);
//   }
// }
