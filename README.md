# ⚽ Futebol Delas – Sistema de Cadastro de Jogadoras

Uma aplicação web simples e funcional para cadastro de jogadoras de futebol feminino.  
O sistema permite CRUD, ou seja, **inserir, listar, editar e excluir jogadoras**, armazenando os dados no **LocalStorage** do navegador, simulando um banco de dados local.  

---

## 🚀 Funcionalidades

- **Adicionar jogadoras** com informações como:
  - Nome
  - Posição
  - Clube
  - Foto (URL)
  - Jogos
  - Gols
  - Assistências
- **Listar jogadoras** em cards com foto, estatísticas e time.
- **Editar informações** de qualquer jogadora cadastrada.
- **Excluir jogadoras** com confirmação.
- **Favoritar jogadoras** para destaque na interface.
- **Filtrar jogadoras por time**.
- **Buscar por nome ou posição**.
- **Ordenar alfabeticamente** (A-Z ou Z-A).
- **Alertas de feedback** em todas as ações.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** (estrutura semântica)  
- **CSS3 / Bootstrap** (estilização e responsividade)  
- **JavaScript (ES6+)** (manipulação do DOM e regras de negócio)  
- **LocalStorage** (persistência de dados no navegador) 

---

## 📦 Exemplo de Dados Iniciais

O sistema já carrega algumas jogadoras automaticamente no primeiro acesso, simulando um banco de dados inicial:

```json
[
  {
    "nome": "Andressa Alves",
    "posicao": "Meio-campo",
    "clube": "Corinthians",
    "foto": "https://cdn.media-acidadeon.com.br/tudoep/wp-content/uploads/sites/10/2024/12/AndressaAlves-SamRoblesCBF_2024-12-13_18-24-33_jpg_2024-12-13_18-24-33.webp",
    "gols": 15,
    "assistencias": 10,
    "jogos": 28,
    "favorita": false
  },
  {
    "nome": "Dayana Rodríguez",
    "posicao": "Meio-campo",
    "clube": "Corinthians",
    "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdIqAN_3AvftCArwguInUx3N862HtMjgshtQ&s",
    "gols": 5,
    "assistencias": 12,
    "jogos": 30,
    "favorita": false
  }
]
```

---

## 🎮 Como Usar

1. Clone este repositório ou baixe os arquivos.  
2. Abra o arquivo **`index.html`** no navegador.  
3. Cadastre, edite, delete ou filtre jogadoras diretamente na interface.  
4. Todas as informações ficam **salvas no LocalStorage** do navegador.  

---

## 🖥 Link do GitHub Pages
- https://ulissese.github.io/FutGirls
---

## 👩‍💻 Autor

Projeto desenvolvido por:
- **Eduardo Ulisses**
- **Eduardo Duran Del Ciel**

📚 Trabalho acadêmico para a disciplina **Web Development**, ministrada pelo professor **Caio Oliveira**.  
