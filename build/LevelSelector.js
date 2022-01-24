import BGM from './BGM.js';
import Bossfight from './Bossfight.js';
import Checkpoint from './Checkpoint.js';
import Email from './Email.js';
export default class LevelSelector {
    canvas;
    levels;
    checkpoints;
    currentLevel;
    levelType;
    completion;
    levelStatus;
    currentIndex;
    bgm;
    constructor(canvas) {
        this.canvas = canvas;
        this.bgm = new BGM();
        this.bgm.levelSelect();
        this.levelStatus = false;
        this.checkpoints = [];
        this.levels = [];
        for (let index = 0; index <= 4; index++) {
            let xPos;
            let yPos;
            if (index === 0) {
                xPos = canvas.width / 5.2;
                yPos = canvas.height / 1.2;
            }
            if (index === 1) {
                xPos = canvas.width / 2.2;
                yPos = canvas.height / 1.2;
            }
            if (index === 2) {
                xPos = canvas.width / 1.67;
                yPos = canvas.height / 1.7;
            }
            if (index === 3) {
                xPos = canvas.width / 1.3;
                yPos = canvas.height / 2.95;
            }
            if (index === 4) {
                xPos = canvas.width / 1.35;
                yPos = canvas.height / 7.5;
            }
            this.checkpoints.push(new Checkpoint(index, xPos, yPos));
        }
        this.checkpoints.forEach((element, index) => {
            if (index % 2 === 0) {
                this.levels.push(new Bossfight(this.canvas, index));
            }
            else {
                this.levels.push(new Email(this.canvas));
            }
        });
    }
    select(player) {
        this.checkpoints.forEach((checkpoint) => {
            if (player.collidesWithCheckpoint(checkpoint)) {
                this.currentIndex = checkpoint.getIndex();
            }
        });
        this.levels.forEach((level, index) => {
            if (this.currentIndex === index) {
                this.currentLevel = level;
                if (index % 2 === 0) {
                    this.levelType = 'Bossfight';
                }
                else {
                    this.levelType = 'Email';
                }
                this.setLevelStatus(true);
                player.setXPos(this.canvas);
                this.bgm.stopLevelSelect();
                if (player.getPoints() >= 400) {
                    this.bgm.easterEggMusic();
                }
                else if (this.currentIndex % 2 !== 0) {
                    this.bgm.playbgm1();
                }
                else if (this.currentIndex % 2 === 0) {
                    if (this.currentIndex === 4) {
                        this.bgm.bossfight();
                    }
                    else {
                        this.bgm.playbgm2();
                    }
                }
            }
        });
    }
    levelDrawer(player, ctx) {
        this.currentLevel.draw(player, ctx);
    }
    answerSelector(player, ctx) {
        this.currentLevel.answerSelect(player);
        if (this.currentLevel.getCompletion() === true) {
            this.isCompleted(ctx);
            this.winner(player);
        }
    }
    winner(player) {
        if (player.getlvlComplete() === false) {
            player.lvlComplete();
            this.bgm.stopMusic(player);
            player.addCoins(this.currentLevel.getCoins());
            const winner = new Audio('../assets/audio/sfx/gamewin.wav');
            winner.load();
            winner.volume = 0.5;
            winner.play();
            setTimeout(() => {
                winner.pause();
                this.checkpoints[this.currentIndex].changeColor();
                this.resetLevel();
                player.resetCompletion();
                this.bgm.levelSelect();
                player.setHP();
            }, 4000);
        }
    }
    loser(player) {
        if (player.getDeath() === false) {
            player.death(true);
            this.bgm.stopMusic(player);
            const death = new Audio('../assets/audio/sfx/gamelose.wav');
            death.load();
            death.play();
            death.volume = 0.5;
            setTimeout(() => {
                this.resetLevel();
                this.bgm.levelSelect();
                player.setHP();
                player.death(false);
            }, 4000);
        }
    }
    isCompleted(ctx) {
        this.draw(ctx);
        this.setCompletion(true);
    }
    resetLevel() {
        this.levelStatus = false;
        this.currentLevel.reset();
        this.setCompletion(false);
        this.currentLevel.resetIndex();
    }
    getLevelStatus() {
        return this.levelStatus;
    }
    setLevelStatus(status) {
        this.levelStatus = status;
    }
    setCompletion(status) {
        this.completion = status;
    }
    getCompletion() {
        return this.completion;
    }
    draw(ctx) {
        this.canvas.style.backgroundImage = "url('../assets/images/backgrounds/worldmap_concept.png')";
        this.canvas.style.backgroundRepeat = 'no-repeat';
        this.canvas.style.backgroundSize = '1600px 900px';
        this.canvas.style.marginLeft = 'auto';
        this.canvas.style.marginRight = 'auto';
        this.checkpoints.forEach((checkpoint) => {
            checkpoint.draw(ctx);
        });
    }
}
//# sourceMappingURL=LevelSelector.js.map