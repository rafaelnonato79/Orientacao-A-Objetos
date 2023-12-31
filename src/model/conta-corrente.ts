import { Conta } from "./conta.js";

export class ContaCorrente extends Conta {
    // definindo os atributos
    private _taxa:number = 0.01;
    // sobrescrevendo o comportamento sacar
    sacar(valor:number):boolean{
        const valorSacar = valor+ valor* this._taxa;
        return super.sacar(valorSacar);
    }
};