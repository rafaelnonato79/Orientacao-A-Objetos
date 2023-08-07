export class Pessoa{

    // atributos
    private _nome:string;
    private _cpf: string;
    private _idade: number;
    private _sexo: string;
    
    
    //construtor
    constructor(nome:string, cpf:string, idade:number, sexo:string){
        this._nome = nome;
        this._cpf = cpf;
        this._idade = idade;
        this._sexo = sexo;
    }

    // metodos
    get nome(): string {
        return this._nome;
    }
    set nome(nome:string){

        this._nome = nome.toUpperCase().trim();
    }

    get cpf(): string{
        return this._cpf;
    }
    set cpf(cpf:string){
        this._cpf = cpf;
    }
    get idade():number {
        return this._idade
    }
    set idade(idade=number){
        this._idade = idade;
    }
    get sexo():string{
        return this._sexo;
    }
    set sexo(sexo:string){
        this._sexo = sexo;
    }
    
}