const medidas = prompt(`Digite o valor em metros que deseja converter.`);
const unidade = prompt(`Para qual unidade de medida deseja converter? 
1 - milímetro (mm)
2 - centímetro (cm)
3 - decímetro (dm)
4 - decâmetro (dam)
5 - hectômetro (hm)
6 - quilômetro (km)`);
switch (unidade) {
	case "mm":
		alert(`Resultado: ${medidas} m = ${medidas * 1000}mm`);
		break;
	case "2":
		alert(`Resultado: ${medidas} m = ${medidas * 100}cm`);
		break;
	case "3":
		alert(`Resultado: ${medidas} m = ${medidas * 10}dm`);
		break;
	case "4":
		alert(`Resultado: ${medidas} m = ${medidas / 10}dam`);
		break;
	case "5":
		alert(`Resultado: ${medidas} m = ${medidas / 100}hm`);
		break;
	case "6":
		alert(`Resultado: ${medidas} m = ${medidas / 1000}km`);
		break;
	default:
		alert(`Opção Inválida!`);
		break;
}
