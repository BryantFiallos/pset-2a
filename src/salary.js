const readlineSync = require("readline-sync");

const preTax = 0.07
const federalIncomeTax = 0.157
const stateIncomeTax = 0.0447
const socialSecurityTax = 0.062
const medicareTax = 0.0145

const annualSalary = parseFloat(readlineSync.question("\nAnnual salary: "), 10);
const annualSalaryCheck = annualSalary/24

const cumulativeTaxes = federalIncomeTax+stateIncomeTax+socialSecurityTax+medicareTax

const annualSalaryPretax = annualSalaryCheck - (preTax*annualSalaryCheck)
const annualSalaryTaxes = annualSalaryPretax - (cumulativeTaxes*annualSalaryPretax)

const annualSalaryTaxesRounded = annualSalaryTaxes.toFixed(2);
const annualSalaryTaxesDisplay = annualSalaryTaxesRounded.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

console.log("\nYour take-home pay each check will be $" + annualSalaryTaxesDisplay + ".")
