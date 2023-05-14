class player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setCollideWorldBounds(true);
        this.setImmovable();
        this.setMaxVelocity(300,300);
        this.setBlendMode('SCREEN');
        this.canDoubleJump = true;
        this.jump = scene.sound.add('jump');
        this.landing = scene.sound.add('landing');
    }

    update() {
        if(this.y==game.config.height && this.canDoubleJump == false){
            this.landing.play();
            this.canDoubleJump = true;
        }
        if(this.y == game.config.height && SPACE.isDown){
            this.jump.play();
            this.body.velocity.y -= 400;
        }
        else if(this.y != game.config.height && keyF.isDown && this.canDoubleJump){
            this.body.velocity.y = -200;
            this.canDoubleJump = false;
        }
        if(keyLEFT.isDown){
            this.body.velocity.x -= 75;

        }
        else if(keyRIGHT.isDown){
            this.body.velocity.x += 75;
        }
        else{
            this.body.velocity.x = 0;
        }


    }

    reset() {

        this.x = game.config.width;
    }

}