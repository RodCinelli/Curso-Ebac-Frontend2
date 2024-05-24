class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    dizOi() {
        console.log(`${this.nome} diz olá`);
    }
}

class Funcionario extends Pessoa {
    constructor(nome, cargo, salario) {
        super(nome);
        this.cargo = cargo;
        this._salario = salario; // encapsulamento usando _ para indicar privado
    }

    get salario() {
        return this._salario;
    }

    set salario(valor) {
        if (typeof valor === 'number') {
            this._salario = valor;
        }
    }

    aumento() {
        this._salario *= 1.1;
    }

    dizCargo() {
        console.log(`${this.nome} é ${this.cargo}`);
    }
}

class Cliente extends Pessoa {
    constructor(nome, numeroCliente) {
        super(nome);
        this.numeroCliente = numeroCliente;
    }

    dizNumeroCliente() {
        console.log(`Cliente número: ${this.numeroCliente}`);
    }
}

const funcionario1 = new Funcionario("Maria", "Dev Front-End", 5000);
const funcionario2 = new Funcionario("João", "Dev Back-End", 6000);
const cliente1 = new Cliente("Ana", 12345);

funcionario1.aumento();
console.log(funcionario1.salario); // Salário aumentado

funcionario2.dizCargo();
cliente1.dizNumeroCliente();
cliente1.dizOi();
