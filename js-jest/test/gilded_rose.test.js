const {Shop, Item} = require("../src/gilded_rose");

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
  it("should initialise an 'Backstage passes to a TAFKAL80ETC concert' item by 3, but stop at the quality ceiling of 50", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 2, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });
  it("should initialise an 'Backstage passes to a TAFKAL80ETC concert' item by 3, but stop at the quality ceiling of 50", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 6, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });
})