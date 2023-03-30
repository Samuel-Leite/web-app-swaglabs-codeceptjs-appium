/* eslint-disable no-undef */
Feature('buy produts')

// variable global
const { loginAppPage, homeAppPage, productAppPage, cartAppPage, qaConfig } = inject()
const name = require('../Utils/variableRandom/randomName')
const code = require('../Utils/variableRandom/randomNumber')

const firstName = name.getFirstName()
const lastName = name.getLastName()
const postalCode = code.getCode()

Before(() => {
  loginAppPage.loginApp(qaConfig.swagLabs.credencials.valid, qaConfig.swagLabs.passwords.valid)
  homeAppPage.checkLoginSuccess()
  homeAppPage.selectToggle()
})

After(() => {
  productAppPage.backMenu()
  homeAppPage.checkCart()
  cartAppPage.checkoutProduct()
  cartAppPage.dataBuyer(firstName, lastName, postalCode)
  cartAppPage.completePayment()
})

Scenario('Buy Sauce Labs Backpack with success', () => {
  productAppPage.addBackpackToCart()
})

Scenario('Buy Sauce Labs Bike Light with success', () => {
  productAppPage.addBikeLightToCart()
})

Scenario('Buy Sauce Labs Bolt T-Shirt with success', () => {
  productAppPage.addBoltTShirtToCart()
})

Scenario('Buy Sauce Labs Fleece Jacket with success', () => {
  productAppPage.addFleeceJacketToCart()
})

Scenario('Buy Sauce Labs Onesie with success', () => {
  productAppPage.addOnesieToCart()
})

Scenario('Buy T-Shirt RED with success', () => {
  productAppPage.addTShirtREDToCart()
})
