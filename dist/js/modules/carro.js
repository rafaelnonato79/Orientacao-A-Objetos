export class Carro{
    //atributos
    marca;
    modelo;
    ano;
    velocidade = 0;
    estado = false;  //pra dizer se o carro está ligado ou desligado.

    // construtor 
    constructor(modelo,marca,ano){
        this.modelo = modelo;
        this.marca = marca;
        this.ano = ano;
    }
    // metodos
    ligar(){
        if(this.estado == false){
            this.estado = true;
        }
        // ligue o carro
    };
    acelerar(){
        //aumente a velocidade em 10km/hra
        if(this.estado == true && this.velocidade < 200){
            this.velocidade += 10;
        }
    };
    frear(){
        //diminui a velocidade em 10km/hr
        if(this.estado == true && this.velocidade > 0){
            this.velocidade -=10
        }
    }

    desligar(){
        if(this.estado == true && this.velocidade <= 20){
            this.estado == false;
            this.velocidade = 0;
        }else{
            console.log(`Não é possível desligar o carro com velocidade acima de 20km/h`);
        }
    }

}