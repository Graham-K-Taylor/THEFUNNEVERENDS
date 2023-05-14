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
    }

    update() {
        if(this.y == game.config.height && SPACE.isDown){
            this.body.velocity.y -= 400;
            this.canDoubleJump = true;
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