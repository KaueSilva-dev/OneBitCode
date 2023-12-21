module.exports = class Installment {
    constructor(value, installment) {
        this.value = value;
        this.installment = installment;
        this.status = 'pending';
    }
}