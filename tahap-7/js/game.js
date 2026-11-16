console.log(" file game.js berhasil dimuat");

let player;

let cursors;

let items;

const inventory = {
    apple: 0,
    stone: 0,
    wood: 0
};

let inventoryText;

const playerSpeed = 160;

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

    this.load.image("apple", "assets/images/apple.png");
    this.load.image("stone", "assets/images/stone.png");
    this.load.image("wood", "assets/images/wood.png");
}

function create() {
    const map = this.add.image(0,0, "grass");
    
    map.setOrigin(0,0);

    map.setDisplaySize(800, 600);

    items = this.physics.add.staticGroup();

    const apple = items.create(160, 180, "apple");
    apple.setDisplaySize(40, 40);
    apple.refreshBody();
    apple.setData("itemType", "apple");

    const stone = items.create(320, 360, "stone");
    stone.setDisplaySize(40, 40);
    stone.refreshBody();
    stone.setData("itemType", "stone");

    const wood = items.create(480, 180, "wood");
    wood.setDisplaySize(40, 40);
    wood.refreshBody();
    wood.setData("itemType", "wood");
    
    const wood2 = items.create(700, 240, "wood");
    wood2.setDisplaySize(40, 40);
    wood2.refreshBody();
    wood2.setData("itemType", "wood");

    player = this.physics.add.sprite(400, 300, "player");

    player.setDisplaySize(64, 64);

    player.setCollideWorldBounds(true);

    cursors = this.input.keyboard.createCursorKeys();

    const panel  = this.add.rectangle(16, 16, 768, 64, 0x16382b);
    panel.setOrigin(0, 0);
    this.add.text(32,36,"Inventory", { fontSize: "20px", color: "#ffffff", fontFamily: "Arial" });

    this.add.image(208, 48, "apple").setDisplaySize(32, 32);
    this.add.image(400, 48, "wood").setDisplaySize(32, 32);
    this.add.image(592, 48, "stone").setDisplaySize(32, 32);

    inventoryText = {
        apple: this.add.text(232, 38, "0", { fontSize: "20px", color: "#ffffff", fontFamily: "Arial" }),
        wood: this.add.text(424, 38, "0", { fontSize: "20px", color: "#ffffff", fontFamily: "Arial" }),
        stone: this.add.text(616, 38, "0", { fontSize: "20px", color: "#ffffff", fontFamily: "Arial" })
    }

    updateInventory();

    this.physics.add.overlap(player, items, collectItem, null, this);

    console.log("Area Map dan Karakter berhasil dibuat");
}

function updateInventory() {
    inventoryText.apple.setText("Apel: " + inventory.apple);
    inventoryText.wood.setText("Kayu: " + inventory.wood);
    inventoryText.stone.setText("Batu: " + inventory.stone);
}

function collectItem(player, item) {
    if(!item.active) {
        return;
    }

    const itemType = item.getData("itemType");

    item.disableBody(true, true);

    inventory[itemType] += 1;

    updateInventory();

    console.log("Item " + itemType + " berhasil diambil. Total: " + inventory[itemType]);
}

function update() {
    player.setVelocity(0, 0);
    if (cursors.left.isDown) {
        player.setVelocityX(-playerSpeed);
    } else if (cursors.right.isDown) {
        player.setVelocityX(playerSpeed);
    } else if (cursors.up.isDown) {
        player.setVelocityY(-playerSpeed);
    } else if (cursors.down.isDown) {
        player.setVelocityY(playerSpeed);
    }   
}