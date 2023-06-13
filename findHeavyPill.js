function findHeavyPill(bottles) {
    let totalWeight = 0;
    for (let i = 0; i < bottles.length; i++) {
      totalWeight += (i+1) * bottles[i][0];
    }
  
    let expectedWeight = 21 * bottles.length / 2; // Sum of first 20 natural numbers
  
    return totalWeight - expectedWeight;
  }
  
  module.exports = findHeavyPill;  