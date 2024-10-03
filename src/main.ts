import Phaser from "phaser";
import WebFont from "webfontloader";

// Loading Scenes
import { Menu } from "./scenes/menu.ts";
import { Play } from "./scenes/play.ts";
import { Settings } from "./scenes/settings.ts";
import { Credits } from "./scenes/credits.ts";

let config = {
  type: Phaser.CANVAS,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 750,
    height: 1280
  },
  scene: [Play],
  //scene: [Menu, Play, Settings, Credits],
};

export const SlugCrossing = new Phaser.Game(config);

WebFont.load({
  google: {
    families: ['Chakra Petch'],
  },
  active: function() {
    SlugCrossing.scene.start("Menu");
  },
});