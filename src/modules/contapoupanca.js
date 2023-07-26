import { Conta } from "./conta.js";

export class ContaPopanca extends Conta {
    // atributos
    #rendimento=0.01;

    //metodos
    render(){
        const valorRendimento = this.saldo * this.#rendimento;
        this.depositar(valorRendimento);
    }

}