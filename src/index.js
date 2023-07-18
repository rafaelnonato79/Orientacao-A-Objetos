import {Carro} from './modules/carro.js';
// instanciando o objeto up     
const up = new Carro(`Up`,`VW`,2015);

// instanciando o objeto ka
const ka = new Carro(`Ka`,`Ford`,2006);

up.ligar()
console.log(`Velocidade inicial: ${up.velocidade}km/h`);

up.acelerar();
up.acelerar();

console.log(`Velocidade atual: ${up.velocidade}km/h`)

for(let i = 0 ;i < 1000; i++){
    up.acelerar();
}

console.log(`Velocidade atual: ${up.velocidade}km/h`);
up.frear();
up.frear();

console.log(`Velocidade atual: ${up.velocidade}Km/h`);

up.desligar();

console.log(`Velocidade atual: ${up.velocidade}km/h`);

for(let i=0;i<=20;i++){
    up.frear();
}
up.desligar();
console.log(`Velocidade atual:${up.velocidade}km/h`)