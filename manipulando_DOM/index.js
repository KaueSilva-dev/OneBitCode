function addContact() {
	const contactSection = document.getElementById("contacts-list");

	const h3 = document.createElement("h3");
	h3.innerText = "Contato";

	const ul = document.createElement("ul");

	const nameLi = document.createElement("li");
	nameLi.innerText = "Nome: ";
	const nameInput = document.createElement("input");
	nameInput.type = "type";
	nameInput.name = "fullName";
	nameLi.appendChild(nameInput);
	ul.appendChild(nameLi);

	const phoneLi = document.createElement("li");
	phoneLi.innerText = "Telefone: ";
	const phoneInput = document.createElement("input");
	phoneInput.type = "text";
	phoneInput.name = "phone";
	phoneLi.appendChild(phoneInput);
	ul.appendChild(phoneLi);

	const addressLi = document.createElement("li");
	addressLi.innerHTML = '<label for="address">Endereço: </Label>';
	const addressInput = document.createElement("input");
	addressInput.type = "text";
	addressInput.name = "address";
	addressInput.id = "address";
	addressLi.appendChild(addressInput);
	ul.appendChild(addressLi);

	contactSection.append(h3, ul);
}

function removeContact() {
	const contactSection = document.getElementById("contacts-list");

	const titles = document.getElementsByTagName("h3");
	const contacts = document.getElementsByTagName("ul");
	contactSection.removeChild(titles[titles.length - 1]);
	contactSection.removeChild(contacts[contacts.length - 1]);
}
