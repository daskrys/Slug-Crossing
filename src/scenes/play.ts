import Phaser from "phaser";
import { Assets } from "./assets";

export class Play extends Assets {

    center_x: number = 0;
    center_y: number = 0;
    
    constructor() {
        super('play');
    }

    preload() {
        super.preload();
     }

    create() {
        this.cameras.main.setBackgroundColor(0x141413);
        this.center_x = this.game.canvas.width / 2;
        this.center_y = this.game.canvas.height / 2;
        const background: Phaser.GameObjects.TileSprite = this.add.tileSprite(0, 0, this.sys.game.config.width, this.sys.game.config.height, "game-bg").setOrigin(0, 0);

        const back_button: Phaser.GameObjects.Text = this.add.text(this.center_x, this.center_y + 300, "←", {
            fontFamily: "Chakra Petch",
            color: "#D2C32D",
            fontSize: "85px",
        }).setOrigin(0.5);

        back_button.setInteractive();

        back_button.on("pointerdown", () => {
            this.scene.start("menu");
        });


    }

    update() {}
}