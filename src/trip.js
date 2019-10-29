const readlineSync = require("readline-sync");

const students = parseInt(readlineSync.question("\nStudents: "));
const teachers = parseFloat(readlineSync.question("Teachers: "));
const busCapacity = parseFloat(readlineSync.question("Bus capacity: "));

const bussesNeeded = Math.ceil((students+teachers)/busCapacity);
const passengersOnLastBus = (students+teachers)%busCapacity

console.log("\n" + bussesNeeded + " bus(es) is (are) needed, with " + passengersOnLastBus + " passenger(s) on the last bus.");
