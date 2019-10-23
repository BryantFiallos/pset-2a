const readlineSync = require("readline-sync");

const width = readlineSync.question("\nWidth: ");
const length = readlineSync.question("Length: ");
const conversionMM = 25.4;
const area = width * conversionMM * length * conversionMM;
area = area.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has an area of " +area+ " square millimeter(s)")
