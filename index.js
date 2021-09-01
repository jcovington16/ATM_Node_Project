"use strict"

const account = require('./account');
const {validate, balance, withdraw, deposit} =  require('./atm');

const user_prompt = require('prompt-sync')();

function app() {
    let pinNum = parseInt(user_prompt("Please enter your pin number: "))
    let results = validate(account, pinNum)

    switch(results) {
        case true:
            mainMenu();
            break;

        case false:
            console.error(`Your pin ${pinNum} is incorrect`)
            app();
            break;
        
        // default:
        //     console.log('Please input a proper pin');
        //     app();
        //     break;
    }
}

app();

function mainMenu() {
    console.log("What would you like to do?\n1: Balance\n2: Withdraw\n3: Deposit\n4: Exit\n");
    let input = user_prompt();
    let results;

    switch(input) {
        case "1": // get balance
            results = balance(account)
            console.log(`Your balance is ${results}\n`);
            mainMenu();
            break;
        case "2": // withdraw from account
            console.log("How much would you like to withdraw?\n");
            let amount = user_prompt() + '\n';
            results = withdraw(account, amount);
            console.log(`You withdrew ${amount}.\n`);
            mainMenu();
            break;
        case "3": // deposite into account
            console.log('deposit');
            break;
        case "4":
            console.log('exit');
            break;
    }

}
