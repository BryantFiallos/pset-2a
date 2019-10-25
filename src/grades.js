const readlineSync = require("readline-sync");

const weightHW = 0.15;
const weightQ = 0.35;
const weightT = 0.5;

let hwGrade1 = readlineSync.question("\nEnter three homework grades.\n");
let hwGrade2 = readlineSync.question("");
let hwGrade3 = readlineSync.question("");
let qGrade1 = readlineSync.question("\nEnter three quiz grades.\n");
let qGrade2 = readlineSync.question("");
let qGrade3 = readlineSync.question("");
let tGrade1 = readlineSync.question("\nEnter three test grades.\n");
let tGrade2 = readlineSync.question("");
let tGrade3 = readlineSync.question("");

hw1 = Number (hwGrade1);
hw2 = Number (hwGrade2);
hw3 = Number (hwGrade3);
q1 = Number (qGrade1);
q2 = Number (qGrade2);
q3 = Number (qGrade3);
t1 = Number (tGrade1);
t2 = Number (tGrade2);
t3 = Number (tGrade3);
let hwTotal = hw1 + hw2 + hw3;
let hwAvg = hwTotal / 3;
let qTotal = q1 + q2 + q3;
let qAvg = qTotal / 3;
let tTotal = t1 + t2 + t3;
let tAvg = tTotal / 3;
let finalGrade = weightHW * hwAvg + weightQ * qAvg + weightT * tAvg;
finalGrade = finalGrade.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log("\nYour marking period grade is " + finalGrade + "%.")
