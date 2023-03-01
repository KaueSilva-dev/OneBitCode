const input = document.getElementById('input');

document.getElementById('value').addEventListener('click', function () {
  input.value == '' ? input.value = 'Olá, mundo!' : input.value = ''
});

const test = ['text', 'radio', 'date'];
document.getElementById('type').addEventListener('click', function () {
  for (let i of test) {
    if (input.type == i) {
      input.setAttribute('type', test[1]);
      test.shift();
      return test.push(i);
    }
  }
});

document.getElementById('placeholder').addEventListener('click', function () {
  input.placeholder == '' ? input.placeholder = 'Digita algo...' : input.placeholder = '';
});

document.getElementById('disable').addEventListener('click', function () {
  input.disabled = !input.disabled;
});


