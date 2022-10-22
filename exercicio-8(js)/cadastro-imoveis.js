let imoveis = [];
let menu = "";
do {
	menu = prompt(`
  Bem-vindo ao Cadastro de Imóveis.
  Total de imóveis: ${imoveis.length}
    Menu:
    1.Salvar um imovel
    2.Imoveis
    3. Sair
  `);
	switch (menu) {
		case "1":
			const imovel = {};
			imovel.proprietario = prompt(`Digite o nome do proprietario`);
			imovel.quantidadeQuartos = prompt(
				`Digite a quantidade de quartos do imovel`
			);
			imovel.quantidadeBanheiros = prompt(
				`Digite a quantidade de banheiros do imovel`
			);
			imovel.garagem = prompt(`O imovel possui garagem?(sim/nao)`);
			const confirma = confirm(`
        Salvar este imovel?
        Proprietario: ${imovel.proprietario}
        Quartos: ${imovel.quantidadeQuartos}
        Banheiros: ${imovel.quantidadeBanheiros}
        Possui garagem? ${imovel.garagem}
      `);
			if (confirma) {
				imoveis.push(imovel);
			}
			break;
		case "2":
			for (let show of imoveis) {
				alert(`Imoveis: 
             Proprietario: ${show.proprietario}
             Quartos: ${show.quantidadeQuartos}
             Banheiro: ${show.quantidadeQuartos}
             Garagem: ${show.garagem}`);
			}
			break;
		case "3":
			alert("Encerrando");
			break;
		default:
			alert(`opção invalida`);
			break;
	}
} while (menu != "3");
