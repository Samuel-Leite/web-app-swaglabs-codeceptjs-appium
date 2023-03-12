Feature('buy produts');

// variable global
const { loginAppPage, homeAppPage, productAppPage, cartAppPage } = inject()
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
    loginAppPage.loginApp(data.valid_credential.user, data.valid_credential.password)
    homeAppPage.checkLoginSuccess()
    homeAppPage.selectToggle()
});
  
  After(() => {
    productAppPage.backMenu()
    homeAppPage.checkCart()
    cartAppPage.checkoutProduct()
    cartAppPage.dataBuyer(firstName, lastName, postalCode)
    cartAppPage.completePayment()
});

Scenario('Buy Sauce Labs Backpack with success',  () => {
    productAppPage.addBackpackToCart()
});

// Scenario('Buy Sauce Labs Bike Light with success',  () => {
//     productAppPage.addBikeLightToCart()
// });

// Scenario('Buy Sauce Labs Bolt T-Shirt with success',  () => {
//     productAppPage.addBoltTShirtToCart()
// });

// Scenario('Buy Sauce Labs Fleece Jacket with success',  () => {
//     productAppPage.addFleeceJacketToCart()
// });

// Scenario('Buy Sauce Labs Onesie with success',  () => {
//     productAppPage.addOnesieToCart()
// });


// Scenario('Buy T-Shirt RED with success',  () => {
//     productAppPage.addTShirtREDToCart()
// });