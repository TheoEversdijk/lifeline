export default class BGM {
    bgm;
    easterEgg;
    mainMenuTheme;
    constructor() {
        this.bgm = new Audio('./assets/audio/music/bossfight.mp3');
        this.easterEgg = new Audio('./assets/audio/music/mega.mp3');
        this.mainMenuTheme = new Audio('../assets/audio/music/mainmenu.mp3');
    }
    playMusic() {
        this.bgm.load();
        this.bgm.play();
        this.bgm.loop = true;
        this.bgm.volume = 0.5;
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
        if (player.getPoints() >= 240) {
            this.easterEgg.pause();
        }
        else {
            this.bgm.pause();
        }
    }
    stopMain() {
        this.mainMenuTheme.pause();
    }
}
//# sourceMappingURL=BGM.js.map