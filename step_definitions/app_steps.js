// variable global
const { I, loginPage, homePage, productPage, cartPage } = inject()
const name = require('../Utils/name')
const code = require('../Utils/code')

const firstName = name.getFirstName()
const lastName = name.getLastName()
const postalCode = code.getCode()
const user = 'standard_user'
const password = 'secret_sauce'

Given('that I am logged into the SwagLabs app', () => {
  loginPage.loginApp(user, password)
  homePage.checkLoginSuccess()
});

When('I add the Backpack to the cart', () => {
  homePage.selectToggle()
  productPage.addBackpackToCart()
  productPage.backMenu()
});

When('I add the Bike Light to the cart', () => {
  homePage.selectToggle()
  productPage.addBikeLightToCart()
  productPage.backMenu()
});

When('I add the Bolt T-Shirt to the cart', () => {
  homePage.selectToggle()
  productPage.addBoltTShirtToCart()
  productPage.backMenu()
});

When('I add the Fleece Jacket to the cart', () => {
  homePage.selectToggle()
  productPage.addFleeceJacketToCart()
  productPage.backMenu()
});

When('I add the Onesie to the cart', () => {
  homePage.selectToggle()
  productPage.addOnesieToCart()
  productPage.backMenu()
});

When('I add the T-Shirt RED to the cart', () => {
  homePage.selectToggle()
  productPage.addTShirtREDToCart()
  productPage.backMenu()
});


When('fill in all payment details', () => {
  homePage.checkCart()
  cartPage.checkoutProduct()
  cartPage.dataBuyer(firstName, lastName, postalCode)
});

Then('the payment is completed successfully.', () => {
  cartPage.completePayment()
});