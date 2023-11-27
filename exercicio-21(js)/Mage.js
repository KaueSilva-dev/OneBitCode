const Character = require("./Character");

module.exports = class Mage extends Character{
  constructor(name, life, attack, defense, magic) {
    super(name, life, attack, defense);
    this.magic = magic;
  }

  setAttack(target) {
    target.life -= (this.attack + this.magic) - target.defense;
  }

  heal(target){
    target.life *= this.magic;
  }
}
