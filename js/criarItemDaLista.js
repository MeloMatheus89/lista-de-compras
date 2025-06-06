import { editarItem } from "./editarItem.js";
import { excluirItem } from "./excluirItem.js";
import { verificarListaComprados } from "./verificarListaComprados.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const listaComprados = document.getElementById("lista-comprados");
// variável abaixo criada apenas para garantir o funcionamento do marca desmarca da lista de compras/comprados
const listaDeComprasTemp = document.getElementById("lista-de-compras");
// const containerListaCompradosTemp = document.getElementById("container-comprados")

let contador = 0;

export function criarItemDaLista(item) {
  //Cria uma variável associada a tag HTML chamada li
  const itemDaLista = document.createElement("li");
  //Cria uma variável associada a tag HTML div
  const containerItemLista = document.createElement("div");
  //pega a variável criada e adiciona nela a classe com o nome dentro do parênteses
  containerItemLista.classList.add("item-lista-container");

  /*Criação do checkbox*/

  const containerCheckbox = document.createElement("div");
  containerCheckbox.classList.add("checkbox-container");

  /*Criando o Input*/

  const checkboxInput = document.createElement("input");
  checkboxInput.type = "checkbox";
  checkboxInput.classList.add("checkbox-input");
  checkboxInput.id = "checkbox-" + contador++;

  const checkboxLabel = document.createElement("label");
  //Usando um contador para garantir a sequência do checkbox label
  checkboxLabel.setAttribute("for", checkboxInput.id);

  //adicionando um ouvinte de eventos
  // função anônima é quando você não dá nome para a função
  /* elas são úteis para quando só se pretende usar uma única vez a função */
  checkboxLabel.addEventListener("click", function (evento) {
    const checkboxInput = evento.currentTarget.querySelector(".checkbox-input");
    const checkboxPersonalizado = evento.currentTarget.querySelector(".checkbox-personalizado");
    /* Essa linha abaixo é um pouco complexa de entender. Então vamos por partes... 
    Ela vai associar o evento de clicar no elemento `closest("elemento")` que tenha esse id de `querySelector("#idDoElemento")`*/
    const itemTitulo = evento.currentTarget.closest("li").querySelector("#item-titulo");

    if (checkboxInput.checked) {
      checkboxPersonalizado.classList.add("checked");
      listaComprados.appendChild(itemDaLista);
      itemTitulo.style.textDecoration = "line-through";
    } else {
      checkboxPersonalizado.classList.remove("checked");
      //criei essa variável lá em cima para garantir que resolvesse o problema de adicionar ou editar o item da lista. Sim... Me parece gambiarra.
      // Não entendi pq após checar como comprado a primeira vez que separamos os arquivos em arquivos menores, ele não funciona na hora de desmarcar
      itemTitulo.style.textDecoration = "none";
      listaDeComprasTemp.appendChild(itemDaLista);
    }
    verificarListaComprados(listaComprados);
    verificarListaVazia(listaDeComprasTemp);
  });

  const checkboxPersonalizado = document.createElement("div");
  checkboxPersonalizado.classList.add("checkbox-personalizado");

  const containerNomeDoItem = document.createElement("div");
  containerNomeDoItem.classList.add("container-lista-de-compra");
  const nomeDoItem = document.createElement("p");
  nomeDoItem.id = "item-titulo";
  nomeDoItem.innerText = item;

  /* Organizando quem é filho de quem*/
  checkboxLabel.appendChild(checkboxInput);
  checkboxLabel.appendChild(checkboxPersonalizado);
  containerCheckbox.appendChild(checkboxLabel);
  containerNomeDoItem.appendChild(containerCheckbox);

  //Ensina a hereditariedade dos elementos HTML. O pai fica antes do .appendChild(filho)
  containerNomeDoItem.appendChild(nomeDoItem);

  const containerBotoes = document.createElement("div");

  /*  Início da adição do botão remover na lista de compras*/

  const botaoRemover = document.createElement("button");
  botaoRemover.classList.add("botao__acao");
  const imagemRemover = document.createElement("img");
  imagemRemover.src = "img/delete.svg";
  imagemRemover.alt = "Remover";

  //
  botaoRemover.addEventListener("click", function () {
    excluirItem(itemDaLista);
  });

  botaoRemover.appendChild(imagemRemover);
  containerBotoes.appendChild(botaoRemover);

  /* início da adiçao do botão editar na lista de compras */

  const botaoEditar = document.createElement("button");
  botaoEditar.classList.add("botao__acao");
  const imagemEditar = document.createElement("img");
  imagemEditar.src = "img/edit.svg";
  imagemEditar.alt = "Editar";

  botaoEditar.appendChild(imagemEditar);
  containerBotoes.appendChild(botaoEditar);

  botaoEditar.addEventListener("click", function () {
    editarItem(itemDaLista);
  });

  /* Xablau1 vira classe pai do que está dentro dos parênteses. Exemplo:
  container.appendChild(elementoQualquer);

  Isso pode ser lido como "elementoQualquer" vira uma classe dentro de container.
  Como essa relação pode ser repetida diversas vezes, isso permite que eu imprima já no estilo correto do CSS as informações de forma padronizada na tela. Isso garante uma tela dinâmica.
  Todo esse processo é chamado de Manipulação de DOM.

  Vale lembrar que o que permite a estilização é a propriedade .classList.add do JS.
  Isso permite que o elemento fique sempre no estilo adicionado.


  */
  containerItemLista.appendChild(containerNomeDoItem);
  containerItemLista.appendChild(containerBotoes);

  const itemData = document.createElement("p");
  //insere o dia da semana, dia do mês e hora atual no formato pt-BR.
  itemData.innerText = `${new Date().toLocaleDateString("pt-BR", { weekday: "long" })} ${new Date().toLocaleDateString()} às ${new Date().toLocaleTimeString("pt-BR", {
    hour: "numeric",
    minute: "numeric",
  })} `;
  itemData.classList.add("item-data");
  itemDaLista.appendChild(containerItemLista);
  itemDaLista.appendChild(itemData);
  return itemDaLista;
}
