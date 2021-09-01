"use strict"

const {validate, balance, withdraw, deposit} =  require('./atm');

const user_prompt = require('prompt-sync')();
let tries = 3

function app() {
    let pinNum = parseInt(user_prompt("Please enter your pin number: "))

    let results = validate(pinNum)

    switch(results) {
        case true:
            mainMenu();
            break;

        case false:
            console.error(`Your pin ${pinNum} is incorrect`)
            if (tries === 0) {
                console.log('You ran out of attempts. Exiting...')
                return
            }else{
                tries -= 1
            } 
            
            app();
            break;
        
        default:
            console.log('Please input a proper pin');
            app();
            break;
    }
}

app();

function mainMenu() {
    console.log("What would you like to do?\n1: Balance\n2: Withdraw\n3: Deposit\n4: Exit\n");
    let input = user_prompt();
    let results;

    switch(input) {
        case "1": // get balance
            results = balance()
            console.log(`Your balance is ${results}\n`);
            mainMenu();
            break;

        case "2": // withdraw from account
            console.log("How much would you like to withdraw?\n");
            let amount = parseInt(user_prompt()) + '\n';
            results = withdraw(amount) + '\n';
            console.log(results);
            mainMenu();
            break;

        case "3": // deposite into account
            console.log("How much would you like to deposit?\n");
            let added_amount = parseInt(user_prompt());
            let despoiste_amount = deposit(added_amount);
            console.log(despoiste_amount)
            mainMenu();
            break;

        case "4":
            console.log('exiting...');
            break;
    }

}
