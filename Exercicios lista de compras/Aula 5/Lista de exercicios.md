## Exercício 1) Capturando a data atual

Você está trabalhando nesse projeto de lista de tarefas e quer acrescentar a data e o horário em que uma tarefa foi adicionada à lista, então agora você recebeu um desafio! Sua missão é criar uma função que capture o momento atual e exiba esse valor no console do navegador.

## Exercício 2) Ajustando o formato do dia da semana

Ao capturar a data no exercício anterior o formato que você obteve deve ser parecido com esse exemplo:

`Wed Nov 27 2024 13:09:09 GMT-0300 (Horário Padrão de Brasília)`

Contudo, não é um formato fácil de entender e por isso agora, seu objetivo é manipular o valor do dia da semana para ser exibido como o exemplo abaixo:

`quarta-feira`

Uma dica valiosa é que você pode usar o método toLocaleDateString() para te ajudar nesse processo.

## Exercício 3) Exibindo a data no formato brasileiro

No exercício anterior, você ajustou o dia da semana para que ele fosse exibido com nome completo. Agora chegou a vez de formatar a data no formato brasileiro para que ele fique da seguinte maneira:

`dd/mm/aaaa `

Seu objetivo é usar novamente o método toLocaleDateString() com algumas alterações no parâmetro de opções para formatar a data e obter o padrão apresentado no exemplo acima. Além disso, você precisa exibir no console tanto o dia da semana quanto a data formatada. O resultado deve ser:

`quarta-feira, dd/mm/aaaa`

Uma dica para exibir ambas as informações é usar as template strings no retorno da função.

## Exercício 4) Formatando o horário

Você já formatou o dia da semana e a data, agora é o momento de formatar o horário para que ele seja exibido da seguinte maneira:

`hh:mm`

Seu objetivo é criar uma nova constante e usar a função toLocaleTimeString de maneira similar ao que foi feito anteriormente com o método toLocaleDateString. Além disso, você precisa exibir no console do navegador o dia da semana, a data e a hora.

## Exercício 5) Implementando a data e horário dos itens na lista

Agora que você formatou a data, precisa aplicar essa função na tela ao lado de cada item.

A estrutura do seu HTML é a seguinte:

`<!DOCTYPE html>

<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de tarefas</title>
</head>
<body>
    <h1>Lista de tarefas</h1>
    <div>
        <input type="text" id="tarefaInput" placeholder="Digite uma tarefa">
        <button id="adicionarButton">Adicionar</button>
    </div>
    <ul id="listaTarefas"></ul>
    <script src="script.js"></script>
</body>
</html>`

No seu JavaScript você possui a seguinte estrutura:
`
//Constantes que capturam os elementos HTML
const tarefaInput = document.getElementById("tarefaInput");
const adicionarButton = document.getElementById("adicionarButton");
//Aplica um ouvidor de eventos que ao ser clicado vai executar a função adicionarItemNaLista
adicionarButton.addEventListener("click", adicionarItemNaLista);

//Função que gera e formata a data e hora atual
function gerarData() {
const dataAtual = new Date();
const diaDaSemana = dataAtual.toLocaleDateString("pt-BR", { weekday: "long" });
const dataCompleta = dataAtual.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });
const hora = dataAtual.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
return `${diaDaSemana}, ${dataCompleta} às ${hora}`;
}

//Função que adiciona uma nova atividade na lista de tarefas
function adicionarItemNaLista(){
const tarefa = tarefaInput.value;
if (tarefa) {
const novaTarefa = document.createElement("li");
novaTarefa.textContent = tarefa;
const listaTarefas = document.getElementById("listaTarefas");
listaTarefas.appendChild(novaTarefa);
tarefaInput.value = "";
}
}
`

Com este código em mãos, implemente a função gerarData() para que ao adicionar um item na lista o resultado apareça da seguinte maneira:

`estudar react - quarta-feira, 27/11/2024 às 14:51`
