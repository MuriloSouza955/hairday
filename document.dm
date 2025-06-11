*** Iniciando o projeto ***
Boas-vindas ao projeto
Nesta nova etapa dos estudos de JavaScript, vamos desenvolver um sistema de agendamento de corte de cabelo passo a passo. Vou fornecer o HTML e o CSS, e juntos vamos adicionar as funcionalidades. Vamos aplicar os conceitos aprendidos anteriormente e colocar em prática em um projeto. É hora de unir os conceitos e ferramentas em uma aplicação. Vamos começar a desenvolver um novo projeto com JavaScript.

Fazendo o download do HTML e do CSS
Link do template: https://github.com/rocketseat-education/hairday-template
Figma: https://www.figma.com/community/file/1360316357733167308/plataforma-de-agendamento

Nessa aula, iremos aprender como usar o template HTML e CSS do nosso projeto Hair Day.

*** PACOTES ***
Usando o json-server
Nesta aula, vamos adicionar o json-server à aplicação para criar uma API local e simular seu funcionamento. Veremos como instalar o json-server, criar um script para inicializar o servidor, definir rotas e simular dados de retorno da API.

Informações da aplicação
Nessa aula veremos um pouco mais que arquivo package.json não é apenas para gerenciar pacotes e dependências, mas também pode conter informações do projeto, como nome, descrição e autor. Essas informações podem ser úteis ao compartilhar o projeto em plataformas como o GitHub, permitindo que outros visualizem detalhes adicionais do projeto ao acessar o package.json. É possível adicionar propriedades como name, description e author para fornecer mais contexto sobre a aplicação.

Instalando o Webpack
Nessa aula, instalamos o Webpack e Webpack CLI como dependências de desenvolvimento. Configuramos o package.json com um script build. Criamos main.js como entry point e webpack.config.js para definir as configurações de entrada e saída. Testamos o npm run build para gerar a pasta dist com o arquivo compilado, confirmando a instalação e configuração.

Instalando o Webpack Server
Nesta aula, instalaremos o webpack dev server para criar um servidor que monitora alterações na aplicação.

Carregando o HTML
Nesta aula, incluiremos o conteúdo HTML na build da aplicação. Usaremos o HTML-Webpack-Plugin e vamos configurar no Webpack. Após a execução do npm run build, veremos que o HTML foi incluído na pasta dist. Ao executarnpm run dev, a aplicação exibirá o conteúdo HTML.

Carregando o favicon
Nessa aula veremos como adicionar o favicon na aplicação.

Carregando o CSS
Nesta aula, veremos como incluir o CSS na configuração do Webpack para carregar a estilização no projeto. Vamos instalar os pacotes necessários, configurar as regras no webpack.config.js e fazer as importações dos arquivos CSS no JavaScript. Ao executar o projeto, veremos que a estilização foi carregada com sucesso.

Copiando os assets
Nesta aula, vamos fazer a instalação de um plugin para copiar ícones para a aplicação. Aprenderemos como configurar o plugin no arquivo webpack, copiando os ícones da pasta de origem para a pasta de destino.

Incluindo o Babel na aplicação
Nesta aula, incluiremos o Babel na aplicação, instalando e configurando-o no Webpack para garantir a compatibilidade do código com versões mais antigas de navegadores.

Instalando o pacote day.js
Nessa aula, instalaremos o pacote day.js para manipulação de data e hora na aplicação. Vamos instalar e criar um arquivo de configuração dentro da pasta "libs".

*** MANIPULANDO O FORM ***
Definindo as horas de atendimento
Nesta aula, focaremos na integração da aplicação com a API para agendamento. Criaremos um arquivo para centralizar os horários de funcionamento do salão, facilitando a compreensão da estrutura do projeto.

Definindo a data atual
Nessa aula, vamos aprender como capturar informações de um formulário para enviar a uma API de agendamento. Vamos organizar o código em módulos para facilitar a manutenção e separar as funcionalidades relacionadas ao formulário.

Evento de carregamento do conteúdo
Nessa aula, vamos abordar o processo de captura da data selecionada e definição da data mínima no input, além da necessidade de capturar os horários dinamicamente do HTML.

Carregando os horários
Nessa aula, vamos abordar a organização de arquivos e pastas em um projeto de programação. Vamos criar uma pasta específica para agendamentos, com um arquivo de carregamento dos agendamentos do dia. Vamos usar funções para carregar horários disponíveis, considerando horários futuros e não agendados. Também vamos fazer a desestruturação de dados e a verificação de horários passados.

Renderizando os horários
Nessa aula, vamos criar uma lista de horários disponíveis e indisponíveis com base no horário atual. Vamos utilizar um loop foreach para percorrer os horários e renderizá-los na página. Condicionalmente, vamos adicionar classes CSS para indicar se o horário está disponível ou não.

Separando os horários pelo período
Nessa aula vamos atualizar o código para separar os horários em manhã, tarde e noite, facilitando a visualização. Vamos criar uma função para adicionar cabeçalhos dinamicamente de acordo com o período do dia. O código vai verificar o horário atual e adicionar o cabeçalho correspondente antes de listar os horários disponíveis. Também vamos ajustar o CSS para mostrar visualmente os horários disponíveis e indisponíveis. Agora os horários são exibidos de acordo com o período do dia em que a aula está sendo assistida.

Selecionando um horário
Nessa aula, veremos como implementar a funcionalidade de seleção de horários em um projeto. Vamos adicionar uma classe CSS para destacar o horário selecionado, utilizando JavaScript para manipular os eventos de clique nos horários disponíveis. Também aprenderemos como remover a classe de horário selecionado de todos os horários e adicionar a classe apenas ao horário clicado, permitindo ao usuário visualizar facilmente qual horário foi selecionado. Essa interação é importante para melhorar a experiência do usuário no agendamento de horários.

Enviando um horário selecionado para a API
Nessa aula, vamos preparar os dados para serem enviados para a API. Veremos a importância de validar se os campos obrigatórios foram preenchidos corretamente, evitando erros. Além disso, aprenderemos como inserir a hora na data selecionada e gerar um identificador único para o agendamento.