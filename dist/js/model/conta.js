// Criar um modelo de conta bancária
export class Conta {
    // definindo os atributos
    _agencia;
    _numero;
    _titular;
    _saldo = 0.0;
    // definindo o construtor
    constructor(agencia, numero, titular) {
        this._agencia = agencia;
        this._numero = numero;
        this._titular = titular;
    }
    //definindo os metodos
    get agencia() {
        return this._agencia;
    }
    set agencia(novaAgencia) {
        this._agencia = novaAgencia;
    }
    get numero() {
        return this._numero;
    }
    set numero(novoNumero) {
        this._numero = novoNumero;
    }
    get titular() {
        return this._titular;
    }
    set titular(novoTitular) {
        if (novoTitular === null) {
            throw new Error("Titular não pode estar em branco");
        }
        this._titular = novoTitular;
    }
    get saldo() {
        return this._saldo;
    }
    depositar(valor) {
        const podeDepositar = valor > 0;
        if (podeDepositar) {
            this._saldo += valor;
            return true;
        }
        return false;
    }
    sacar(valor) {
        const podeSacar = valor > 0 && valor <= this._saldo;
        if (podeSacar) {
            this._saldo -= valor;
            return true;
        }
        return false;
    }
    transferir(contaDestino, valor) {
        const podeTransferir = this.sacar(valor);
        if (podeTransferir) {
            return contaDestino.depositar(valor);
        }
        return (false);
    }
    toString() {
        return `Agência: ${this._agencia}\nConta:${this._numero} \nTitular: ${this.titular.getNome} \nSaldo: ${this._saldo.toFixed(2)}`;
    }
}
