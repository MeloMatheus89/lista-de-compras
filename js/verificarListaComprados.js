const containerListaComprados = document.getElementById("container-comprados");

export function verificarListaComprados(lista) {
  console.log("Função infeliz sendo chamada");
  if (lista.querySelectorAll("li").length === 0) {
    containerListaComprados.style.display = "none";
  } else {
    containerListaComprados.style.display = "block";
  }
  console.log(`Container está como ${containerListaComprados.style.diplay}`);
}
