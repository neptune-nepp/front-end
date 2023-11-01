const protocolo = 'http://';
const baseURL = 'localhost:3000';
const filmesEndPoint = '/filmes';

async function obterFilmes(){
    // console.log("Tá fununsando meu querido")
    const URLcompleta = `${protocolo}${baseURL}${filmesEndPoint}`;
    const filmes = (await axios.get(URLcompleta)).data;
}
