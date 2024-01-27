/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
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

Given('that I am logged into Swag Labs over the internet', () => {
  loginScreen.loginApp(credencial.user, credencial.password)
  homeScreen.checkLoginSuccess()
})

When('I add the Backpack to the cart over the internet', () => {
  productScreen.addBackpackToCart()
  productScreen.backMenu()
})

When('I add the Bike Light to the cart over the internet', () => {
  productScreen.addBikeLightToCart()
  productScreen.backMenu()
})

When('I add the Bolt T-Shirt to the cart over the internet', () => {
  productScreen.addBoltTShirtToCart()
  productScreen.backMenu()
})

When('I add the Fleece Jacket to the cart over the internet', () => {
  productScreen.addFleeceJacketToCart()
  productScreen.backMenu()
})

When('I add the Onesie to the cart over the internet', () => {
  productScreen.addOnesieToCart()
  productScreen.backMenu()
})

When('I add the T-Shirt RED to the cart over the internet', () => {
  productScreen.addTShirtREDToCart()
  productScreen.backMenu()
})

When('fill in all payment details over the internet', () => {
  homeScreen.checkCart()
  cartScreen.checkoutProduct()
  cartScreen.dataBuyer(firstName, lastName, postalCode)
})

Then('the payment is completed successfully over the internet', () => {
  cartScreen.completePayment()
})
