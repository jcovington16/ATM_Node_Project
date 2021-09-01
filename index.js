"use strict"

const account = require('./account');
const {validate, balance, withdraw, deposit} =  require('./atm');

const prompt = require('prompt-sync')();

function app() {
    let pinNum = parseInt(prompt("Please enter your pin number: "))
    let results = validate(account, pinNum)

    switch(results) {
        case true:
            mainMenu();
            break;

        case false:
            console.error(`Your pin ${pinNum} is incorrect`)
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
    console.log('here');
}
