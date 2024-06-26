import Phaser from "phaser";

export class Credits extends Phaser.Scene {
    
    constructor() {
        super("credits");
    }

    preload() {

     }

    create() {
        this.cameras.main.setBackgroundColor(0x141413);
        const center_x: number = this.game.canvas.width / 2;
        const center_y: number = this.game.canvas.height / 2;

        const credits: Phaser.GameObjects.Text = this.add.text(center_x, center_y - 200, "Credits", {
            fontFamily: "Chakra Petch",
            color: "#D2C32D",
            fontSize: "55px",
        }).setOrigin(0.5);
        
        const back_button = this.add.text(center_x, center_y + 300, "←", {
            fontFamily: "Chakra Petch",
            color: "#D2C32D",
            fontSize: "85px",
        }).setOrigin(0.5);

        back_button.setInteractive();

        back_button.on("pointerover", () => {
            back_button.setColor("#BF9740");
        });

        back_button.on("pointerout", () => {
            back_button.setColor("#D2C32D");
        });

        back_button.on("pointerdown", () => {
            this.scene.start("menu");
        });
    }

    update() {}
}