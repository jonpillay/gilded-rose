class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class ConjuredItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
    this.conjured = true;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name == 'Sulfuras, Hand of Ragnaros') {
          continue
      } else if (this.items[i].name == 'Aged Brie') {
        if (this.items[i].quality < 50) {
          this.items[i].quality += 1
      }} else if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].sellIn <= 0) {
          this.items[i].quality = 0
        } else if (5 < this.items[i].sellIn && this.items[i].sellIn <= 10) {
          if (this.items[i].quality < 48) {
            this.items[i].quality += 2;
          } else {
            this.items[i].quality = 50
          }
        } else if (this.items[i].sellIn <= 5) {
          if (this.items[i].quality < 47) {
            this.items[i].quality += 3;
          } else {
            this.items[i].quality = 50
          }
        } else {
          this.items[i].quality += 1;
      }} else {
        if (this.items[i].quality > 0) {
          this.items[i].quality -= 1;
          if (this.items[i].conjured == true) {
            this.items[i].quality -= 1;
          }
        }
        if (this.items[i].sellIn < 0 && this.items[i].quality > 0) {
          this.items[i].quality -= 1
          if (this.items[i].conjured == true) {
            this.items[i].quality -= 1;
          }
        }
      }
      this.items[i].sellIn -= 1
    }
    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
  ConjuredItem
}
