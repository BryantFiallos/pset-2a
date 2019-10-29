const readlineSync = require("readline-sync");

const conversionMM = 25.4;

let width = readlineSync.question("\nWidth: ");
let length = readlineSync.question("Length: ");
let area = width * conversionMM * length * conversionMM;
area = area.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has an area of " + area + " square millimeter(s).")
