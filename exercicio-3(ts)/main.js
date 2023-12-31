let planetList = [];
function savePlanet(nome, coordenadas, status) {
    planetList.push({
        nome, coordenadas, status, satelites: []
    });
    alert(`novo planeta ${nome} salvo com sucesso!`);
}
function findPlanet(name) {
    const planet = planetList.find(planet => planet.nome === name);
    return planet ?? false;
}
function statusPlanetUpdate(planet, status) {
    planet.status = status;
    alert(`planeta ${planet.nome} salvo com sucesso!`);
}
function addSatelitePlanet(name, planet) {
    planet.satelites.push(name);
    alert(`O satelite ${name} foi adicionado ao planeta ${planet.nome}`);
}
function removeSatelitePlanet(name, planet) {
    planet.satelites = planet.satelites.filter(satelite => satelite !== name);
    alert(`o satelite ${name} foi removido do planeta ${planet.nome}`);
}
function listPlanet() {
    let list = 'lista de planetas: \n';
    planetList.forEach(planet => {
        const [a, b, c, d] = planet.coordenadas;
        list += `
      Nome: ${planet.nome}
      Coordenadas: (${a}, ${b}, ${c}, ${d})
      Situação: ${planet.status}
      Satélites: ${planet.satelites.length}
    `;
        planet.satelites.forEach(satellite => {
            list += `    - ${satellite}\n`;
        });
    });
    alert(list);
}
function promptValidSituation() {
    let situation;
    let validSituation = false;
    while (!validSituation) {
        const situationInput = prompt(`Informe a situação  do planeta?\n1 - Habitado\n2 - Habitável\n3 - Inabitável\n4 - Inexplorado')`);
        switch (situationInput) {
            case '1':
                situation = 'habitado';
                validSituation = true;
                break;
            case '2':
                situation = 'habitavel';
                validSituation = true;
                break;
            case '3':
                situation = 'inabitavel';
                validSituation = true;
                break;
            case '4':
                situation = 'inexplorado';
                validSituation = true;
                break;
            default:
                alert(`situação invalida!`);
                break;
        }
    }
    return situation;
}
function promptValidPlanet(callback) {
    const planetName = prompt(`Informe o nome do planeta`);
    const planet = findPlanet(planetName);
    if (planet) {
        callback(planet);
    }
    else {
        alert(`planeta não encontrado! Retornando ao menu`);
    }
}
function firstOption() {
    const name = prompt('Informe o nome do planeta:');
    const coordinateA = Number(prompt('Informe a primeira coordenada:'));
    const coordinateB = Number(prompt('Informe a segunda coordenada:'));
    const coordinateC = Number(prompt('Informe a terceira coordenada:'));
    const coordinateD = Number(prompt('Informe a quarta coordenada:'));
    const situation = promptValidSituation();
    const confirmation = confirm(`Confirma o registro do planeta ${name}
    nas coordenadas ${coordinateA},${coordinateB},${coordinateC},${coordinateD},
    com a situação ${situation}`);
    if (confirmation) {
        savePlanet(name, [coordinateA, coordinateB, coordinateC, coordinateD], situation);
    }
}
function secondOption() {
    promptValidPlanet(planet => {
        const situation = promptValidSituation();
        statusPlanetUpdate(planet, situation);
    });
}
function thirdOption() {
    promptValidPlanet(planet => {
        const satelite = prompt(`Digite o nome do satelite que deseja adicionar:`);
        addSatelitePlanet(satelite, planet);
    });
}
function fourthOption() {
    promptValidPlanet(planet => {
        const satelite = prompt(`Digite o nome do satelite que deseja remover`);
        removeSatelitePlanet(satelite, planet);
    });
}
function fifthOption() {
    listPlanet();
}
// Menu
let userOption = 0;
while (userOption !== 6) {
    const menu = `Menu
    1 - Registrar um novo planeta
    2 - Atualizar situação do planeta
    3 - Adicionar um satélite ao planeta
    4 - Remover um satélite do planeta
    5 - Lista todos os planetas
    6 - Sair
  `;
    userOption = Number.parseInt(prompt(menu));
    switch (userOption) {
        case 1:
            firstOption();
            break;
        case 2:
            secondOption();
            break;
        case 3:
            thirdOption();
            break;
        case 4:
            fourthOption();
            break;
        case 5:
            fifthOption();
            break;
        case 6:
            alert('Encerrando o sistema...');
            break;
        default:
            alert('Opção inválida! Retornando ao painel principal...');
            break;
    }
}
