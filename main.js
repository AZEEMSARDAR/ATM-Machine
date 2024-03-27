#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; // Dollars
let myPin = 1221;
let pinCode = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number",
    },
]);
if (pinCode.pin === myPin) {
    console.log("Correct pin code!!!");
    console.log("Welcome to the ATM");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select an option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"],
        },
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "please enter your amount",
                type: "number",
            },
        ]);
        // myBalance -= amountAns.amount;
        if (amountAns.amount < myBalance) {
            (myBalance -= amountAns.amount),
                console.log(`Your remainig balance is: ${myBalance}`);
        }
        else if (amountAns.amount > myBalance) {
            console.log(`Unable to process transaction! \nyour current balance is ${myBalance}`);
        }
        else if (amountAns.amount === myBalance) {
            console.log("Your remainig balance is: 0");
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`Your current balance is: ${myBalance}`);
    }
    if (operationAns.operation === "fast cash") {
        let cashAmount = await inquirer.prompt([
            {
                name: "cash",
                message: "Please select amount to cash",
                type: "rawlist",
                choices: ["2000", "4000", "6000", "8000", "10000"],
            },
        ]);
        myBalance -= cashAmount.cash;
        console.log(`Your remaining balance is ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin number! please check your pin again");
}
