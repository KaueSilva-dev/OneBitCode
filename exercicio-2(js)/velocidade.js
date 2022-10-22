const nomeCarro1 = prompt("Digite o nome do carro 1");
const nomeCarro2 = prompt("Digite o nome do carro 2");
const velocidadeCarro1 = prompt("Digite o velocidade do carro 1");
const velocidadeCarro2 = prompt("Digite o velocidade do carro 2");
if (velocidadeCarro1 > velocidadeCarro2) {
	alert(
		"O carro " +
			nomeCarro1 +
			" tem a maior velocidade " +
			velocidadeCarro1 +
			"km/h"
	);
} else if (velocidadeCarro2 > velocidadeCarro1) {
	alert(
		"O carro " +
			nomeCarro2 +
			" tem a maior velocidade " +
			velocidadeCarro2 +
			"km/h"
	);
} else {
	alert("Ambos têm a mesma velocidade.");
}
