module.exports = class Transfer {
    constructor(toUser, fromUser, value){
        this.toUser = toUser;
        this.fromUser = fromUser;
        this.value = value;
        this.date = new Date;
    }
}