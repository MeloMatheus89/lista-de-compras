/*
Exercício 4) Criando e manipulando elementos no DOM

Imagine que você está desenvolvendo uma lista de músicas interativa. Para adicionar novos itens à lista, você precisa capturar o texto digitado pelo usuário e exibi-lo em uma nova entrada na lista com opções de editar e remover.

Utilize o código descrito para construir um exercício prático em que você irá criar os elementos de lista (li), o container para os itens, e adicionar classes CSS a eles dinamicamente usando JavaScript.

Crie um elemento li e armazene-o em uma variável chamada itemDaLista.
Crie uma div chamada containerItemLista e adicione a ela a classe "ListaIfInItemIfInContainer".
Insira o containerItemLista dentro do itemDaLista usando o método appendChild.
Adicione um elemento p para mostrar o nome do item da lista, cujo conteúdo será o texto inserido pelo usuário em um campo de entrada.
Adicione a div com o nome do item e os botões de ação dentro do containerItemLista.
*/

const itemDaLista = document.createElement("li");
const containerItemLista = document.createElement("div");
containerItemLista.classList.add("ListaIfInItemIfInContainer");

itemDaLista.appendChild(containerItemLista);
const nomeDoItem = document.createElement("p");
nomeDoItem.textContent = "Nome do item da lista"; // Aqui é o valor de algum campo de input text type perdido por aí.
nomeDoItem.appendChild(itemDaLista);
