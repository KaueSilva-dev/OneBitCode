const Installment = require('./Installment');

module.exports = class Loan {
    static #fee = 1.05;

    constructor(value, installment){
        this.valueInstallment = value;
        this.createdAt = new Date;
        this.installment = [];
        for( let i = 1; i< installment; i++) {
            this.installment.push(new Installment((value * Loan.#fee)/installment), i);
        }
    }

    static get fee(){
        return this.#fee;
    }

    static set fee(newPercent){
        this.#fee = 1 + (newPercent/100);
    }
}