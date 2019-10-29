const readlineSync = require("readline-sync");

const hourlyWage = parseFloat(readlineSync.question("\nHourly Wage: "));
const monday = parseFloat(readlineSync.question("\nMonday: "));
const tuesday = parseFloat(readlineSync.question("Tuesday: "));
const wednesday = parseFloat(readlineSync.question("Wednesday: "));
const thursday = parseFloat(readlineSync.question("Thursday: "));
const friday = parseFloat(readlineSync.question("Friday: "));
const saturday = parseFloat(readlineSync.question("Saturday: "));
const sunday = parseFloat(readlineSync.question("Sunday: "));

const thisWeekPay = (monday + tuesday + wednesday + thursday + friday + saturday + sunday) * hourlyWage

const thisWeekPayRounded = weekPay.toFixed(2);
const thisWeekPayFormatted = thisWeekPayRounded.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

console.log("\nYou'll make $" + thisWeekPayFormatted + " this week.")
