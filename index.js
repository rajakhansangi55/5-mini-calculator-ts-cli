#! /usr/bin/env node
import inquirer from "inquirer";
console.log('Welcome to our Mini Calculator.');
let loop = true;
while (loop) {
    let myCal = await inquirer.prompt([{
            type: "number",
            name: "num1",
            message: "please enter your 1st number..."
        }, {
            type: "number",
            name: "num2",
            message: "please enter your 2nd number..."
        }, {
            type: "list",
            name: "operator",
            choices: ["Division", "Multiplication", "Addition", "Subtraction"],
            message: "Please select any operator",
        }
    ]);
    const num1 = myCal.num1;
    const num2 = myCal.num2;
    const operator = myCal.operator;
    if (num1 && num2) {
        if (operator === "Division") {
            console.log(`\n Answer of ${num1} / ${num2} = ${num1 / num2}`);
        }
        else if (operator === "Multiplication") {
            console.log(`\n Answer of ${num1} x ${num2} = ${num1 * num2}`);
        }
        else if (operator === "Addition") {
            console.log(`\n Answer of ${num1} + ${num2} = ${num1 + num2}`);
        }
        else if (operator === "Subtraction") {
            console.log(`\n Answer of ${num1} - ${num2} = ${num1 - num2}`);
        }
    }
    else {
        console.log(`Please enter the valid number.`);
    }
    const calculationsMore = await inquirer.prompt({
        type: "confirm",
        name: "more",
        message: "Do you want more calculations?",
        default: false
    });
    if (!calculationsMore.more) {
        loop = false;
        console.log("O.K. Thank You!");
    }
}
