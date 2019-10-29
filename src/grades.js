const readlineSync = require("readline-sync");

const weightHomework = 0.15;
const weightQuiz = 0.35;
const weightTest = 0.5;

let homeworkGrade1 = readlineSync.question("\nEnter three homework grades.\n");
let homeworkGrade2 = readlineSync.question("");
let homeworkGrade3 = readlineSync.question("");
let quizGrade1 = readlineSync.question("\nEnter three quiz grades.\n");
let quizGrade2 = readlineSync.question("");
let quizGrade3 = readlineSync.question("");
let testGrade1 = readlineSync.question("\nEnter three test grades.\n");
let testGrade2 = readlineSync.question("");
let testGrade3 = readlineSync.question("");

homework1 = Number (homeworkGrade1);
homework2 = Number (homeworkGrade2);
homework3 = Number (homeworkGrade3);
quiz1 = Number (quizGrade1);
quiz2 = Number (quizGrade2);
quiz3 = Number (quizGrade3);
test1 = Number (testGrade1);
test2 = Number (testGrade2);
test3 = Number (testGrade3);
let homeworkTotal = homework1 + homework2 + homework3;
let homeworkAverage = homeworkTotal / 3;
let quizTotal = quiz1 + quiz2 + quiz3;
let quizAverage = quizTotal / 3;
let testTotal = test1 + test2 + test3;
let testAverage = testTotal / 3;
let markingPeriodGrade = weightHomework * homeworkAverage + weightQuiz * quizAverage + weightTest * testAverage;
markingPeriodGrade = markingPeriodGrade.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log("\nYour marking period grade is " + markingPeriodGrade + "%.")
