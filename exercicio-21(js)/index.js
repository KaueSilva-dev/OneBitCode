const Mage = require('./Mage.js');
const Thief = require('./Thief.js');
const Warrios = require('./Warriors.js');

const arthur = new Mage('merlim', 80, 70, 30, 50);
const jose = new Thief('learl', 80, 40, 20);
const manoel = new Warrios('gragas', 90, 50, 70, 30);

console.table({arthur, jose, manoel});

arthur.setAttack(manoel);
jose.setAttack(arthur);
manoel.switchStance();
arthur.heal(manoel);

console.table({arthur, jose, manoel});