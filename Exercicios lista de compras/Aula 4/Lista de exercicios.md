## Exercício 1: Refatorando o código da lista de compras

Você está trabalhando em um projeto de lista de tarefas e o arquivo script.js está ficando muito grande, com 88 linhas. Sua liderança solicitou a separação de mais uma funcionalidade do arquivo script.js. Agora, você deve mover a lógica de criação do item da lista para um novo arquivo. Crie o arquivo criarItemDaLista.js e mova o código que cria os elementos HTML do item de compra para essa função.

## Exercício 2: Removendo item fixo da lista de compras

Você trabalha com desenvolvimento web e precisa ajustar uma aplicação de lista de tarefas.
``

 <ul>
                <li>
                    <div class="lista-item-container">
                        <div>
                            <div class="container-checkbox">
                        <input type="checkbox" class="input-checkbox" id="checkbox-1" />
                               
                            </div>
                            <p>Comprar ração</p>
                        </div>

                        <div>
                            <button class="item-lista-button">
                                <img src="./img/delete.svg" alt="remover">
                            </button>
                            <button class="item-lista-button">
                                <img src="./img/edit.svg" alt="editar">
                            </button>
                        </div>
                    </div>
                </li>
            </ul>

``

No momento, a lista contém um item fixo ("Comprar ração.": que deve ser removido. Para isso, vamos editar o arquivo index.html e garantir que o item não apareça mais

## Exercício 3: Exibindo mensagem de lista vazia

Quando a lista de tarefas está vazia, é importante que o usuário receba um feedback visual. Vamos adicionar uma mensagem de aviso com HTML e garantir que ela apareça somente quando a lista estiver vazia com JavaScript.

## Exercício 4: Implementando a verificação de lista vazia

Você está trabalhando em uma plataforma e precisa melhorar a usabilidade. Uma das maneiras de fazer isso é adicionar mensagens de feedback para que o usuário saiba o que está acontecendo na tela. Crie uma função em JavaScript que verifique se uma lista está vazia e mostre ou esconda uma mensagem de acordo com o resultado.

## Exercício 5: Personalizando a mensagem de lista vazia

Para tornar a mensagem de lista vazia mais informativa e amigável, você vai personalizá-la para que exiba o nome da lista e uma mensagem encorajadora. Por exemplo, "A lista de tarefas está vazia. Adicione itens para começar!". Faça isso através de uma função JavaScript que verifique se a lista está vazia.
