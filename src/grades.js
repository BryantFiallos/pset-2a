const readlineSync = require("readline-sync");

const weightHW = 0.15;
const weightQ = 0.35;
const weightT = 0.5;

let hw1 = readlineSync.question("\nEnter three homework grades.\n");
let hw2 = readlineSync.question("");
let hw3 = readlineSync.question("");
let q1 = readlineSync.question("\nEnter three quiz grades.\n");
let q2 = readlineSync.question("");
let q3 = readlineSync.question("");
let t1 = readlineSync.question("\nEnter three test grades.\n");
let t2 = readlineSync.question("");
let t3 = readlineSync.question("");

let hwTotal = hw1 + hw2 + hw3;
let qTotal = q1 + q2 + q3;
let tTotal = t1 + t2 + t3;
let finalGrade = weightHW * hwTotal + weightQ * qTotal + weightT * tTotal / weightHW + weightQ + weightT;
finalGrade = finalGrade.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log("\nYour marking period grade is " + finalGrade + "%.")
