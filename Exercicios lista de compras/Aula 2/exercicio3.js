/*
Exercício 3) Implementando controles dinâmicos em uma lista de compras

Neste exercício, você precisa construir uma funcionalidade em JavaScript que permite ao usuário adicionar novos itens em uma lista de tarefas, cada um com um checkbox associado. O desafio está em fazer com que cada checkbox tenha um ID único que se incrementa automaticamente, garantindo que cada item possa ser identificado individualmente.

*/

// Copiando as soluções dos exercicios anteriores para não precisar reescrever tudo

const botaoSalvarItem = document.getElementsByClassName("button-item"); // ou getElementById("adicionar-botao"), mas para isso precisaria adicionar um id no botão;
botaoSalvarItem.addEventListener("click", () => {
  const tarefa = document.getElementsByClassName("input-item").value; // ou getElementById("adicionar-botao"), mas para isso precisaria adicionar um id no botão;
  // Criar a lista
  //Cria o elemento que vai concentrar a lista de tarefas
  const listaDeTarefas = document.createElement("ul");
  // Cria o elemento que vai ser a tarefa unitária
  const novaTarefa = document.createElement("li");
  // Adiciona textos ao elemento
  novaTarefa.innerText = tarefa;
  listaDeTarefas.appendChild(novaTarefa);

  //Adiciona uma div para colocar a tarefa
  const divTarefa = document.createElement("div");
  divTarefa.classList.add("tarefa-container");

  // Adiciona a tarefa na div
  divTarefa.appendChild(novaTarefa);

  // Adiciona a lista de tarefas ao HTML
  document.body.appendChild(listaDeTarefas);
  // limpa o campo de e

  let contador = 0;

  const divCheckBox = document.createElement("div");
  divCheckBox.classList.add("checkbox-container");
  const checkboxInput = document.createElement("input");
  checkboxInput.type = "checkbox";
  checkboxInput.classList.add("checkbox-input");

  checkboxInput.id = "checkbox-" + contador++;

  //Agora vem a montagem do DOM (Document Object Model) de toda a lista de tarefas
  divTarefa.appendChild(divCheckBox);
  divCheckBox.appendChild(checkboxInput);
});

// Acho que seria isso. Precisaria testar, mas não tenho certeza se o código está certo.
