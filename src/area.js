const readlineSync = require("readline-sync");

const w = readlineSync.question("\nWidth: ");
const l = readlineSync.question("Length: ");
const c = 25.4;
const a = w * c * l * c;
console.log("\nA(n) " + w + "-by-" + l + "-inch sheet of paper has an area of " +a+ " square millimeter(s)")
