import { criarItemDaLista } from "./criarItemDaLista.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const listaDeCompras = document.getElementById("lista-de-compras");
const item = document.getElementById("input-item");

export function adicionarItem(evento) {
  evento.preventDefault();

  if (item.value === "") {
    alert("Por favor, insira um item na lista.");
    return; // Return usado apenas para travar a execução da lista
  }
  const itemDaLista = criarItemDaLista(item.value);
  listaDeCompras.appendChild(itemDaLista);
  verificarListaVazia(listaDeCompras);
  item.value = "";
}
