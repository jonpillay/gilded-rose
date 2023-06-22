# Gilded Rose

This is the Gilded Rose kata in JavaScript with Jest

# Testing and Planning

- Tests written that reflect the original spec (without new feature)

- Beginning refactoring. updateQuality method is 45 lines long

- Conjured items I am planning on making a separate class and checking for it with the first if statement in updateQuality, removing 2 or 4 as needed and then moving to the next item in the list. As of yet, I can see no reason to make this more complex.

# Change Log

- The most significant change is moving conditionals to the top of updateQulity(). This means they don't have to be checked again throughout the rest of the method. Shortened code slightly and improves readability.

- Changed the for loop into a forEach. Slight improvement in test times between the two that suggests an improvement in efficiency. There's no real need for the method to look ahead or behind in the items list, so forEach should be fine in this case (no need to keep track of the index and just treat each item seperately)

- ConjuredItems is a new class representing the new suppliers. The class inherits from the Item class and only differs in name. There are only four lines added to the updateQuality method 47-48 and 53-54 which check via this bool and add points if conditionals hold. I would have added an instance attribute to the Item class (str value, eg 'Sulfuras, Hand of Ragnaros'), that could have a default of none and be set to denote whatever special object... however I fear changing the goblin's code.

## Getting started

Install dependencies

```sh
npm install
```

## Running tests

To run all tests

```sh
npm test
```

To run all tests in watch mode

```sh
npm run test:watch
```

To generate test coverage report

```sh
npm run test:coverage
```
