# Projeto de automação de testes com CodeceptJS com APPIUM

# Pré-Requisitos:

Java 11 JDK,
VS Code

## Estrutura do Projeto

./.husky:
Configurações do Husky

./output:
Evidências da execução dos testes

./src/configs/qa.js:
Constam as credenciais concernentes a automação

./src/features/appTest.feature:
Constam os cenários de testes no Aplicativo Mobile escritos em BDD para execução

./src/features/webTest.feature:
Constam os cenários de testes WEB Mobile escritos em BDD para execução

./src/step_definitions/app_steps:
Responsável pelos steps do Aplicativo Mobile versus BDD

./src/step_definitions/web_steps:
Responsável pelos steps da WEB Mobile versus BDD

./src/steps/app_test.js:
Constam os cenários de testes do Aplicativo Mobile para execução sem BDD

./src/steps/web_test.js:
Constam os cenários de testes da WB Mobile para execução sem BDD

./src/Utils/pages/appAndroid:
Responsável pelos mapeamento do Aplicativo Mobile

./src/Utils/pages/webAndroid:
Responsável pelos mapeamento da WEB Mobile

./src/Utils/variableRandom/randomName.js:
Responsável por gerar números randômicos durante a execução dos testes

./src/Utils/variableRandom/randomNumber.js:
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

npx codeceptjs run --steps (vai executar todos os testes com o final \_tests.js)
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

## Instalação do prettier e eslint

npm install prettier
npm install eslint -D
npm init @eslint/config
npm install eslint-config-airbnb-base
npm install --save-dev eslint-plugin-prettier
npm install --save-dev eslint-plugin-prettier eslint-config-prettier
npm install --save-dev lint-staged

OBS.: Após executar os comandos acima, copiar as pastas: .eslintignore, .eslintrc.js, .prettierignore, .prettierrc e adicionar comandos na pasta package.json:
"scripts": {
"lint": "eslint src --max-warnings=0"
},
"lint-staged": {
"src/\*_/_": [
"npx lint --fix"
]
},

## Instalação do Husky

npm install husky --save-dev
npm install -g git-cz
npm install commitizen -g --force
npm install --save-dev git-cz

OBS.: Copiar as pastas: .husky, changelog.config.js e adicionar comandos na pasta package.json:
"scripts": {
"prepare": "husky install",
"precommit": "git add . ",
"commit": "git cz && node .husky/push.js",
},
