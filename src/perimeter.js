const readlineSync = require("readline-sync");

const conversionCM = 2.54;

let width = readlineSync.question("\nWidth: ");
let length = readlineSync.question("Length: ");

let widthCM = width * conversionCM;
let lengthCM = length * conversionCM;
let perimeter = 2 * widthCM + 2 * lengthCM;
perimeter = perimeter.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has a perimeter of " + perimeter + " centimeter(s).")
