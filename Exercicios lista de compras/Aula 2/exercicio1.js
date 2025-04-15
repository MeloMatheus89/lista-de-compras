/* Exercício 1) Adicionando funcionalidade ao botão de salvar

Imagine que você está trabalhando no desenvolvimento de uma aplicação web para uma lista de tarefas. Você já tem o layout pronto e agora precisa fazer a parte funcional do botão de salvar.
 ```
<form>
<input class="input-item" type="text" placeholder="Digite a tarefa que deseja adicionar"></input>
<button class="button-item">Salvar tarefa</button>
</form>
```
Quando alguém digita um item no campo de texto e clica em "Salvar", o item deve ser adicionado à lista abaixo do campo de entrada. Vamos criar essa funcionalidade usando JavaScript.

No arquivo script.js, selecione o campo de entrada e o botão de salvar usando getElementById.
Adicione um ouvinte de eventos ao botão que, ao ser clicado, chama uma função para adicionar a tarefa à lista.
Dentro da função, obtenha o valor digitado no campo de entrada e crie um novo elemento HTML para esse item.
Imprima no console o valor dentro desse input.
*/

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
  // limpa o campo de entrada
  tarefa = "";
});
