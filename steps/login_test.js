Feature('buy produts');

// variable global
const { I, loginPage, homePage, productPage, cartPage } = inject()
const name = require('../Utils/name')
const code = require('../Utils/code')

const firstName = name.getFirstName()
const lastName = name.getLastName()
const postalCode = code.getCode()
const user = 'standard_user'
const password = 'secret_sauce'


Scenario('Buy Sauce Labs Backpack with success',  () => {

    loginPage.loginApp(user, password)
    homePage.checkLoginSuccess()
    homePage.selectToggle()
    productPage.addBackpackToCart()
    productPage.backMenu()
    homePage.checkCart()
    cartPage.checkoutProduct()
    cartPage.dataBuyer(firstName, lastName, postalCode)
    cartPage.completePayment()
});

Scenario('Buy Sauce Labs Bike Light with success',  () => {

    loginPage.loginApp(user, password)
    homePage.checkLoginSuccess()
    homePage.selectToggle()
    productPage.addBikeLightToCart()
    productPage.backMenu()
    homePage.checkCart()
    cartPage.checkoutProduct()
    cartPage.dataBuyer(firstName, lastName, postalCode)
    cartPage.completePayment()
});

Scenario('Buy Sauce Labs Bolt T-Shirt with success',  () => {

    loginPage.loginApp(user, password)
    homePage.checkLoginSuccess()
    homePage.selectToggle()
    productPage.addBoltTShirtToCart()
    productPage.backMenu()
    homePage.checkCart()
    cartPage.checkoutProduct()
    cartPage.dataBuyer(firstName, lastName, postalCode)
    cartPage.completePayment()
});

Scenario('Buy Sauce Labs Fleece Jacket with success',  () => {

    loginPage.loginApp(user, password)
    homePage.checkLoginSuccess()
    homePage.selectToggle()
    productPage.addFleeceJacketToCart()
    productPage.backMenu()
    homePage.checkCart()
    cartPage.checkoutProduct()
    cartPage.dataBuyer(firstName, lastName, postalCode)
    cartPage.completePayment()
});

Scenario('Buy Sauce Labs Onesie with success',  () => {

    loginPage.loginApp(user, password)
    homePage.checkLoginSuccess()
    homePage.selectToggle()
    productPage.addOnesieToCart()
    productPage.backMenu()
    homePage.checkCart()
    cartPage.checkoutProduct()
    cartPage.dataBuyer(firstName, lastName, postalCode)
    cartPage.completePayment()
});


Scenario('Buy T-Shirt RED with success',  () => {

    loginPage.loginApp(user, password)
    homePage.checkLoginSuccess()
    homePage.selectToggle()
    productPage.addTShirtREDToCart()
    productPage.backMenu()
    homePage.checkCart()
    cartPage.checkoutProduct()
    cartPage.dataBuyer(firstName, lastName, postalCode)
    cartPage.completePayment()
});