# Projeto de automação de testes com CodeceptJS com APPIUM

# Pré-Requisitos:
Java 11 JDK,
VS Code

## Estrutura do Projeto
./features/appTest.feature:
Constam os cenários de testes no Aplicativo Mobile escritos em BDD para execução

./features/webTest.feature:
Constam os cenários de testes WEB Mobile escritos em BDD para execução

./output:
Evidências da execução dos testes

./pages/appAndroid:
Responsável pelos mapeamento do Aplicativo Mobile

./pages/webAndroid:
Responsável pelos mapeamento da WEB Mobile

./step_definitions/app_steps:
Responsável pelos steps do Aplicativo Mobile versus BDD

./step_definitions/web_steps:
Responsável pelos steps da WEB Mobile versus BDD

./steps/app_test.js:
Constam os cenários de testes do Aplicativo Mobile para execução sem BDD

./steps/web_test.js:
Constam os cenários de testes da WB Mobile para execução sem BDD

./Utils/code.js:
Responsável por gerar números randômicos durante a execução dos testes

./Utils/name.js:
Responsável por gerar nomes randômicos durante a execução dos testes

# Observações:
Faça o donwload do template no repositório de código para utilizar no seu projeto em especifico, feito isso, fique a vontande para usufruir dos recursos disponíveis e também customizar de acordo com sua necessidade.


# Comandos utilizados durante a construção da automação Mobile com CodeceptJS

## Inicialização do projeto:
npm init

## Instalação do codeceptjs na pasta do projeto:
npm install codeceptjs webdriverio --save

## Inicialização do codeceptjs:
npx codeceptjs init

## Capabilities
Os campos appPackage e appActivity é obtido com o desenvolvedor

## Gerar outro método de teste
npx codeceptjs gt

## Gerar Page Object
npx codeceptjs gpo

## Configuração e os métodos BDD para os cenários
npx codeceptjs gherkin:init
npx codeceptjs gherkin:snippets

## Sugestões de extensões para BDD
BDD Highlighter
Snippets and Syntax Highlight for Gherkin (Cucumber)
Cucumber (Gherkin) Full Support

## Comandos para rodar a automação dos testes
npx codeceptjs run --steps (vai executar todos os testes com o final _tests.js)
npm run test

## Configuração de informações randômicas via NPM
npm install node-random-name
npm install random-number

## Instalação do driver para rodar testes em browser
appium --allow-insecure chromedriver_autodownload

## Relatorio Allure
npm install @codeceptjs/allure-legacy --save-dev
npx allure serve output

## Referenciar o formato dos campos ao mapear
"." -> class
"#" - > id
"~" -> acessibility id

## Instalação do YAML
npm i js-yaml