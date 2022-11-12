let menu = "";
function calculaTriangulo() {
	const base = parseFloat(prompt(`Digite a base do seu triangulo!`));
	const altura = parseFloat(prompt(`Digite a altura do seu triangulo`));
	return (base * altura) / 2;
}
function calculaRetangulo() {
	const base = parseFloat(prompt(`Digite a base do seu retangulo!`));
	const altura = parseFloat(prompt(`Digite a altura do seu retangulo`));
	return base * altura;
}
function calculaQuadrado() {
	const lado = parseFloat(
		prompt(`Digite o valor de um dos lados do seu quadrado!`)
	);
	return lado ^ 2;
}
function calculaTrapezio() {
	const baseMaior = parseFloat(
		prompt(`Digite o valor da base maior do seu trapezio`)
	);
	const baseMenor = parseFloat(prompt(`Digite a base menor do seu trapezio`));
	const altura = parseFloat(prompt(`Digite a altura do seu trapezio`));
	return ((baseMaior + baseMenor) * altura) / 2;
}
function calculaCirculo() {
	const raio = parseFloat(prompt(`Digite o valor do raio de seu circulo`));
	return (3.14 * raio) ^ 2;
}
function exibirMenu() {
	menu = prompt(`Escolha uma das operações abaixo:
1.Area do triangulo.
2.Area do retangulo.
3.Area do quadrado.
4.Area do trapezio.
5.Area do circulo.
6.Sair.
`);
}
function calculadoraGeometrica() {
	do {
		exibirMenu();
		switch (menu) {
			case "1":
				alert(calculaTriangulo());
				break;
			case "2":
				alert(calculaRetangulo());
				break;
			case "3":
				alert(calculaQuadrado());
				break;
			case "4":
				alert(calculaTrapezio());
				break;
			case "5":
				alert(calculaCirculo());
				break;
			case "6":
				alert(`Encerrando.`);
				break;
			default:
				alert("opção invalida tente novamente");
				break;
		}
	} while (menu != "6");
}
calculadoraGeometrica();
