const palavra = prompt(
	`Informe uma palavra para verificar se é um palindromo!`
);
let palavraInvertida = "";

for (let i = palavra.length - 1; i >= 0; i--) {
	palavraInvertida += palavra[i];
}
if (palavraInvertida === palavra) {
	alert(`a palavra ${palavra} é um palindromo`);
} else {
	alert(
		`a palavra ${palavra} não é um palindromo, ${palavra} & ${palavraInvertida}`
	);
}
