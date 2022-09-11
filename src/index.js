import Phaser from 'phaser'

const config = {
    // WebGL
    type: Phaser.AUTO,
    width : 800,
    height : 600,
    physics: {
        default: 'arcade'
    },
    scene: {
        preload,
        create,
    }
}

// Loading assets
function preload() {
    this.load.image('sky', 'assets/sky.png')
}


function create() {
    // x
    // y
    // key of the image
    this.add.image(config.width / 2, config.height / 2, 'sky')
}



new Phaser.Game(config)

