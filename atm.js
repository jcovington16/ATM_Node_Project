// import account.js into atm.js file

const account = require('./account');

// user validates their pin at the atm
function validatePin(account, pinNumber) {
    if (pinNumber === account.pin) {
        return true;
    } else {
        return false;
    }
}

// if user wants to see their balance they can request the balance
function getBalance(account) {
    return account.balance;
}

// user can withdraw money after their pin has been validated
function withdraw(account, ammount) {
    let new_balance = account.balance - ammount;

    return newBalance(account, new_balance)
}

function newBalance(account, ammount) {
    account.balance = ammount;
    return account.balance;
}

// user can deposit cash into their account
function deposit(account, ammount) {
    let new_balance = account.balance + ammount;

    return newBalance(account, new_balance);
}

module.exports = {
    validate: validatePin,
    balance: getBalance,
    withdraw: withdraw,
    deposit: deposit,
}

