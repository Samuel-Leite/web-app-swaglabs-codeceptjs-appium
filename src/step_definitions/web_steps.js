/* eslint-disable no-undef */
// variable global
const { loginWebPage, homeWebPage, productWebPage, cartWebPage } = inject()
const name = require('../Utils/variableRandom/randomName')
const code = require('../Utils/variableRandom/randomNumber')

require('dotenv').config()

const firstName = name.getFirstName()
const lastName = name.getLastName()
const postalCode = code.getCode()

Given('that I am logged into Swag Labs over the internet', () => {
  loginWebPage.loginApp(process.env.USER, process.env.PASSWORD)
  homeWebPage.checkLoginSuccess()
})

When('I add the Backpack to the cart over the internet', () => {
  productWebPage.addBackpackToCart()
  productWebPage.backMenu()
})

When('I add the Bike Light to the cart over the internet', () => {
  productWebPage.addBikeLightToCart()
  productWebPage.backMenu()
})

When('I add the Bolt T-Shirt to the cart over the internet', () => {
  productWebPage.addBoltTShirtToCart()
  productWebPage.backMenu()
})

When('I add the Fleece Jacket to the cart over the internet', () => {
  productWebPage.addFleeceJacketToCart()
  productWebPage.backMenu()
})

When('I add the Onesie to the cart over the internet', () => {
  productWebPage.addOnesieToCart()
  productWebPage.backMenu()
})

When('I add the T-Shirt RED to the cart over the internet', () => {
  productWebPage.addTShirtREDToCart()
  productWebPage.backMenu()
})

When('fill in all payment details over the internet', () => {
  homeWebPage.checkCart()
  cartWebPage.checkoutProduct()
  cartWebPage.dataBuyer(firstName, lastName, postalCode)
})

Then('the payment is completed successfully over the internet', () => {
  cartWebPage.completePayment()
})
