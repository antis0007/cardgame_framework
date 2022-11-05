import UI from "../components/UI";

//load config json and store it in a variable
//let config = JSON.parse(require('../../config/config.json'));
import custom_config from '../../config/config.json';
import newconfig from '../index.js'
console.log(custom_config);
console.log("TEST");



export default class Game extends Phaser.Scene {
    constructor() {
        super('Game');
    }

    preload() {
        this.load.image("background", "../assets/background.png");
        
    }

    create() {
        console.log(newconfig)
        this.background = this.add.sprite(newconfig.width / 2, newconfig.height / 2, "background");
        this.UI = new UI(this);
        this.UI.buildUI(custom_config);        
    }
    update() {

    }
}