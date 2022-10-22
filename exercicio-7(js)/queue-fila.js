const filaPacientes = [];
let menu = "";

do {
	let pacientes = "";
	for (let i = 0; i < filaPacientes.length; i++) {
		pacientes += `${i + 1}º ${filaPacientes[i]}\n`;
	}
	menu = prompt(`
    Fila de Pacientes:
    ${pacientes}
    menu:
    1.Novo Paciente
    2.Consultar Paciente
    3.Sair
  `);
	switch (menu) {
		case "1":
			filaPacientes.push(prompt(`digite o nome do paciente.`));
			break;
		case "2":
			const pacienteConsultado = filaPacientes.shift();
			if (!pacienteConsultado) {
				alert(`Não há pacientes na fila`);
			} else {
				alert(`Paciente: ${pacienteConsultado}`);
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
