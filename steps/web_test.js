Feature('buy produts');

// variable global
const { I, loginWebPage, homeWebPage, productWebPage, cartWebPage } = inject()
const name = require('../Utils/name')
const code = require('../Utils/code')

const firstName = name.getFirstName()
const lastName = name.getLastName()
const postalCode = code.getCode()

// YAML credencial to login
const fs = require("fs");
const YAML = require("js-yaml");
const raw = fs.readFileSync("resource/credencial.yaml")
const data = YAML.load(raw)

Before(() => {
  loginWebPage.loginApp(data.valid_credential.user, data.valid_credential.password)
  homeWebPage.checkLoginSuccess()
});

After(() => {
  productWebPage.backMenu()
  homeWebPage.checkCart()
  cartWebPage.checkoutProduct()
  cartWebPage.dataBuyer(firstName, lastName, postalCode)
  cartWebPage.completePayment()
});

Scenario('Buy Sauce Labs Backpack by web with success',  () => {
  productWebPage.addBackpackToCart()
});

Scenario('Buy Sauce Labs Bike Light by web with success',  () => {
  productWebPage.addBikeLightToCart()
});

Scenario('Buy Sauce Labs Bolt T-Shirt by web with success',  () => {
  productWebPage.addBoltTShirtToCart()
});

Scenario('Buy Sauce Labs Fleece Jacket by web with success',  () => {
  productWebPage.addFleeceJacketToCart()
});

Scenario('Buy Sauce Labs Onesie by web with success',  () => {
  productWebPage.addOnesieToCart()
});

Scenario('Buy T-Shirt RED by web with success',  () => {
  productWebPage.addTShirtREDToCart()
});