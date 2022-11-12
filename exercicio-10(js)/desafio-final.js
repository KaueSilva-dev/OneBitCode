const vagas = [];

function listarVagas() {
	const vagasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
		textoFinal += indice + ".";
		textoFinal += vaga.nome;
		textoFinal += "(" + vaga.candidatos.length + "candidatos)\n";
		return textoFinal;
	}, "");
	alert(vagasEmTexto);
}

function novaVaga() {
	const nome = prompt(`Informe nome da vaga`);
	const descricao = prompt(`Informe descrição da vaga`);
	const dataLimite = prompt(`Informe uma data limite (dd/mm/aa) para a vaga:`);

	const confirmacao = confirm(
		`Deseja criar uma nova vaga com essas informações?\nNome ${nome}\nDescrição: ${descricao}\nData Limite: ${dataLimite}`
	);

	if (confirmacao) {
		const novaVaga = { nome, descricao, dataLimite, candidatos: [] };
		vagas.push(novaVaga);
		alert("Vaga Criada");
	}
}

function exibirVaga() {
	const indice = prompt("Informe o índice da vaga que deseja exibir:");
	const vaga = vagas[indice];

	const candidatosEmTexto = vaga.candidatos.reduce(
		(textoFinal, candidato) => textoFinal + "\n" + candidato,
		""
	);
	alert(`
  vaga nº: ${indice}
  \nNome: ${vaga.nome}
  \nDescricao: ${vaga.descricao}
  \nData Limite: ${vaga.dataLimite}
  \nQuantidade de candidatos: ${vaga.candidatos.length}
  \nCandidatos inscritos: ${candidatosEmTexto}
  `);
}

function inscreverCandidato() {
	const candidato = prompt("Informe o nome do(a) candidato(a):");
	const indice = prompt(
		"Informe o índice da vaga para a qual o(a) cadidato(a) deseja"
	);
	const vaga = vagas[indice];

	const confirmacao = confirm(
		`Deseja inscrever o cadidato ${candidato} na vaga ${indice}?\n
    Nome: ${vaga.nome} \nDescricao: ${vaga.descricao} \nData Limite: ${vaga.dataLimite}`
	);
	if (confirmacao) {
		vagas.splice(indice, 1);
		alert(`Vagas Excluidas`);
	}
}

function exibirMenu() {
	const menu = prompt(`
      1.Listar vagas disponíveis
      2.Criar uma nova vaga
      3.Visualizar uma vaga
      4.Inscrever um cadidato em uma vaga
      5.Excluir uma vaga
      6.Sair.
    `);
	return menu;
}

function executar() {
	let opcao = "";
	do {
		opcao = exibirMenu();
		switch (opcao) {
			case "1":
				listarVagas();
				break;
			case "2":
				novaVaga();
				break;
			case "3":
				exibirVaga();
				break;
			case "4":
				inscreverCandidato();
				break;
			case "5":
				excluirVaga();
				break;
			case "6":
				alert("Saindo...");
				break;
			default:
				alert(`Opção inválida`);
				break;
		}
	} while (opcao !== "6");
}

executar();
