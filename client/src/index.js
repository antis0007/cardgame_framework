import Phaser from 'phaser';
import Game from './scenes/game.js';

var newconfig = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 800,
        height: 600
    },
    scene: [
        Game
    ]
};
export default {newconfig};

const game = new Phaser.Game(newconfig);
