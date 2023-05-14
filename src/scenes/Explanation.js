class Explanation extends Phaser.Scene {
    constructor() {
        super("explanationScene");
    }
    preload() {
        // load audio / any visuals as needed
        this.load.image('instructions', './assets/instructions.png');
        
    }
    create(){
        this.bg = this.add.tileSprite(0, 0, 640, 480, 'instructions').setOrigin(0, 0);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    }
    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          this.scene.start('playScene');    
        }
    }
}