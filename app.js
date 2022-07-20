import express from 'express';
import dicaController from './src/controllers/dica-controller.js';
import dicasArr from './src/infra/dicas-database.js';

const app = express()
const port = 3333

app.use(express.json())




// do {
//     dicasArr.push(entry)
//     entry = prompt('Insira uma dica ou digite sair: ')
//     console.log(dicasArr)
// } while (entry.toLowerCase() !== 'sair')

// TODO: Chamar os controllers 
dicaController(app)

app.listen(port, ()=> {
    console.log(`http://localhost:${port}/`)
})