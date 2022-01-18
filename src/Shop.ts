import ShopItem from './ShopItem.js';

export default class Shop {
  private items: ShopItem[];

  private buttonImage: HTMLImageElement;

  private money: number;

  /**
   * The game shop
   * @param items Purchaseable items
   * @param buttonImage 
   * @param money 
   */
  public constructor(items: ShopItem[], buttonImage: HTMLImageElement, money: number) {
    this.items = items;
    this.buttonImage = buttonImage;
    this.money = money;
  }
}
