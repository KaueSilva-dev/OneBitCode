let menu;
do {
	menu = prompt(`escolha uma das opções:
- Abacaxi
- Acerola
- Manga
- Melancia
- Encerrar
`);
	if (menu !== "Encerrar") {
		alert(`Você escolheu a opção ${menu}`);
	} else {
		alert(`programa esta sendo encerrado`);
	}
} while (menu !== "Encerrar");
