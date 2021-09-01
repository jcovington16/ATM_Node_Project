// import account.js into atm.js file

let {pin, balance} = require('./account');

// user validates their pin at the atm
function validatePin(pinNumber) {
    if (pinNumber === pin) {
        return true;
    } else {
        return false;
    }
}

// if user wants to see their balance they can request the balance
function getBalance() {
    return balance;
}

// user can withdraw money after their pin has been validated
function withdraw(ammount) {
    if(balance === 0){
        return `You have insufficient funds.`
    }else if (ammount > balance) {
        return `You cannot overwithdraw`
    } else {

        let new_balance = balance - ammount;

        return newBalance(new_balance)
    }
}

function newBalance(ammount) {
    balance = ammount;
    return `Your new balance is ${balance}`;
}

// user can deposit cash into their account
function deposit(ammount) {
    let new_balance = balance + ammount;

    return newBalance(new_balance);
}

module.exports = {
    validate: validatePin,
    balance: getBalance,
    withdraw: withdraw,
    deposit: deposit,
}

