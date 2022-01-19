import ShopItem from './ShopItem.js';
import Game from './Game.js';
import Player from './Player.js';

export default class Shop {
  private ctx: CanvasRenderingContext2D;

  private canvas: HTMLCanvasElement;

  private items: ShopItem[];

  private shopItems: string[] = ['./assets/images/fish/male/big_player.png',
    './assets/images/fish/female/big_player.png',
    './assets/images/fish/skins/goldfish.png',
    './assets/images/fish/skins/goldfish.png'];

  private descriptions: string[] = ['Een item',
    'Een item',
    'Een item',
    'Een item',
  ];

  private prices: number[] = [100,
    100,
    100,
    100,
  ];

  private buttonImage: HTMLImageElement;

  private money: number;

  /**
   * The game shop
   *
   * @param canvas Canvas
   * @param ctx Canvas renderer
   * @param money geld
   */
  public constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.items = [];
    this.canvas = canvas;
    this.ctx = ctx;
    // this.buttonImage = buttonImage;
    this.money = 0;
    this.itemCreators();
    console.log(this.items);
  }

  /**
   * Creates items
   */
  public itemCreators(): void {
    for (let i = 0; i <= this.shopItems.length; i++) {
      this.items.push(
        new ShopItem(
          Game.loadNewImage(this.shopItems[i]),
          this.descriptions[i],
          this.prices[i],
        ),
      );
    }
  }

  public draw(): void {
    this.canvas.style.backgroundImage = "url('./assets/images/backgrounds/background2.png')";
    this.canvas.style.backgroundSize = 'contain';
    this.writeTextToCanvas(
      'Test',
      30,
      this.canvas.width / 2,
      this.canvas.height / 2,
    );
  }

  /**
   * Writes text to the canvas
   *
   * @param text - Text to write
   * @param fontSize - Font size in pixels
   * @param xCoordinate - Horizontal coordinate in pixels
   * @param yCoordinate - Vertical coordinate in pixels
   * @param alignment - Where to align the text
   * @param color - The color of the text
   */
  public writeTextToCanvas(
    text: string,
    fontSize: number = 20,
    xCoordinate: number,
    yCoordinate: number,
    alignment: CanvasTextAlign = 'center',
    color: string = 'black',
  ): void {
    this.ctx.font = `${fontSize}px sans-serif`;
    this.ctx.fillStyle = color;
    this.ctx.textAlign = alignment;
    this.ctx.fillText(text, xCoordinate, yCoordinate);
  }
}
