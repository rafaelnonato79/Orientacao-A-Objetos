import { Conta } from "./conta.js";
export class ContaCorrente extends Conta {
    // definindo os atributos
    _taxa = 0.01;
    // sobrescrevendo o comportamento sacar
    sacar(valor) {
        this._taxa = this._taxa * valor;
        const valorSacar = valor + this._taxa;
        return super.sacar(valorSacar);
    }
}
;
