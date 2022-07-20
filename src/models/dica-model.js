import objDica from '../infra/dicas-database.js'

let id = 0;

class Dica {
    constructor(text) {
        this.id = id++;
        this.texto = text;
    }

    insertDica() {
        objDica.dicasArr.push(this);
    }

    retornarDica() {
        let randomTip = Math.floor(Math.random() * objDica.dicasArr.length);
        console.log(randomTip)
        return objDica.dicasArr[randomTip];
    }
}

export default Dica
