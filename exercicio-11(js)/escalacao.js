function onEscalarJogador() {
	const posicao = document.getElementById("posicao").value;
	const nome = document.getElementById("nome").value;
	const camisa = document.getElementById("camisa").value;

	const confirmacao = confirm(`Escalar ${nome} na posição ${posicao}?`);

	if (confirmacao) {
		const teamList = document.getElementById("team-list");
		const itemJodagoresLi = document.createElement("li");
		itemJodagoresLi.id = `jogador ${camisa}`;
		itemJodagoresLi.innerText = `${posicao}: ${nome} ${camisa}`;
		teamList.appendChild(itemJodagoresLi);

		document.getElementById("posicao").value = "";
		document.getElementById("nome").value = "";
		document.getElementById("camisa").value = "";
	}
}

function onRemoverJogador() {
	const camisa = document.getElementById("camisa-jogador").value;
	const removerJogador = document.getElementById(`jogador ${camisa}`);
	const confirmarRemove = confirm(
		`Remover o jogador: ${removerJogador.innerText}?`
	);

	if (confirmarRemove) {
		document.getElementById("team-list").removeChild(removerJogador);
		document.getElementById("camisa-jogador").value = "";
	}
}
