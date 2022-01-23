export default class BGM {
    bgm1;
    bgm2;
    easterEgg;
    mainMenuTheme;
    levelselect;
    bosslevel;
    constructor() {
        this.bgm1 = new Audio('./assets/audio/music/knights.mp3');
        this.bgm2 = new Audio('./assets/audio/music/forest.mp3');
        this.easterEgg = new Audio('./assets/audio/music/easteregg.mp3');
        this.levelselect = new Audio('./assets/audio/music/worldmap.mp3');
        this.mainMenuTheme = new Audio('../assets/audio/music/mainmenu.mp3');
        this.bosslevel = new Audio('../assets/audio/music/bossfight.mp3');
    }
    playbgm1() {
        this.bgm1.load();
        this.bgm1.play();
        this.bgm1.loop = true;
        this.bgm1.volume = 0.5;
    }
    playbgm2() {
        this.bgm2.load();
        this.bgm2.play();
        this.bgm2.loop = true;
        this.bgm2.volume = 0.5;
    }
    bossfight() {
        this.bosslevel.load();
        this.bosslevel.play();
        this.bosslevel.loop = true;
        this.bosslevel.volume = 0.5;
    }
    levelSelect() {
        this.levelselect.load();
        this.levelselect.play();
        this.levelselect.loop = true;
        this.levelselect.volume = 0.5;
    }
    easterEggMusic() {
        this.easterEgg.load();
        this.easterEgg.play();
        this.easterEgg.loop = true;
        this.easterEgg.volume = 0.5;
    }
    mainMenu() {
        this.mainMenuTheme.load();
        this.mainMenuTheme.play();
        this.mainMenuTheme.loop = true;
        this.mainMenuTheme.volume = 0.5;
    }
    stopMusic(player) {
        if (player.getPoints() >= 400) {
            this.easterEgg.pause();
        }
        else {
            this.bgm1.pause();
            this.bgm2.pause();
            this.bosslevel.pause();
        }
    }
    stopLevelSelect() {
        this.levelselect.pause();
    }
}
//# sourceMappingURL=BGM.js.map