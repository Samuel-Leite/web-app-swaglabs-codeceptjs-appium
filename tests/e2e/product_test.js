/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
Feature('Buy produts via mobile web')

const fs = require('fs')
const path = require('path') // Importe o módulo 'path'
const yaml = require('js-yaml')

// variable global
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

Scenario('Buy Sauce Labs Backpack by web with success', () => {
  productScreen.addBackpackToCart()
}).tag('wip')

Scenario('Buy Sauce Labs Bike Light by web with success', () => {
  productScreen.addBikeLightToCart()
})

Scenario('Buy Sauce Labs Bolt T-Shirt by web with success', () => {
  productScreen.addBoltTShirtToCart()
})

Scenario('Buy Sauce Labs Fleece Jacket by web with success', () => {
  productScreen.addFleeceJacketToCart()
})

Scenario('Buy Sauce Labs Onesie by web with success', () => {
  productScreen.addOnesieToCart()
})

Scenario('Buy T-Shirt RED by web with success', () => {
  productScreen.addTShirtREDToCart()
})
