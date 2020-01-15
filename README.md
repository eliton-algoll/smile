Este projeto foi feito com React Js, pois tive um imprevisto no quartel e portanto não achei que daria tempo de verificar a sintaxe e escopo do Vue para fazer este teste, visto que não tenho experiência com Vue e sim com React. Também não tive tempo de criar os testes automatizados, onde trabalho hoje, existem os "testadores" que são responsáveis somente para fazer os TDD's, portanto os programadores não costumam escrever os testes. Porém segue descrição de como foi feito.

## Iniciando a aplicação

Para iniciar a aplicação basta executar:

### `yarn start` ou `npm start`

## Estrutura utilizada

Foram criados 3 componentes funcionais que detêm a estrutura lógica da aplicação e 1 Styled Component com os componentes de estilização. Os componentes são:

Indifferent - Renderiza a tela com o emoji nem triste nem feliz :|

Sad - Renderiza a tela com o emoji triste :(

Happy - Renderiza a tela onde será apresentado o modal com a piada e o efeito que faz com que o emoji altere o humor de triste para feliz :), além de retornar para o componente Indifferent após finalização do seu ciclo de vida.

## Lógica

A lógica utilizada foi a seguinte:

A aplicação possui 3 rotas específicas que renderizam os componentes, a Rota inicial "/" renderiza o componente Indifferent, ao clicar no emoji o usuário é redirecionado para a rota "sad" que renderiza o componente Sad, no segundo clique ele é redirecionado para a rota "happy" que renderiza o componente Happy, neste componente é utilizado a lib Axios para consumir a api de piadas indicada, após receber a resposta da api, é executado um splite na resposta para determinar a quantidade de palavras da piada, depois é executado um setTimeout que durará exatamente a quantidade de palavras multiplicado por 500 milisegundos(meio segundo), deduzindo que na média seja suficiente para a leitura da piada. Nesse meio tempo é aberto um Modal contendo a piada, e com botão de fechar desabilitado, após passado o tempo de execução, o botão Fechar é habilitado. Ao clicar em fechar no modal, o usuário é redirecionado para a rota principal que renderiza o componente Indifferent, e o contador de clique é reiniciado.

Para a mudança de humor do emoji foi utilizado um efeito em CSS que altera a forma dos olhos e da boca indo de 0 a 100% durando o tempo que foi pré estabelecido conforme explicado acima.

Para gerenciamento dos estados foi utilizado React Hook (useState). Para controlar os "efeitos colaterias", foi utilizado outro React Hook (useEffect).