import BGM from './BGM.js';
import Bossfight from './Bossfight.js';
import Checkpoint from './Checkpoint.js';
import Game from './Game.js';
import Shop from './Shop.js';
export default class LevelSelector {
    canvas;
    ctx;
    levels;
    shop;
    checkpoints;
    currentLevel;
    completion;
    levelStatus;
    currentIndex;
    bgm;
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.shop = new Shop(this.canvas, this.ctx);
        this.bgm = new BGM();
        this.bgm.mainMenu();
        this.levelStatus = false;
        this.checkpoints = [];
        this.levels = [];
        for (let index = 0; index <= 4; index++) {
            let xPos;
            let yPos;
            if (index === 0) {
                xPos = canvas.width / 5.2;
                yPos = canvas.height / 1.15;
            }
            if (index === 1) {
                xPos = canvas.width / 2.3;
                yPos = canvas.height / 1.15;
            }
            if (index === 2) {
                xPos = canvas.width / 1.8;
                yPos = canvas.height / 1.62;
            }
            if (index === 3) {
                xPos = canvas.width / 1.41;
                yPos = canvas.height / 2.68;
            }
            if (index === 4) {
                xPos = canvas.width / 1.47;
                yPos = canvas.height / 7.5;
            }
            this.checkpoints.push(new Checkpoint(index, xPos, yPos));
        }
        this.checkpoints.forEach(() => {
            this.levels.push(new Bossfight(this.canvas));
        });
    }
    select(player) {
        this.checkpoints.forEach((checkpoint) => {
            if (player.collidesWithCheckpoint(checkpoint)) {
                this.currentIndex = checkpoint.getIndex();
                console.log(this.currentIndex);
            }
        });
        this.levels.forEach((level, index) => {
            if (this.currentIndex === index) {
                this.currentLevel = level;
                this.setLevelStatus(true);
                player.setXPos(this.canvas);
                this.bgm.stopMain();
                if (player.getPoints() >= 240) {
                    this.bgm.easterEggMusic();
                }
                else {
                    this.bgm.playMusic();
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
                this.resetLevel();
                player.resetCompletion();
                this.bgm.mainMenu();
                player.setHP();
            }, 5000);
        }
    }
    loser(player) {
        if (player.getDeath() === false) {
            player.death();
            this.bgm.stopMusic(player);
            const death = new Audio('../assets/audio/sfx/gamelose.wav');
            death.load();
            death.play();
            death.volume = 0.5;
            setTimeout(() => {
                window.location.reload();
            }, 5000);
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
        this.canvas.style.backgroundSize = 'contain';
        const shoppingCart = Game.loadNewImage('./assets/images/icons/shopcart.png');
        ctx.drawImage(shoppingCart, 0, 0);
        shoppingCart.onclick = () => {
            this.shop.draw();
        };
        this.checkpoints.forEach((checkpoint) => {
            checkpoint.draw(ctx);
        });
    }
}
//# sourceMappingURL=LevelSelector.js.map