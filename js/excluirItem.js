import { verificarListaComprados } from "./verificarListaComprados.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const listaInfernal = document.getElementById("lista-comprados");
const listaDeComprasTemp = document.getElementById("lista-de-compras");
const excluirItem = (elemento) => {
  let confirmacao = confirm("Tem certeza que deseja excluir o item?");

  if (confirmacao) {
    elemento.remove();
    verificarListaVazia(listaDeComprasTemp);
    verificarListaComprados(listaInfernal);
  }
};

export { excluirItem };
