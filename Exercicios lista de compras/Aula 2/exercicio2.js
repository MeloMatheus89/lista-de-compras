/*
2) Criando um checkbox dinâmico com JavaScript

Você está trabalhando em um projeto de lista de tarefas e sua tarefa é adicionar checkboxes dinamicamente para cada item que o usuário inclui na lista. Cada checkbox deve ter um ID único que aumenta automaticamente conforme novos itens são adicionados. Use seu conhecimento em JavaScript para criar uma função que gera esses elementos e os insere no DOM conforme descrito.
*/

let contador = 0;

const divCheckBox = document.createElement("div");
divCheckBox.classList.add("checkbox-container");
const checkboxInput = document.createElement("input");
checkboxInput.type = "checkbox";
checkboxInput.classList.add("checkbox-input");

checkboxInput.id = "checkbox-" + contador++;
