console.log(" file game.js berhasil dimuat");

let player;

const config = {
    type: Phaser.AUTO,

    parent: "game-container",
    width: 800,
    height: 600,

    backgroundColor: "#2d6a4f",

    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

if (typeof Phaser !== "undefined") {
    console.log("Phaser berhasil dimuat");
} else {
    console.error("Phaser gagal dimuat");
}

function preload() {
    this.load.image("grass", "assets/images/grass.png");

    this.load.image("player", "assets/images/player.png");
}

function create() {
    const map = this.add.image(0,0, "grass");
    
    map.setOrigin(0,0);

    map.setDisplaySize(800, 600);

    player = this.physics.add.sprite(400, 300, "player");

    player.setDisplaySize(64, 64);

    console.log("Area Map dan Karakter berhasil dibuat");
}

function update() {
    
}