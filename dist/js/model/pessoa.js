export class Pessoa {
    // atributos
    _nome;
    _cpf;
    _idade;
    _sexo;
    //construtor
    constructor(nome, cpf, idade, sexo) {
        this._nome = nome;
        this._cpf = cpf;
        this._idade = idade;
        this._sexo = sexo;
    }
    // metodos
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome.toUpperCase().trim();
    }
    get cpf() {
        return this._cpf;
    }
    set cpf(cpf) {
        this._cpf = cpf;
    }
    get idade() {
        return this._idade;
    }
    set idade(idade) {
        this._idade = idade;
    }
    get sexo() {
        return this._sexo;
    }
    set sexo(sexo) {
        this._sexo = sexo;
    }
}
