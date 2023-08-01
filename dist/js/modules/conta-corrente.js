import { Conta } from "./conta.js";

export class ContaCorrente extends Conta {
    // definindo os atributos
    #taxa = 0.01;
    // sobrescrevendo o comportamento sacar
    sacar(valor){
       this.#taxa=this.#taxa*valor;
        const valorSacar = valor+this.#taxa;
        return super.sacar(valorSacar);
    }
};