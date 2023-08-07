export class Pessoa {
    nome;
    cpf;
    idade;
    sexo;
    // atributos e construtor
    constructor(nome, cpf, idade, sexo) {
        this.nome = nome;
        this.cpf = cpf;
        this.idade = idade;
        this.sexo = sexo;
        this.nome = nome;
        this.cpf = cpf;
        this.idade = idade;
        this.sexo = sexo;
    }
    // metodos
    getNome() {
        return this.nome;
    }
    getCpf() {
        return this.cpf;
    }
    getIdade() {
        return this.idade;
    }
    getSexo() {
        return this.sexo;
    }
}
