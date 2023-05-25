const {Shop, Item, ConjuredItem} = require("../src/gilded_rose");

describe("Gilded Rose, tests that cover original functionality of the program", function() {
  it("should initialise a shop and item and return the name 'foo'", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });
  it("returns the quality -1 after updateQuality (9)", function() {
    const gildedRose = new Shop([new Item("foo", 20, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(9);
  });
  it("returns the quality -2 after updateQuality when sell by date has passed (8)", function() {
    const gildedRose = new Shop([new Item("foo", -1, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(8);
  });
  it("should not decrease an item's quality below 0", function() {
    const gildedRose = new Shop([new Item("foo", 20, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
  it("should initialise an 'Aged Brie' item and returns the quality +1 after updateQuality (11)", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 20, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(11);
  });
  it("should initialise an 'Aged Brie' item an not increase its quality above 50", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 20, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });
  it("should initialise an 'Backstage passes to a TAFKAL80ETC concert' item and increase quality by 1", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 20, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(11);
  });
  it("should initialise an 'Backstage passes to a TAFKAL80ETC concert' item and increase quality by 2 (9 days away)", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 9, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(12);
  });
  it("should initialise an 'Backstage passes to a TAFKAL80ETC concert' item and increase quality by 3 (2 days away)", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 2, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(13);
  });
  it("should initialise an 'Backstage passes to a TAFKAL80ETC concert' item and decrease quality to 0 (sellBy/concert passed)", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
  it("should initialise an 'Sulfuras, Hand of Ragnaros' item and not decrease the quality at all (10)", function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(10);
  });
});

describe('Gilded Rose, tests for coverage that occured whilst refactoring', function() {
  it('Should not decrease the sellIn value on Sulfras when it is 0 or less', function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(0);
  })
  it("should initialise an 'Backstage passes to a TAFKAL80ETC concert' item and increase quality by 3, but stop at the quality ceiling of 50", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 2, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });
  it("should initialise an 'Backstage passes to a TAFKAL80ETC concert' item and increase quality by 2, but stop at the quality ceiling of 50", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 6, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });
  it("should initialise an 'Backstage passes to a TAFKAL80ETC concert' item and increase correctly over three updateQuality calls (with differing values)", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 11, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(31);
    const items2 = gildedRose.updateQuality();
    expect(items2[0].quality).toBe(33);
    const items3 = gildedRose.updateQuality();
    expect(items3[0].quality).toBe(35);
    const items4 = gildedRose.updateQuality();
    expect(items4[0].quality).toBe(37);
    const items5 = gildedRose.updateQuality();
    expect(items5[0].quality).toBe(39);
    const items6 = gildedRose.updateQuality();
    expect(items6[0].quality).toBe(41);
    // sellIn should now be 5 - quality should increase by 3
    const items7 = gildedRose.updateQuality();
    expect(items7[0].quality).toBe(44);
  });
})

describe("Gilded Rose, tests for the addition of the ConjuredItem class", function() {
  it("should reduce 2 quality points for a ConjuredItem who hasn't passed its sellIn date", function() {
    const gildedRose = new Shop([new ConjuredItem("Book", 10, 20)])
    const items = gildedRose.updateQuality()
    expect(items[0].quality).toBe(18)
  })
  it("should resuce 4 quality points for a ConjuredItem who has passed its sellIn date", function() {
    const gildedRose = new Shop([new ConjuredItem("Book", -1, 20)])
    const items = gildedRose.updateQuality()
    expect(items[0].quality).toBe(16)
  })
})