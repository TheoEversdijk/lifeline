export default class ShopItem {
  private shopItems: string[];

  constructor(shopItems: string[]) {
    this.shopItems = shopItems;
    this.shopItems = ["url('./assets/images/fish/male/big_player.png')", "url('./assets/images/fish/female/big_player.png')", "url('./assets/images/fish/skins/goldfish.png')"];
  }
}
