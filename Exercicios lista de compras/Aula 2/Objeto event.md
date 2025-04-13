# Objeto Event

## Definição:

- Eventos são ações ou ocorrências que acontecem no sistema que você está programando, como um clique do mouse, pressionamentos de teclas, movimentos do mouse, etc. E para cada um desses eventos, o JavaScript nos permite interagir com eles através de algo chamado "objeto event".

## O que é o Objeto Event?

- Imagine que você está em uma festa (o seu site ou aplicação web) e cada vez que algo notável acontece (como alguém abrir a porta, alguém apertar um botão de um jogo), isso é um evento. Agora, imagine que você tem um amigo (o objeto event) que anota tudo o que acontece nesses eventos - quem abriu a porta, que botão foi pressionado, etc. Esse amigo é muito detalhista e escreve todas as informações sobre o que aconteceu. No mundo do JavaScript, esse amigo é o objeto event.

## Propriedades do Objeto Event:

- O objeto event contém várias propriedades que nos dão informações sobre o evento que ocorreu. Aqui estão algumas das mais comuns:

1. type: diz qual foi o tipo do evento (click, mouseover, keyup, etc.).
2. target: refere-se ao elemento que disparou o evento.
3. currentTarget: semelhante ao target, mas se refere ao elemento ao qual o evento foi realmente atribuído.
4. clientX / clientY: fornece a posição horizontal e vertical do mouse quando um evento do mouse foi disparado.
5. keyCode: no caso de um evento de teclado, diz qual tecla foi pressionada.

## Métodos do Objeto Event:

Além das propriedades, o objeto event também tem métodos (ações) que você pode usar. Dois dos mais usados são:

preventDefault(): impede que o comportamento padrão do evento aconteça. Por exemplo, impede que um link abra uma nova página.
stopPropagation(): impede que o evento continue a ser propagado. Ou seja, ele não deixa o evento "borbulhar" para os elementos pais.
