Feature('buy produts');

// variable global
const { loginAppPage, homeAppPage, productAppPage, cartAppPage } = inject()
const name = require('../Utils/name')
const code = require('../Utils/code')

const firstName = name.getFirstName()
const lastName = name.getLastName()
const postalCode = code.getCode()
const user = 'standard_user'
const password = 'secret_sauce'


Scenario('Buy Sauce Labs Backpack with success',  () => {

    loginAppPage.loginApp(user, password)
    homeAppPage.checkLoginSuccess()
    homeAppPage.selectToggle()
    productAppPage.addBackpackToCart()
    productAppPage.backMenu()
    homeAppPage.checkCart()
    cartAppPage.checkoutProduct()
    cartAppPage.dataBuyer(firstName, lastName, postalCode)
    cartAppPage.completePayment()
});

Scenario('Buy Sauce Labs Bike Light with success',  () => {

    loginAppPage.loginApp(user, password)
    homeAppPage.checkLoginSuccess()
    homeAppPage.selectToggle()
    productAppPage.addBikeLightToCart()
    productAppPage.backMenu()
    homeAppPage.checkCart()
    cartAppPage.checkoutProduct()
    cartAppPage.dataBuyer(firstName, lastName, postalCode)
    cartAppPage.completePayment()
});

Scenario('Buy Sauce Labs Bolt T-Shirt with success',  () => {

    loginAppPage.loginApp(user, password)
    homeAppPage.checkLoginSuccess()
    homeAppPage.selectToggle()
    productAppPage.addBoltTShirtToCart()
    productAppPage.backMenu()
    homeAppPage.checkCart()
    cartAppPage.checkoutProduct()
    cartAppPage.dataBuyer(firstName, lastName, postalCode)
    cartAppPage.completePayment()
});

Scenario('Buy Sauce Labs Fleece Jacket with success',  () => {

    loginAppPage.loginApp(user, password)
    homeAppPage.checkLoginSuccess()
    homeAppPage.selectToggle()
    productAppPage.addFleeceJacketToCart()
    productAppPage.backMenu()
    homeAppPage.checkCart()
    cartAppPage.checkoutProduct()
    cartAppPage.dataBuyer(firstName, lastName, postalCode)
    cartAppPage.completePayment()
});

Scenario('Buy Sauce Labs Onesie with success',  () => {

    loginAppPage.loginApp(user, password)
    homeAppPage.checkLoginSuccess()
    homeAppPage.selectToggle()
    productAppPage.addOnesieToCart()
    productAppPage.backMenu()
    homeAppPage.checkCart()
    cartAppPage.checkoutProduct()
    cartAppPage.dataBuyer(firstName, lastName, postalCode)
    cartAppPage.completePayment()
});


Scenario('Buy T-Shirt RED with success',  () => {

    loginAppPage.loginApp(user, password)
    homeAppPage.checkLoginSuccess()
    homeAppPage.selectToggle()
    productAppPage.addTShirtREDToCart()
    productAppPage.backMenu()
    homeAppPage.checkCart()
    cartAppPage.checkoutProduct()
    cartAppPage.dataBuyer(firstName, lastName, postalCode)
    cartAppPage.completePayment()
});