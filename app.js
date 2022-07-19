import promptSync from 'prompt-sync';
import express from 'express';
import dicaController from './src/controller/dica-controller.js';
import dicas from './dicas-db.js'

const app = express();
const port = 3333;

const promp = promptSync();
let entry = promp('Insira uma dica: ');

do {
    dicasArr.push(entry)
    entry = prompt('Insira uma dica ou digite sair: ')
    console.log(dicasArr)
} while (entry.toLowerCase() !== 'sair')

//chamar controler

dicaController(app)

app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})