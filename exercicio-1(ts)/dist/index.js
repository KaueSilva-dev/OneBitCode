function sendSpaceship(name, captain) {
    const spaceship = {
        name,
        captain,
        speed: 20,
        inMission: true,
        crew: []
    };
    alert(`A nave ${spaceship.name} comandada por ${spaceship.captain} foi enviada em uma missão`);
    return spaceship;
}
function accelerate(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert(`reduzindo a velocidade da ${spaceship.name} para ${targetSpeed}...`);
    }
    else if (spaceship.speed < targetSpeed) {
        alert(`aumentando a velocidade da ${spaceship.name} para ${targetSpeed}`);
    }
    else {
        alert(`mantendo a velocidad da ${spaceship.name}`);
    }
}
const spaceshipName = prompt('digite o nome da nave a ser enviada');
const scpaceshipCaptain = prompt('digite o nome do capitão da nave');
const currentShip = sendSpaceship(spaceshipName, scpaceshipCaptain);
const speed = Number(prompt('digite uma velocidade que deseja acelerar.'));
accelerate(speed, currentShip);
