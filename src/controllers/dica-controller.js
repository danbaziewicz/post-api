import Dica from "../models/dica-model.js"

const dicaController = (app)=> {
    app.post('/create', (req, res)=> {
        const body = req.body;
        const dica = new Dica(body.texto);
        dica.insertDica();
        res.json({"dicas": dica})
    })

    app.get('/tips', (req, res)=> {
        const dicaAleatoria = new Dica();
        res.json({"dicas": dicaAleatoria.retornarDica()})
    })
}

export default dicaController