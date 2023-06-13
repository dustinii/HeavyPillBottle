# Heavy Pill Identification

## Description

This project contains a simple simulation to solve the "Heavy Pill" problem, using JavaScript and Node.js.

## Problem Statement
There are 20 bottles of pills where all the pills in one randomly chosen bottle are heavier than the others. The pills in this heavy bottle weigh 1.1 grams each while the rest weigh 1.0 grams. The objective is to identify the bottle with the heavy pills with just one use of a scale.

## Conceptual Solution
The solution to this problem is implemented in JavaScript. It involves numbering the bottles from 1 to 20, and from each bottle number i, taking i pills and putting them on the scale. The total weight will be off by a certain number of tenths of a gram, which will directly tell us which bottle contains the heavier pills.

### Dependencies

* Node.js

### Executing program

* Run `node index.js` to execute the program.

## Files

* `findHeavyPill.js`: This file contains the logic for identifying the heavy bottle.
* `createBottles.js`: This file generates the bottles and randomly selects one to have the heavier pills.
* `index.js`: This file is the entry point that combines the creation of the bottles and the identification of the heavy bottle.

## License
This project is licensed under the terms of the MIT license.

## Acknowledgments

Thank you to my instructor [Diarmuid Murphy](https://github.com/diarmuid-murphy) for introducing me to the problem and talking through the solution.
