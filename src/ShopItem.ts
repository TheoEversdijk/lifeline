export default class ShopItem {
  private image: HTMLImageElement;

  private description: string;

  private price: number;

  public constructor(
    image: HTMLImageElement,
    description: string,
    price: number,
  ) {
    this.image = image;
    this.description = description;
    this.price = price;
  }
}
