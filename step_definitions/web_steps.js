// variable global
const { loginWebPage, homeWebPage, productWebPage, cartWebPage } = inject()
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

Given('that I am logged into Swag Labs over the internet', () => {
    loginWebPage.loginApp(data.valid_credential.user, data.valid_credential.password)
    homeWebPage.checkLoginSuccess()
});

When('I add the Backpack to the cart over the internet', () => {
    productWebPage.addBackpackToCart()
    productWebPage.backMenu()
});

When('I add the Bike Light to the cart over the internet', () => {
    productWebPage.addBikeLightToCart()
    productWebPage.backMenu()
});

When('I add the Bolt T-Shirt to the cart over the internet', () => {
    productWebPage.addBoltTShirtToCart()
    productWebPage.backMenu()
});

When('I add the Fleece Jacket to the cart over the internet', () => {
    productWebPage.addFleeceJacketToCart()
    productWebPage.backMenu()
});

When('I add the Onesie to the cart over the internet', () => {
    productWebPage.addOnesieToCart()
    productWebPage.backMenu()
});

When('I add the T-Shirt RED to the cart over the internet', () => {
    productWebPage.addTShirtREDToCart()
    productWebPage.backMenu()
});

When('fill in all payment details over the internet', () => {
    homeWebPage.checkCart()
    cartWebPage.checkoutProduct()
    cartWebPage.dataBuyer(firstName, lastName, postalCode)
});

Then('the payment is completed successfully over the internet', () => {
    cartWebPage.completePayment()
});