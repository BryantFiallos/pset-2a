const readlineSync = require("readline-sync");

const length = 48
const width = 24
const holeDiameter = 6

const holeArea = Math.pow((holeDiameter/2), 2) * Math.PI

const cornholeArea = length*width-holeArea

const cornholeAreaRounded = cornholeArea.toFixed(2);
const cornholeAreaDisplay = cornholeAreaRounded.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

console.log("\nThe surface area of a standard Cornhole board is " + cornholeAreaDisplay + " square inch(es).")
