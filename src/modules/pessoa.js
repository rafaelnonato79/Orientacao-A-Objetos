export class Pessoa{

    //ATRIBUTOS
    #nome;
    #cpf;
    #idade;
    #sexo;
    
    //construtor
    constructor(nome, cpf, idade, sexo){
        this.#nome = nome;
        this.#cpf = cpf;
        this.#idade = idade;
        this.#sexo = sexo
    }
    
    //Metodos
    get nome(){
        return this.#nome
    }

    get cpf(){
        return this.#cpf
    }

    get idade(){
        return this.#idade
    }

    get sexo(){
        return this.#sexo
    }
    
}