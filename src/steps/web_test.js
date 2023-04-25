/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
Feature('Buy produts via mobile web')

// variable global
const { I, loginWebPage, homeWebPage, productWebPage, cartWebPage, qaConfig } = inject()
const name = require('../Utils/variableRandom/randomName')
const code = require('../Utils/variableRandom/randomNumber')

const firstName = name.getFirstName()
const lastName = name.getLastName()
const postalCode = code.getCode()

Before(() => {
  loginWebPage.loginApp(qaConfig.swagLabs.credencials.valid, qaConfig.swagLabs.passwords.valid)
  homeWebPage.checkLoginSuccess()
})

After(() => {
  productWebPage.backMenu()
  homeWebPage.checkCart()
  cartWebPage.checkoutProduct()
  cartWebPage.dataBuyer(firstName, lastName, postalCode)
  cartWebPage.completePayment()
})

Scenario('Buy Sauce Labs Backpack by web with success', () => {
  productWebPage.addBackpackToCart()
})

Scenario('Buy Sauce Labs Bike Light by web with success', () => {
  productWebPage.addBikeLightToCart()
})

Scenario('Buy Sauce Labs Bolt T-Shirt by web with success', () => {
  productWebPage.addBoltTShirtToCart()
})

Scenario('Buy Sauce Labs Fleece Jacket by web with success', () => {
  productWebPage.addFleeceJacketToCart()
})

Scenario('Buy Sauce Labs Onesie by web with success', () => {
  productWebPage.addOnesieToCart()
})

Scenario('Buy T-Shirt RED by web with success', () => {
  productWebPage.addTShirtREDToCart()
})
