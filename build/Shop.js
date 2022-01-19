import ShopItem from './ShopItem.js';
import Game from './Game.js';
export default class Shop {
    ctx;
    canvas;
    items;
    shopItems = ['./assets/images/fish/male/big_player.png',
        './assets/images/fish/female/big_player.png',
        './assets/images/fish/skins/goldfish.png',
        './assets/images/fish/skins/goldfish.png'];
    descriptions = ['Een item',
        'Een item',
        'Een item',
        'Een item',
    ];
    prices = [100,
        100,
        100,
        100,
    ];
    buttonImage;
    money;
    constructor(canvas, ctx) {
        this.items = [];
        this.canvas = canvas;
        this.ctx = ctx;
        this.money = 0;
        this.itemCreators();
        console.log(this.items);
    }
    itemCreators() {
        for (let i = 0; i <= this.shopItems.length; i++) {
            this.items.push(new ShopItem(Game.loadNewImage(this.shopItems[i]), this.descriptions[i], this.prices[i]));
        }
    }
    draw() {
        this.canvas.style.backgroundImage = "url('./assets/images/backgrounds/background2.png')";
        this.canvas.style.backgroundSize = 'contain';
        this.writeTextToCanvas('Test', 30, this.canvas.width / 2, this.canvas.height / 2);
    }
    writeTextToCanvas(text, fontSize = 20, xCoordinate, yCoordinate, alignment = 'center', color = 'black') {
        this.ctx.font = `${fontSize}px sans-serif`;
        this.ctx.fillStyle = color;
        this.ctx.textAlign = alignment;
        this.ctx.fillText(text, xCoordinate, yCoordinate);
    }
}
//# sourceMappingURL=Shop.js.map