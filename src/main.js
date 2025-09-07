let players = [
  {
    nome: "Andressa Alves",
    posicao: "Meio-campo",
    clube: "Corinthians",
    foto: "https://example.com/andressa.jpg",
    gols: 15,
    assistencias: 10,
    jogos: 28,
    favorita: false,
  },
  {
    nome: "Dayana Rodríguez",
    posicao: "Meio-campo",
    clube: "Corinthians",
    foto: "https://example.com/dayana.jpg",
    gols: 5,
    assistencias: 12,
    jogos: 30,
    favorita: false,
  },
  {
    nome: "Mariza",
    posicao: "Zagueira",
    clube: "Corinthians",
    foto: "https://example.com/mariza.jpg",
    gols: 2,
    assistencias: 1,
    jogos: 32,
    favorita: false,
  },
  {
    nome: "Thaís Regina",
    posicao: "Zagueira",
    clube: "Corinthians",
    foto: "https://example.com/thais.jpg",
    gols: 1,
    assistencias: 2,
    jogos: 25,
    favorita: false,
  },
  {
    nome: "Letícia Teles",
    posicao: "Zagueira",
    clube: "Corinthians",
    foto: "https://example.com/leticia.jpg",
    gols: 0,
    assistencias: 0,
    jogos: 18,
    favorita: false,
  },
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

  const player = {
    nome: playerNome,
    posicao: playerPosicao,
    clube: playerClube,
    foto: playerFotoURL,
    gols: playerGols,
    assistencias: playerAssistencias,
    jogos: playerJogos,
    favorita: false,
  };

  players.push(player);
  console.log(players);
}


// READ
function displayPlayers() {
  const playerList = document.querySelector("#lista-de-jogadoras");
  playerList.innerHTML = ``;

  players.forEach((player, index) => {
    const playerElement = document.createElement("li");
    playerElement.classList.add("col-md-3");

    playerElement.innerHTML = `
          <div class="player-card">
            <img src="${player.foto}" class="player-img" alt="Foto de ${player.nome}">
            <h6>${player.posicao}</h6>
            <h5>${player.nome}</h5>
            <p><small>${player.clube}</small></p>
            <div class="stats">
              <span>${player.gols} Gols</span>
              <span>${player.assistencias} Assistências</span>
              <span>${player.jogos} Jogos</span>
            </div>
            <nav class="mt-2" aria-label="Ações da jogadora Marta">
              <button class="botao" title="Favoritar">
                <img src="./src/img/heart-fill.svg" alt="">
              </button>
              <button data-action="edit" data-index="${index} class="botao" title="Editar" id="botao-editar">
                <img src="./src/img/pencil-fill.svg" alt="">
              </button>
              <button data-action="delete" data-index="${index} class="botao" title="Excluir" id="botao-excluir">
                <img src="./src/img/trash-fill.svg" alt="">
              </button>
            </nav>
          </div>
        `;
    playerList.appendChild(playerElement);
  });
}
