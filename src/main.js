let times = []

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

let editandoIndex = null;

// CREATE
function addPlayers(event) {
  event.preventDefault();

  const playerNome = document.querySelector("#nome").value;
  const playerPosicao = document.querySelector("#posicao").value;
  const playerClube = document.querySelector("#clube").value;
  const playerFotoURL = document.querySelector("#foto").value;
  const playerJogos = document.querySelector("#jogos").value;
  const playerGols = document.querySelector("#gols").value;
  const playerAssistencias = document.querySelector("#assistencias").value;

  if (editandoIndex !== null) {
    // UPDATE
    players[editandoIndex] = {
      nome: playerNome,
      posicao: playerPosicao,
      clube: playerClube,
      foto: playerFotoURL,
      gols: parseInt(playerGols),
      assistencias: parseInt(playerAssistencias),
      jogos: parseInt(playerJogos),
      favorita: players[editandoIndex].favorita,
    };

    editandoIndex = null;
    document.querySelector("#form-title").textContent =
      "Adicionar nova jogadora";
    document.querySelector("#submit-button").textContent = "Adicionar Jogadora";
    document.querySelector("#cancel-edit").style.display = "none";
  } else {
    // CREATE
    const newPlayer = {
      nome: playerNome,
      posicao: playerPosicao,
      clube: playerClube,
      foto: playerFotoURL,
      gols: parseInt(playerGols),
      assistencias: parseInt(playerAssistencias),
      jogos: parseInt(playerJogos),
      favorita: false,
    };
    players.push(newPlayer);
  }

  mostrarAlerta("Jogadora adicionada com sucesso");

  resetForm();
  displayPlayers();
}

// READ
let timeFiltrado = null;

function displayPlayers() {
  const playerList = document.querySelector("#lista-de-jogadoras");
  playerList.innerHTML = ``;

  // Filtra jogadoras se um time estiver selecionado
  let jogadoresParaExibir = players;
  if (timeFiltrado && timeFiltrado !== "Filtrar por time") {
    jogadoresParaExibir = players.filter(player => player.clube === timeFiltrado);
  }

  jogadoresParaExibir.forEach((player, index) => {
    const playerElement = document.createElement("li");
    playerElement.classList.add("col-md-3");

    if(!times.includes(player.clube)) {
      times.push(player.clube);
      adicionarFiltrosPorTime()
    }

    const cardClass = player.favorita ? "player-card favorita" : "player-card";

    playerElement.innerHTML = `
      <div class="${cardClass}">
        <img src="${player.foto}" class="player-img" alt="Foto de ${player.nome}">
        <h6>${player.posicao}</h6>
        <h5>${player.nome}</h5>
        <p><small>${player.clube}</small></p>
        <div class="stats">
          <span>${player.gols} Gols</span>
          <span>${player.assistencias} Assistências</span>
          <span>${player.jogos} Jogos</span>
        </div>
        <nav class="mt-2" aria-label="Ações da jogadora ${player.nome}">
          <button class="botao" title="Favoritar" data-action="favoritar" data-index="${index}">
            <img src="./src/img/heart.svg" alt="Favoritar">
          </button>
          <button data-action="edit" data-index="${index}" class="botao" title="Editar">
            <img src="./src/img/pencil-fill.svg" alt="Editar">
          </button>
          <button data-action="delete" data-index="${index}" class="botao" title="Excluir">
            <img src="./src/img/trash-fill.svg" alt="Excluir">
          </button>
        </nav>
      </div>
    `;
    playerList.appendChild(playerElement);
  });

  // Editar
  document.querySelectorAll('[data-action="edit"]').forEach((button) => {
    button.addEventListener("click", function () {
      const index = this.getAttribute("data-index");
      editPlayer(index);
    });
  });

  // Deletar
  document.querySelectorAll('[data-action="delete"]').forEach((button) => {
    button.addEventListener("click", function () {
      const index = this.getAttribute("data-index");
      deletePlayer(index);
    });
  });

  // Favoritar
  document.querySelectorAll('[data-action="favoritar"]').forEach((button) => {
    button.addEventListener("click", function () {
      const index = this.getAttribute("data-index");
      alterarFavorito(index);
    });
  });
}

function alterarFavorito(index) {
  players[index].favorita = !players[index].favorita;
  displayPlayers();
}

// UPDATE
function editPlayer(index) {
  const player = players[index];

  document.querySelector("#nome").value = player.nome;
  document.querySelector("#posicao").value = player.posicao;
  document.querySelector("#clube").value = player.clube;
  document.querySelector("#foto").value = player.foto;
  document.querySelector("#jogos").value = player.jogos;
  document.querySelector("#gols").value = player.gols;
  document.querySelector("#assistencias").value = player.assistencias;

  editandoIndex = index;
  document.querySelector("#form-title").textContent = "Editar Jogadora";
  document.querySelector("#submit-button").textContent = "Salvar Alterações";
  document.querySelector("#cancel-edit").style.display = "block";
}

// DELETE
function deletePlayer(index) {
  if (confirm("Tem certeza que deseja excluir esta jogadora?")) {
    players.splice(index, 1);
    mostrarAlerta("Jogadora removida com sucesso");
    displayPlayers();
  }
}

// Reset Forms
function resetForm() {
  document.querySelector("#nome").value = "";
  document.querySelector("#posicao").value = "";
  document.querySelector("#clube").value = "";
  document.querySelector("#foto").value = "";
  document.querySelector("#jogos").value = "";
  document.querySelector("#gols").value = "";
  document.querySelector("#assistencias").value = "";
}

// Alerta de Feedback
function mostrarAlerta(mensagem) {
  let alertContainer = document.querySelector("#alert-container");
  alertContainer.style.display = "block";
  document.querySelector("#alert-message").textContent = mensagem;

  setTimeout(() => {
    alertContainer.style.display = "none";
  }, 3000);
}

// Iniciando
document.addEventListener("DOMContentLoaded", function () {
  displayPlayers();
  document.querySelector("#form").addEventListener("submit", addPlayers);

  const form = document.querySelector("#form");
  const cancelButton = document.createElement("button");
  cancelButton.type = "button";
  cancelButton.className = "btn btn-secondary w-100 p-3 mt-2";
  cancelButton.textContent = "Cancelar Edição";
  cancelButton.id = "cancel-edit";
  cancelButton.style.display = "none";

  cancelButton.addEventListener("click", function () {
    resetForm();
    editandoIndex = null;
    document.querySelector("#form-title").textContent =
      "Adicionar nova jogadora";
    document.querySelector("#submit-button").textContent = "Adicionar Jogadora";
    this.style.display = "none";
  });

  form.querySelector("fieldset").appendChild(cancelButton);

  // Evento para filtro de times
  document.querySelector("#filtro-time").addEventListener("change", function () {
    timeFiltrado = this.value;
    displayPlayers();
  });
});


// Filtar por time
function adicionarFiltrosPorTime(){
  let listaDeFiltros = document.querySelector("#filtro-time");
  listaDeFiltros.innerHTML = `
    <option selected>Filtrar por time</option>
  `
  times.forEach(time => {
    listaDeFiltros.innerHTML += `
      <option>${time}</option>
    `
  })
}