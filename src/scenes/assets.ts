import Phaser from "phaser";

export class Assets extends Phaser.Scene {
    constructor(key: string) {
        super(key);
    }

    preload() {
        this.load.image("title", "assets/slug-crossing.png");
        this.load.image("menu-bg", "assets/background.png");
        this.load.image("game-bg", "assets/backg.png");
        this.load.image("audio-btn", "assets/audio.png");
        this.load.image("bird", "assets/bird.png");
        this.load.image("mean-slug", "assets/mean_slug.png");
        this.load.image("floor", "assets/ground.png");
    }
}