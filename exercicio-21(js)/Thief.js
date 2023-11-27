const Character = require("./Character");

module.exports = class Thief extends Character{
   setAttack (target) {
      target.life -= (this.attack - target.defense)*2;
  }
}