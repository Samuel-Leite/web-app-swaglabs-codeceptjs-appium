// variable global
const { loginAppPage, homeAppPage, productAppPage, cartAppPage } = inject()
const name = require('../Utils/name')
const code = require('../Utils/code')

const firstName = name.getFirstName()
const lastName = name.getLastName()
const postalCode = code.getCode()
const user = 'standard_user'
const password = 'secret_sauce'

Given('that I am logged into the SwagLabs app', () => {
  loginAppPage.loginApp(user, password)
  homeAppPage.checkLoginSuccess()
});

When('I add the Backpack to the cart', () => {
  homeAppPage.selectToggle()
  productAppPage.addBackpackToCart()
  productAppPage.backMenu()
});

When('I add the Bike Light to the cart', () => {
  homeAppPage.selectToggle()
  productAppPage.addBikeLightToCart()
  productAppPage.backMenu()
});

When('I add the Bolt T-Shirt to the cart', () => {
  homeAppPage.selectToggle()
  productAppPage.addBoltTShirtToCart()
  productAppPage.backMenu()
});

When('I add the Fleece Jacket to the cart', () => {
  homeAppPage.selectToggle()
  productAppPage.addFleeceJacketToCart()
  productAppPage.backMenu()
});

When('I add the Onesie to the cart', () => {
  homeAppPage.selectToggle()
  productAppPage.addOnesieToCart()
  productAppPage.backMenu()
});

When('I add the T-Shirt RED to the cart', () => {
  homeAppPage.selectToggle()
  productAppPage.addTShirtREDToCart()
  productAppPage.backMenu()
});


When('fill in all payment details', () => {
  homeAppPage.checkCart()
  cartAppPage.checkoutProduct()
  cartAppPage.dataBuyer(firstName, lastName, postalCode)
});

Then('the payment is completed successfully.', () => {
  cartAppPage.completePayment()
});