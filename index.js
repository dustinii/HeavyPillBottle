const findHeavyPill = require('./findHeavyPill');
const createBottles = require('./createBottles');

function identifyAndCheck() {
  const { bottles, heavyBottleIndex } = createBottles();
  findHeavyPill(bottles);

  console.log(`Actual heavy bottle is at index: ${heavyBottleIndex}`);
}

identifyAndCheck();
