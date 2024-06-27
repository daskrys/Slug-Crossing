import Phaser from "phaser";

export class Menu extends Phaser.Scene {

    constructor() {
        super("menu");
    }

    preload() {
        this.load.image("title", "assets/slug-crossing.png");
        this.load.image("menu-bg", "assets/background.png");
    }

    create() {
        
        const center_x: number = this.game.canvas.width / 2;
        const center_y: number = this.game.canvas.height / 2;
        const background: Phaser.GameObjects.Image = this.add.image(center_x, center_y, "menu-bg").setScale(1.20);
        const title_png: Phaser.GameObjects.Image = this.add.image(center_x, center_y - 200, "title").setScale(0.5);

        this.tweens.add({
            targets: title_png,
            y: center_y - 150,
            duration: 4000,
            ease: "Power2",
            repeat: -1,
            yoyo: true,
        });

        // main menu buttons
        const play_button: Phaser.GameObjects.Text = this.add.text(center_x, center_y + 130, "play", {
            fontFamily: "Chakra Petch",
            color: "#D2C32D",
            fontSize: "55px",
        }).setOrigin(0.5);

        play_button.setInteractive();

        play_button.on("pointerover", () => {
            play_button.setColor("#BF9740");
        });

        play_button.on("pointerout", () => {
            play_button.setColor("#D2C32D");
        });

        play_button.on("pointerdown", () => {
            this.scene.start("play");
        });

        const settings_button: Phaser.GameObjects.Text = this.add.text(center_x, center_y + 200, "settings", {
            fontFamily: "Chakra Petch",
            color: "#D2C32D",
            fontSize: "55px",
        }).setOrigin(0.5);

        settings_button.setInteractive();

        settings_button.on("pointerover", () => {
            settings_button.setColor("#BF9740");
        });

        settings_button.on("pointerout", () => {
            settings_button.setColor("#D2C32D");
        });

        settings_button.on("pointerdown", () => {
            this.scene.start("settings");
        });

        const credits_button: Phaser.GameObjects.Text = this.add.text(center_x, center_y + 270, "credits", {
            fontFamily: "Chakra Petch",
            color: "#D2C32D",
            fontSize: "55px",
        }).setOrigin(0.5);

        credits_button.setInteractive();

        credits_button.on("pointerover", () => {
            credits_button.setColor("#BF9740");
        });

        credits_button.on("pointerout", () => {
            credits_button.setColor("#D2C32D");
        });

        credits_button.on("pointerdown", () => {
            this.scene.start("credits");
        });
    }

    update() {}
}
