Feature('buy produts');

// variable global
const { I, loginWebPage, homeWebPage, productWebPage, cartWebPage } = inject()
const name = require('../Utils/name')
const code = require('../Utils/code')

const firstName = name.getFirstName()
const lastName = name.getLastName()
const postalCode = code.getCode()
const user = 'standard_user'
const password = 'secret_sauce'

Scenario('Buy Sauce Labs Backpack by web with success',  () => {
  loginWebPage.loginApp(user, password)
  homeWebPage.checkLoginSuccess()
  productWebPage.addBackpackToCart()
  productWebPage.backMenu()
  homeWebPage.checkCart()
  cartWebPage.checkoutProduct()
  cartWebPage.dataBuyer(firstName, lastName, postalCode)
  cartWebPage.completePayment()
});

Scenario('Buy Sauce Labs Bike Light by web with success',  () => {
  loginWebPage.loginApp(user, password)
  homeWebPage.checkLoginSuccess()
  productWebPage.addBikeLightToCart()
  productWebPage.backMenu()
  homeWebPage.checkCart()
  cartWebPage.checkoutProduct()
  cartWebPage.dataBuyer(firstName, lastName, postalCode)
  cartWebPage.completePayment()
});

Scenario('Buy Sauce Labs Bolt T-Shirt by web with success',  () => {
  loginWebPage.loginApp(user, password)
  homeWebPage.checkLoginSuccess()
  productWebPage.addBoltTShirtToCart()
  productWebPage.backMenu()
  homeWebPage.checkCart()
  cartWebPage.checkoutProduct()
  cartWebPage.dataBuyer(firstName, lastName, postalCode)
  cartWebPage.completePayment()
});

Scenario('Buy Sauce Labs Fleece Jacket by web with success',  () => {
  loginWebPage.loginApp(user, password)
  homeWebPage.checkLoginSuccess()
  productWebPage.addFleeceJacketToCart()
  productWebPage.backMenu()
  homeWebPage.checkCart()
  cartWebPage.checkoutProduct()
  cartWebPage.dataBuyer(firstName, lastName, postalCode)
  cartWebPage.completePayment()
});

Scenario('Buy Sauce Labs Onesie by web with success',  () => {
  loginWebPage.loginApp(user, password)
  homeWebPage.checkLoginSuccess()
  productWebPage.addOnesieToCart()
  productWebPage.backMenu()
  homeWebPage.checkCart()
  cartWebPage.checkoutProduct()
  cartWebPage.dataBuyer(firstName, lastName, postalCode)
  cartWebPage.completePayment()
});

Scenario('Buy T-Shirt RED by web with success',  () => {

  loginWebPage.loginApp(user, password)
  homeWebPage.checkLoginSuccess()
  productWebPage.addTShirtREDToCart()
  productWebPage.backMenu()
  homeWebPage.checkCart()
  cartWebPage.checkoutProduct()
  cartWebPage.dataBuyer(firstName, lastName, postalCode)
  cartWebPage.completePayment()
});