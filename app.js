import { adicionarItem } from "./js/adicionarItem.js";
import { verificarListaComprados } from "./js/verificarListaComprados.js";
// Separador de leitura
const botaoSalvarItem = document.getElementById("adicionar-botao");

botaoSalvarItem.addEventListener("click", adicionarItem);
const listaInfernal = document.getElementById("lista-comprados");
verificarListaComprados(listaInfernal);
console.log(listaInfernal.childElementCount);
