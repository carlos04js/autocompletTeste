const arrayNomes = [
  "Adriano",
  "Diego",
  "Leandro",
  "Christian",
  "Benjamin",
  "Eduardo",
  "Emílio",
  "Mateus",
  "Edson",
  "Teobaldo",
  "Amarildo",
  "Jonas",
  "Juliana",
  "Vicente",
  "Marciano",
  "Fagner",
  "Jacinto",
  "Adriano",
  "IagoChico",
];

const ordenarNomes = arrayNomes.sort();

const input = document.querySelector("input");

input.addEventListener("keyup", () => {
  limparLista();

  for (let nome of ordenarNomes) {
    if (
      nome.toLowerCase().startsWith(input.value.toLowerCase()) &&
      input.value != ""
    ) {
      const listaItem = document.createElement("li");
      listaItem.classList.add("lista-item");
      let novoNome = "<b>" + nome.substr(0, input.value.length) + "</b>";
      novoNome += nome.substr(input.value.length);
      listaItem.innerHTML = novoNome;
      document.querySelector(".lista").appendChild(listaItem);
      listaItem.setAttribute("onclick", "adicionarNome('" + nome + "')");
    }
  }
});

function adicionarNome(nome) {
  input.value = nome;
  limparLista();
}

function limparLista() {
  document.querySelectorAll(".lista-item").forEach((item) => {
    item.remove();
  });
}
