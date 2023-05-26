class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class ConjuredItem extends Item {
  }

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    this.items.forEach(item => {
      if (item.name == 'Sulfuras, Hand of Ragnaros') {
          return;
      } else if (item.name == 'Aged Brie') {
        if (item.quality < 50) {
          item.quality += 1
      }} else if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
        if (item.sellIn <= 0) {
          item.quality = 0
        } else if (5 < item.sellIn && item.sellIn <= 10) {
          if (item.quality < 48) {
            item.quality += 2;
          } else {
            item.quality = 50
          }
        } else if (item.sellIn <= 5) {
          if (item.quality < 47) {
            item.quality += 3;
          } else {
            item.quality = 50
          }
        } else {
          item.quality += 1;
      }} else {
        if (item.quality > 0) {
          item.quality -= 1;
          if (item instanceof ConjuredItem && item.quality > 0) {
            item.quality -= 1;
          }
        }
        if (item.sellIn < 0 && item.quality > 0) {
          item.quality -= 1
          if (item instanceof ConjuredItem && item.quality > 0) {
            item.quality -= 1;
          }
        }
      }
      item.sellIn -= 1
    })
    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
  ConjuredItem
}