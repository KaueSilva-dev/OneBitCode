const Character = require("./Character");

module.exports = class Warrios extends Character {
  constructor(name, life, defense, attack, shield) {
    super(name, life, defense, attack);
    this.shiled = shield;
    this.stance = 'attachking'
  }

  setAttack(target){
    if(this.stance === 'attacking'){
      super.attack(target)
    }
  }

  switchStance(){
    if(this.stance === 'attacking'){
      this.stance = 'defending';
      this.defense += this.shiled;
    }else{
      this.stance = 'attacking';
      this.defense -= this.shiled;
    }
  }
};
