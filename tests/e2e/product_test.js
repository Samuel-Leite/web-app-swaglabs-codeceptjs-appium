/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
Feature('Comprar produto pela app web')

const fs = require('fs')
const path = require('path') // Importe o módulo 'path'
const yaml = require('js-yaml')

const { loginScreen, homeScreen, productScreen, cartScreen } = inject()
const name = require('../../helpers/utils')
const code = require('../../helpers/utils')

// Carrega as credenciais do arquivo YAML
const credencialPath = path.resolve(__dirname, '../../resources/data/credencial.yml')
const credencial = yaml.load(fs.readFileSync(credencialPath, 'utf8'))

require('dotenv').config()

const firstName = name.getFirstName()
const lastName = name.getLastName()
const postalCode = code.getCode()

Before(() => {
  loginScreen.loginApp(credencial.user, credencial.password)
  homeScreen.checkLoginSuccess()
})

After(() => {
  productScreen.backMenu()
  homeScreen.checkCart()
  cartScreen.checkoutProduct()
  cartScreen.dataBuyer(firstName, lastName, postalCode)
  cartScreen.completePayment()
})

Scenario('Comprar uma Backpack com sucesso', () => {
  productScreen.addBackpackToCart()
}).tag('wip')
