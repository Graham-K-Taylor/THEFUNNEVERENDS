class HAND extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setAccelerationY(0);
        this.setBlendMode('SCREEN');
    }

    update(){
        this.setVelocityX(-50*this.scene.speed);
        this.y = game.config.height;
        if(this.x < -this.width) {
            this.destroy();
        }
    }
}