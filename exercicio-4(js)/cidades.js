const turista = prompt("Digite seu nome.");
let cidades = "";
let contagem = 0;

let continuar = prompt("Você visitou alguma cidade? (Sim/Nao)");

while (continuar === "Sim" || continuar === "sim") {
	let cidade = prompt("Qual o nome da cidade que você visitou?");
	cidades += `- ${cidade}` + "\n";
	contagem++;
	continuar = prompt("Você visitou mais alguma cidade? (Sim/Nao)");
}

alert(`Turista: ${turista}
Numero de cidades visitadas: ${contagem}
Cidades visitadas: ${cidades}
`);
