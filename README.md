# Valora #

Quer trabalhar em um lugar de constante aprendizado e participar da construção de uma startup em crescimento? Esse lugar é na Valora!

Você irá atuar no time de desenvolvimento e evolução da Valora, uma ferramenta que analisa dados de vendas históricas e acompanha a jornada de vendas em tempo real, calculando o melhor preço.
Precificando dinamicamente nós aumentamos a venda e o faturamento dos nossos clientes através de algoritmos baseado em data science e machine learning.

Buscamos pessoas com sangue nos olhos e código na veia pra participar do processo de desenvolvimento e construção de um sistema com dashboards e fluxo intenso de exibição e tratamento de dados.

## Ferramentas ##

Para este desafio você criará um dashboard seguindo o mockup anexado abaixo. Ele deverá conectar a API também anexada abaixo e listar as cotações da bolsa americana de acordo com os tickers buscados. As funcionaliades serão detalhadas logo abaixo.

* [Mockup](https://github.com/valora-org/desafio-frontend/blob/main/desafio-valora-dashboard.png)
* [API](https://financialmodelingprep.com/developer/docs/)
* [Highcharts](https://www.highcharts.com/demo/stock/intraday-candlestick) Pode usar qualquer outra lib que tenha comportamento similar.

## Layout ##

Queremos avaliar sua capacidade de implementar o layout proposto seguindo fielmente a estrutura proposta. Apesar do mock ser todo em preto e branco acreditamos que um dev frontend deve ter um senso estético apurado. Libere sua criatividade e fique a vontade para trabalhar nas cores, efeitos, animações e transições mas a estrutura do layout deve manter-se fiel ao mockup. A componentização e o reaproveitamento será um diferencial.

## Linguagem ##

Queremos avaliar suas habilidades em Javascript ou Typescript, use a linguagem que estiver mais confortável.

## Funcionalidades ##

### Gráfico ###

A busca deverá exibir as cotações do ticker buscado e deverá acontecer apenas quando o usuário utilizar a teclar Enter. Nesse caso o ticker buscado deverá substituir o gráfico atual com as informações do novo ticker.

O histórico das últimas 5 buscas devem ser listados abaixo do gráfico.

### Comparação ###

Ao digitar um novo ticker, o usuário pode clicar no botão "+" ao lado do campo de busca para incluir aquele ticker para comparação no gráfico. Nesse caso, ambos os tickers devem ser apresentados no gráfico.

### Minha carteira ###

Ao clicar no botão "+" localizado a direita, uma nova linha deverá surgir no componente abaixo para o preenchimento do ticker, quantidade e valor.

O botão Compra deverá adicionar a quantidade desse ativo a sua carteira. Caso o usuário já tenha esse ativo na carteira, deverá incrementar a quantidade e o preço deverá exibir uma média entre os preços do mesmo ativo. No caso da venda, a quantidade deverá ser decrementada da carteira.
Os registros de compra e venda deverão ser armazenados de alguma forma. Pode usar o que preferir, banco de dados, localStorage, state ou até em arquivo. Fique à vontade.

### Envio ### 

Você deverá criar um fork do nosso repositório e enviar em forma de pull request para análise no próprio repositório do github. Toda a interação será feita por lá. Nossa equipe poderá fazer questionamentos sobre as decisões tomadas durante o desenvolvimento então fique atento para menções à você.

### Prazo ### 

Tenha consciência de que no ramo de startup o tempo é uma questão primordial e que valorizamos muito. Caso você tenha algum problema que impossibilite a entrega, pedimos que avise com antecedência e solicite a necessidade de um prazo maior.

Se não consiguir entregar tudo por falta de conhecimento, envie o que você conseguir realizar dentro do prazo estipulado e vamos avaliar com o mesmo respeito e carinho. Você terá um feedback com um encaminhamento de pontos que você deve se dedicar a estudar um pouco mais e futuramente você poderá aplicar novamente em uma outra oportunidade.

### Recomendações de estudo ### 

Recomendamos como material de estudo para auxiliá-lo no desenvolvimento do desafio as documentações oficiais e um excelente canal no youtube do pessoal da Rocketseat (https://www.youtube.com/channel/UCSfwM5u0Kce6Cce8_S72olg). Eles tem diversos exemplos de implementação de layout, configurações de projeto, boas práticas e novidades do mundo de desenvolvimento frontend e principalmente React.

Fique a vontade para buscar ajuda mas lembre-se que o desafio é individual.


### Vaga ###

* Salário à combinar, de acordo com o cargo
* Recesso remunerado nos períodos de Natal, Ano Novo e Carnaval
* Bônus de fim de ano atrelado ao desempenho

### Requisitos ###

* Bons Conhecimentos em Javascript
* Experiência em React
* Conhecimento em design e arquitetura de software (OOP, Clean Code, Design Patterns)
* Conhecimentos de consumo e escrita de serviços (REST)
* CSS e HTML para construção de sites leves e responsivos para desktop e mobile

### Desejáveis ###

* Conhecimento de escrita de testes automatizados
* Experiência com Next JS
* Participação em projetos de desenvolvimento de software do início ao fim

### Envio ###

* Crie um fork deste repositório
* Desenvolva
* Submeta um pull request do seu código para code review
