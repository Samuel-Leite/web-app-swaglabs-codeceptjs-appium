/* eslint-disable no-undef */
// variable global
const { loginScreen, homeScreen, productScreen, cartScreen } = inject()
const name = require('../../helpers/utils')
const code = require('../../helpers/utils')

require('dotenv').config()

const firstName = name.getFirstName()
const lastName = name.getLastName()
const postalCode = code.getCode()

Given('that I am logged into Swag Labs over the internet', () => {
  loginScreen.loginApp(process.env.USER, process.env.PASSWORD)
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
