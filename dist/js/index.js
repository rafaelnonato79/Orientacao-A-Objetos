import { ContaCorrente } from "./model/conta-corrente.js";
import { Pessoa } from "./model/pessoa.js";
const mauricio = new Pessoa("Mauricio", "123.456.789-00", 30, "M");
const contaMauricio = new ContaCorrente(100, 1, mauricio);
contaMauricio.depositar(1000);
window.alert(`Correntista: ${contaMauricio.titular.nome}`);
window.alert(`Saldo: ${contaMauricio.saldo}`);
