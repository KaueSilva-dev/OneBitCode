let saldo = prompt(`Qual o seu saldo atual?`);
saldo = parseFloat(saldo);
let opcao;

do {
	opcao = prompt(`
   Seu saldo atual é de: R$ ${saldo}
   O que deseja fazer?
   1- Deposito
   2- Saque
   3- Sair
  `);
	switch (opcao) {
		case "1":
			saldo += parseFloat(prompt(`Digite o valor a ser depositado`));
			break;
		case "2":
			saldo -= parseFloat(prompt(`Digite o valor a ser sacado`));
			break;
		case "3":
			alert(`Volte sempre!!`);
			break;
	}
} while (opcao !== "3");
