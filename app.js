import { adicionarItem } from "./js/adicionarItem.js";
import { verificaListaComprados } from "./js/verificaListaComprados.js";
// Separador de leitura
const botaoSalvarItem = document.getElementById("adicionar-botao");

botaoSalvarItem.addEventListener("click", adicionarItem);
const listaInfernal = document.getElementById("lista-comprados");
verificaListaComprados(listaInfernal.childElementCount);
console.log(listaInfernal.childElementCount);
