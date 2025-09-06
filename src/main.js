let players =
[
  {
    "nome": "Andressa Alves",
    "posicao": "Meio-campo",
    "clube": "Corinthians",
    "foto": "https://example.com/andressa.jpg",
    "gols": 15,
    "assistencias": 10,
    "jogos": 28,
    "favorita": false
  },
  {
    "nome": "Dayana Rodríguez",
    "posicao": "Meio-campo",
    "clube": "Corinthians",
    "foto": "https://example.com/dayana.jpg",
    "gols": 5,
    "assistencias": 12,
    "jogos": 30,
    "favorita": false
  },
  {
    "nome": "Mariza",
    "posicao": "Zagueira",
    "clube": "Corinthians",
    "foto": "https://example.com/mariza.jpg",
    "gols": 2,
    "assistencias": 1,
    "jogos": 32,
    "favorita": false
  },
  {
    "nome": "Thaís Regina",
    "posicao": "Zagueira",
    "clube": "Corinthians",
    "foto": "https://example.com/thais.jpg",
    "gols": 1,
    "assistencias": 2,
    "jogos": 25,
    "favorita": false
  },
  {
    "nome": "Letícia Teles",
    "posicao": "Zagueira",
    "clube": "Corinthians",
    "foto": "https://example.com/leticia.jpg",
    "gols": 0,
    "assistencias": 0,
    "jogos": 18,
    "favorita": false
  }
];

// CREATE
function addPlayers() {

    const playerNome = document.querySelector("#nome").value;
    const playerPosicao = document.querySelector("#posicao").value;
    const playerClube = document.querySelector("#clube").value;
    const playerFotoURL = document.querySelector("#foto").value;

    const playerJogos = document.querySelector("#jogos").value;
    const playerGols = document.querySelector("#gols").value;
    const playerAssistencias = document.querySelector("#assistencias").value;

    const player = 
    {
        nome: playerNome,
        posicao: playerPosicao,
        clube: playerClube,
        foto: playerFotoURL,
        gols: playerGols,
        assistencias: playerAssistencias,
        jogos: playerJogos,
        favorita: false
    }

    players.push(player)
    console.log(players)
}