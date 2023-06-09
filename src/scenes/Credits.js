class Credits extends Phaser.Scene {
    constructor() {
        super("creditsScene");
    }
    preload() {
        // load audio / any visuals as needed
    }
    create(){
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '15px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding,'CREDITS', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2,'All assets are solely my failure.', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding,'SFX are from freesound.org.\nMusic by: https://www.bensound.com/free-music-for-videos\nLicense code: 519YFZXWRZSHH0PO', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + game.config.height/2.2,'Press <- to go back to menu.', menuConfig).setOrigin(0.5);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          this.scene.start('menuScene');    
        }
    }
}