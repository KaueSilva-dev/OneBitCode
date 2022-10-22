const nomeDoPersonagem1 = prompt("Digite o nome do personagem atacante.");
const valorDeAtaque = prompt("Digite o valor de ataque do personagem");
const nomeDoPersonagem2 = prompt("Digite o nome do personagem 2");
let pontosDeVida = prompt("Digite os pontos de vida do personagem");
const pontosDeDefesa = prompt("Digite o pontos de defesa do personagem");
const escudo = prompt("Ele tem escudo? (Sim/Nao");
let dano = 0;

if (valorDeAtaque > pontosDeDefesa && escudo === "Nao") {
	dano = valorDeAtaque - pontosDeDefesa;
} else if (valorDeAtaque > pontosDeDefesa && escudo === "Sim") {
	dano = (valorDeAtaque - pontosDeDefesa) / 2;
}

pontosDeVida -= dano;

alert("Dano causado por " + nomeDoPersonagem1 + " é igual a " + dano);
alert(
	nomeDoPersonagem1 +
		" poder de ataque = " +
		valorDeAtaque +
		"\n\n" +
		nomeDoPersonagem2 +
		" pontos de vida = " +
		pontosDeVida +
		"\npoder de defesa " +
		pontosDeDefesa +
		"\npossuiu escudo " +
		escudo
);
