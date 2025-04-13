import { adicionarItem } from "./js/adicionarItem.js";
import { verificarListaComprados } from "./js/verificarListaComprados.js";
// Separador de leitura
const botaoSalvarItem = document.getElementById("adicionar-botao");

// Adicionando o evento de clique no botão. Sintaxe do evento: elemento.addEventListener("evento", função)
botaoSalvarItem.addEventListener("click", adicionarItem);
const listaInfernal = document.getElementById("lista-comprados");
verificarListaComprados(listaInfernal);
console.log(listaInfernal.childElementCount);
