window.onload = function () {
    var inputs = document.querySelectorAll('input[type="number"]');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('focus', function () {
            this.dataset.placeholder = this.placeholder;
            this.placeholder = '';
        });
        inputs[i].addEventListener('blur', function () {
            this.placeholder = this.dataset.placeholder;
        });
    }
};

document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var campoA = Number(document.getElementById('campoA').value);
    var campoB = Number(document.getElementById('campoB').value);

    if (campoB > campoA) {
        document.getElementById('message').textContent = 'Formulário válido!';
        document.getElementById('message').className = 'valid';
    } else {
        document.getElementById('message').textContent = 'Formulário inválido. O número B deve ser maior que o número A.';
        document.getElementById('message').className = 'invalid';
    }
});

document.getElementById('clear').addEventListener('click', function () {
    document.getElementById('campoA').value = '';
    document.getElementById('campoB').value = '';
    document.getElementById('message').textContent = '';
    document.getElementById('message').className = '';
});