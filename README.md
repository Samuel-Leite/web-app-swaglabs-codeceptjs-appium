# Projeto de automação de testes com codeceptjs e appium

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
npm install -g allure-commandline --save-dev
npx codeceptjs run --plugins allure
npx allure serve output



## Referenciar o formato dos campos ao mapear
. -> class
# - > id
~ -> acessibility id