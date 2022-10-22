const numero1 = prompt("Digite o primeiro numero");
const numero2 = prompt("Digite o segundo numero");

alert(
	"Resultado das 4 operações\n" +
		"adição: " +
		(parseInt(numero1) + parseInt(numero2)) +
		"\n" +
		"subtração: " +
		(numero1 - numero2) +
		"\n" +
		"multiplicação: " +
		numero1 * numero2 +
		"\n" +
		"divisão: " +
		numero1 / numero2
);
