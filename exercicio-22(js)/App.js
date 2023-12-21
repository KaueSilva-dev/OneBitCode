const Deposit = require("./Deposit");
const Loan = require("./Loan");
const Transfer = require("./Transfer");
const User = require("./User");

module.exports = class App {
    static #users = [];

    static createUser(email, fullName){
        const userExists = App.#users.find(email);

        if(!userExists){
            this.#users.push(new User(fullName, email));
        }
    }

    findUser(email){
        const user = App.#users.find(user => user.email === email);
        return user ?? null;
    }

    static deposit(email, value) {
        const user = App.findUser(email);
        if(user){
            const deposit = new Deposit(value, email);
            user.account.addDeposit(deposit);
        }
    }

    static transfer(toUser, fromUser, value) {
        const toUser = App.findUser(toUser);
        const fromUser = App.findUser(fromUser);
        if(toUser && fromUser ) {
            const newTransfer = new Transfer(toUser, fromUser, value);
            toUser.account.addTransfer(newTransfer);
            fromUser.account.addTransfer(newTransfer);
        }
    }

    static takeLoan(email, value, numberInstallments) {
        const userExists = App.findUser(email);
        
        if(userExists) {
            const newLoan = new Loan(value, numberInstallments);
            userExists.account.newLoan(newLoan);
        }
    }

    static changeLoanFee(newFeeLoan) {
        Loan.fee = newFeeLoan;
    }
}