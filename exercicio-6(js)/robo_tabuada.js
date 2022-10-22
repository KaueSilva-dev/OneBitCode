const numero = prompt(`Ola eu sou o robô tabuada
Digite o numero que deseja ser mulitiplicado`);

let tabuada = "";

for (let i = 1; i <= 20; i++) {
	tabuada += `${numero} x ${i} = ${numero * i}\n`;
}
alert(tabuada);
