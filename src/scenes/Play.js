class Play extends Phaser.Scene {
    constructor() {
      super("playScene");
    }
    preload(){
      this.load.image('player', './assets/player.png');
      this.load.image('playercrouchin', './assets/playercrouchin.png');
      this.load.image('HAND', './assets/HAND.png');
      this.load.image('badbgplzchange', './assets/badbgplzchange.png');
      // load spritesheet (for animations, implement tomorrow!)
      // this.load.spritesheet('explosion', './assets/explosion.png', {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9});
    }

    create(){
      this.bgm = this.sound.add('bgm', { 
        mute: false,
        volume: .25,
        rate: 1,
        loop: true 
      });
      this.bgm.play();
      this.bg = this.add.tileSprite(0, 0, 640, 480, 'badbgplzchange').setOrigin(0, 0);
      this.player = new player(this, game.config.width/2, game.config.height, 'player').setOrigin(1, 1);
      this.speed = 1;
      this.playerAlive = true;
      keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
      SPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
      keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
      keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
      keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
      this.startTime = new Date();
      this.ObstacleTimer = new Date();
      this.obstaclesGroup = this.add.group({
        runChildUpdate: true
    });
      this.timeVariance = Phaser.Math.Between(1000,5000);
      this.TimeConfig = {
        fontFamily: 'Courier',
        fontSize: '28px',
        backgroundColor: '#F3B141',
        color: '#843605',
        align: 'center',
        padding: {
            top: 5,
            bottom: 5,
        },
        fixedWidth: 200
      }
      this.TimeConfig2 = {
        fontFamily: 'Courier',
        fontSize: '28px',
        backgroundColor: '#F3B141',
        color: '#843605',
        align: 'center',
        padding: {
            top: 5,
            bottom: 5,
        },
        fixedWidth: 400
      }
    this.timeLeft = this.add.text(borderUISize + borderPadding + 200, borderUISize + borderPadding*2, this.clock, this.TimeConfig);
    }
    addObstacle() {
      /*let ObstacleType =  (Phaser.Math.Between(1000, 5000))%3;
      if(){}
      else if(){}
      else{}*/
      let obstacle = new HAND(this, game.config.width, game.config.height, 'HAND').setOrigin(1,1);
      this.sound.play('zombie');
      this.obstaclesGroup.add(obstacle);
    }

    update(){
      
      if(this.playerAlive){
        
        let currentTime = new Date();
        this.currTime = currentTime;
        this.timeLeft.text = "Denial: " + Phaser.Math.RoundTo((currentTime - this.startTime)/1000,0);
        if(+currentTime + -this.ObstacleTimer > this.timeVariance){
          this.addObstacle();
          this.timeVariance = Phaser.Math.Between(400,5000-this.speed*10);
          this.ObstacleTimer = new Date();
        
        }
        this.bg.tilePositionX += this.speed;
        this.speed += .001
        this.player.update();
        this.physics.world.collide(this.player, this.obstaclesGroup, this.KILL, null, this);
      }
    }
    KILL(){
      this.bgm.stop();
      this.playerAlive = false;
      this.player.setCollideWorldBounds(false);
      if(Phaser.Math.RoundTo((this.currTime - this.startTime)/1000,0) > game.highScore){
        game.highScore = Phaser.Math.RoundTo((this.currTime - this.startTime)/1000,0);
      }
      this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER', this.TimeConfig).setOrigin(0.5);
      this.add.text(game.config.width/2, game.config.height/2 + 96, 'Longest Denial:' + game.highScore, this.TimeConfig2).setOrigin(0.5);
      setTimeout(this.gameOver(this), 3000);
    }

    gameOver(Sceen){
      Sceen.scene.start("menuScene");
    }
}