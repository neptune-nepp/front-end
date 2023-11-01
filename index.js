const express = require ('express')
const app = express()
app.use(express.json())

let filmes = [
    {
    titulo: "Forrest Gump - O Contador de Histórias",
    sinopse: "Quarenta anos da história dos Estados Unidos, vistos pelos olhos de Forrest Gump (Tom Hanks),um rapaz com QI abaixo da média e boas intenções."
    },
    {
    titulo: "Um Sonho de Liberdade",
    sinopse: "Em 1946, Andy Dufresne (Tim Robbins), um jovem e bem sucedido banqueiro, tem a sua vida radicalmente modificada ao ser condenado por um crime que nunca cometeu, o homicídio de sua esposa e do amante dela"
    }
]

//GET http://localhost:3000/filmes
app.get('/filmes', (req, res) => {
res.json(filmes)
})

// ponto de acesso para inserir um novo filme EEEEEM MEMORIAAAA
app.post('/filmes', (req, res) => {
    //recupera os dados da requisição
    const titulo = req.body.titulo;
    const sinopse = req.body.sinopse;
    //monta o objeto Json
    const filme = {
        titulo: titulo,
        sinopse: sinopse
    }
    // insere o filme novo na lista filmes
    filmes.push(filme);
    // só para conferir
    res.json(filmes);
})

app.listen(3000, () => console.log("up and running"))

        
            
