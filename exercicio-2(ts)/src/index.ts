let spaceshipList = [];

function saveSpaceship (name: string, pilot:string, crewLimit: number) {
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew:[],
        inMission: false,
    }
    
    spaceshipList.push(spaceship);
    
    alert(`A nave ${spaceship.name} comandada por ${spaceship.pilot} esta registrada`)
}

function findSpaceship(name: string) {
    let spaceship:{
        name,
        pilot: string,
        crewLimit: number,
        crew: string[],
        inMission: boolean,
    }
    spaceship = spaceshipList.find((ship)=>{
        return ship.name === name
    });

    return spaceship;
}

function addPassenger(passenger: string, spaceship: { name: string, crewLimit: number, crew:string[]}) {

    if (spaceship.crew.length >= spaceship.crewLimit) {
        alert(`Nave esta com todos os lugares preenchidos.`)
    } else {
        spaceship.crew.push(passenger);
        alert(`passageiro adicionado na lista de passageiros.`)
    }
}

function sendSpaceShipToMission(name: string) {
    
    const spaceshipName = findSpaceship(name);
    const crewMinLimit = spaceshipName.crewLimit/ 3;

    if (spaceshipName.inMission) {
        alert(`A nave ${spaceshipName.name} já esta em missão`)

    } else if (spaceshipName.crew.length >= crewMinLimit || spaceshipName.inMission === true) {
        alert(`a nave ${spaceshipName.name} ja esta com o numero maximo de tripulantes`)
        
    } else {
        spaceshipName.inMission = true;
        alert(`enviando a nave ${spaceshipName.name} para missão, pilotada por ${spaceshipName.pilot}
        com numero de ${spaceshipName.crew.length} passageiros a bordo.`);
    }

}

function listSpaceships (){
    let list= 'lista de naves: \n';
    spaceshipList.forEach((spaceship:{
        name:string,
        pilot: string,
        crewLimit: number,
        crew:[],
        inMission:boolean,
    })=>{
        list += `Nome : ${spaceship.name}
        Piloto: ${spaceship.pilot}
        Em missão: ${spaceship.inMission ? 'sim': 'não'}
        Maximo de tripulantes a bordo: ${spaceship.crewLimit}
        Com o total de ${spaceship.crew.length};
        \n`
    });
    return list;
}

function firstOption() {
    const name = prompt(`qual nome da espaçonave?`);
    const pilot = prompt(`quem ira pilotar a nave?`);
    const crewLimit = Number(prompt(`Quantos tripulantes ela comporta?`));
    
    const confirmSave = confirm(`confirma o registro da espaço nave?
    com nome: ${name},
    piloto: ${pilot},
    e limite de passageiros: ${crewLimit}`)
    
    if(confirmSave) {
        saveSpaceship(name, pilot, crewLimit);
    }
}

function secondOption() {
    const passenger = prompt(`qual o nome do novo tripulante?`);
    
    let chosenSpaceship= 'para qual nave deseja embarcar o tripulante?\n';
    chosenSpaceship += listSpaceships();

    const nameSpaceship = prompt(`${chosenSpaceship}`);
    const selectedSpaceship = findSpaceship(nameSpaceship);

    if(selectedSpaceship){
        const confirmPassenger = confirm(`confirma a entrada do tripulante ${passenger} a bordo?`);
        if(confirmPassenger){
            addPassenger(passenger, selectedSpaceship);
        }
    }
}

function thirdOption(){
    let chosenSpaceship = 'Qual nave deseja enviar em missão? \n'
    chosenSpaceship += listSpaceships();
    const spaceshipName = prompt(`${chosenSpaceship}`);
    sendSpaceShipToMission(spaceshipName);
}

function fourthOption(){
    alert(`${listSpaceships()}`);
}