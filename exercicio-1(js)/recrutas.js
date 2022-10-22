const primeiroNome = prompt("Informe o primeiro nome do recruta");
const sobrenome = prompt("Informe o sobrenome do recruta");
const campoDeEstudo = prompt("QUal é o campo de estudo do recruta");
const anoDeNascimento = prompt("Qual é o ano de nascimento do recruta");

alert(
	"Cadastro realizado com sucesso\n" +
		"Nome: " +
		primeiroNome +
		" " +
		sobrenome +
		"\n" +
		"Idade: " +
		(2022 - anoDeNascimento) +
		"\n" +
		"Campo de Estudo: " +
		campoDeEstudo
);
