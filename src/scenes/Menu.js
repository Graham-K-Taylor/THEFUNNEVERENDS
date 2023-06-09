class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
    preload() {
        // load audio / any visuals as needed
        this.load.audio('jump', 'assets/jump.wav');
        this.load.audio('landing', 'assets/landing.wav');
        this.load.audio('zombie', 'assets/zombie.wav');
        this.load.audio('bgm', 'assets/creepy.mp3');
    }
    create() {
        if(game.highScore === undefined){
            game.highScore = 0;
        }
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding,'ENDLESS RUNNER', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2,'SUFFER', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding,'<- to move on, -> for credits.', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + game.config.height/2.2,'Longest Denial:'+ game.highScore, menuConfig).setOrigin(0.5);
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    }
    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          // easy mode
          game.settings = {
            testparameter : 1 
          }
          this.scene.start('explanationScene');    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            // easy mode
            this.scene.start('creditsScene');    
          }
    }
}