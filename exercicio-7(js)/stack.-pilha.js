const baralho = [];
let menu = "";

do {
	menu = prompt(`
    Baralho de cartas:
    ${baralho.length}
    menu:
    1.Adicionar Uma Carta
    2.Puxar uma carta
    3.Sair
  `);
	switch (menu) {
		case "1":
			baralho.push(prompt(`digite o nome do paciente.`));
			break;
		case "2":
			const cartaRetirada = baralho.pop();
			if (!cartaRetirada) {
				alert(`Não há cartas na fila`);
			} else {
				alert(`carta: ${cartaRetirada}`);
			}
			break;
		case "3":
			alert(`encerrando`);
			break;
		default:
			alert(`opção invalida`);
			break;
	}
} while (menu != 3);
