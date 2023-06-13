function createBottles() {
    let bottles = [];
    // Select a random index for the heavy bottle
    let heavyBottleIndex = Math.floor(Math.random() * 20); 

    // Create 20 bottles with pills, one of them being heavier
    for (let i = 0; i < 20; i++) {
        bottles.push(new Array(100).fill(i === heavyBottleIndex ? 1.1 : 1.0));
    }
    console.log(bottles);
    return { bottles, heavyBottleIndex };
}

module.exports = createBottles;
