const Deposito = require('./Deposit');
const Loan = require('./Loan');

module.exports = class Account {
    #balance;

    constructor(user) {
        this.owner = user;
        this.#balance = 0;
        this.deposits = [];
        this.loads = [];
        this.transf = [];
    }

    get balance(){
        return this.#balance;
    }

    addDeposit(deposit){
        this.#balance = deposit;
        this.deposits.push(deposit);
    }

    newLoan(loan){
        this.#balance += loan;
        this.loads.push(loan);
    }

    addTransfer(transfer){
        if(transfer.toUser.email === this.owner.email){
            this.#balance += transfer.value;
            this.transf.push(transfer);

        }else if(transfer.fromUser.email === this.owner.email){
            this.#balance -= transfer.value;
            this.transf.push(transfer);
        }
    }
}