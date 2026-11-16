console.log(" file game.js berhasil dimuat");

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

}

function create() {
    console.log("Area Permainan berhasil dibuat");
}

function update() {
    
}