import { criarItemDaLista } from "./criarItemDaLista.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const listaDeCompras = document.getElementById("lista-de-compras");
const item = document.getElementById("input-item");

export function adicionarItem(evento) {
  evento.preventDefault();

  const itemDaLista = criarItemDaLista(item.value);
  listaDeCompras.appendChild(itemDaLista);
  verificarListaVazia(listaDeCompras);
}
