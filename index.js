class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar() {

        let ataque;

        if (this.tipo == "mago") {
            ataque = "magia"
        } else if (this.tipo == "guerreiro") {
            ataque = "espada"
        } else if (this.tipo == "monge") {
            ataque = "artes marciais"
        } else if (this.tipo == "ninja") {
            ataque = "shuriken"
        }
        console.log("O " + this.tipo + " atacou usando " + ataque);
    }
}

let heroi1 = new Heroi("DavyJones", 68, "mago");
let heroi2 = new Heroi("Entidade", 21, "monge");
let heroi3 = new Heroi("Jotinha", 17, "ninja");

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();