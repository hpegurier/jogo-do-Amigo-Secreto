//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Lista para armazenar os nomes
let amigos = [];

function adicionarAmigo() {
  let input = document.getElementById("nomeAmigo");
  let nome = input.value.trim();

  if (nome === "") {
    alert("Por favor, digite um nome válido!");
    return;
  }

  amigos.push(nome); // adiciona no array
  input.value = "";  // limpa o campo
  exibirLista();
}

function exibirLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // limpa a lista antes de recriar

  amigos.forEach(function(amigo) {
    let li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("A lista está vazia! Adicione pelo menos um nome.");
    return;
  }

  let indiceSorteado = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceSorteado];

  document.getElementById("resultado").textContent =
    "O amigo secreto é: " + amigoSorteado;
}
