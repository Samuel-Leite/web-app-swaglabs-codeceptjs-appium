Feature('buy produts');

// variable global
const { I, loginWebPage } = inject()
const name = require('../Utils/name')
const code = require('../Utils/code')

const firstName = name.getFirstName()
const lastName = name.getLastName()
const postalCode = code.getCode()
const user = 'standard_user'
const password = 'secret_sauce'


Scenario('Buy Sauce Labs Backpack by web with success',  () => {

  loginWebPage.loginApp(user, password)
    // I.amOnPage('https://www.saucedemo.com/')

    // // login
    // I.waitForElement('//input[@id = "user-name"]', 3)
    // I.fillField('//input[@id = "user-name"]', user)
    // I.fillField('//input[@id = "password"]', password)
    // I.click('//input[@id = "login-button"]')
    // I.wait(3)
    // I.seeElement('//*[contains(@class, "app_logo")]')
    // I.wait(3)

    // addBackpackToCart
    I.wait(2) 
    I.click('//*[contains(text(),"Sauce Labs Backpack")]')  
    I.wait(2) 
  
      I.touchPerform([{
        action: 'longPress',
        options: { x: 600, y: 1200 }}, 
      {  
        action: 'moveTo', 
        options: { x: 600, y: 450 } 
      }, {action: 'release'}]),


    I.wait(3)
    I.click('//*[contains(text(),"Add to cart")]')
    I.wait(3)

    // backMenu()  
    I.touchPerform([{
        action: 'longPress',
        options: { x: 600, y: 450 }}, 
      {  
        action: 'moveTo', 
        options: { x: 600, y: 1200 } 
      }, {action: 'release'}]),
    
    I.wait(3)
    I.click('//*[contains(text(),"Back to products")]')
    I.wait(3)
    
    // cart()
    I.click('//*[contains(@class, "shopping_cart_link")]')
    I.wait(3)
    I.click('//*[contains(text(),"Checkout")]')
    I.wait(3)

    // dataBuyer
    I.fillField('//input[@id = "first-name"]', firstName)
    I.fillField('//input[@id = "last-name"]', lastName)
    I.fillField('//input[@id = "postal-code"]', postalCode)
    I.wait(3)
    I.click('//input[@id = "continue"]')
    I.wait(3)
    
    // completePayment()
    I.click('//button[@id = "finish"]')
    I.wait(3)

    // payment with success
    I.touchPerform([{
        action: 'longPress',
        options: { x: 600, y: 450 }}, 
      {  
        action: 'moveTo', 
        options: { x: 600, y: 1200 } 
      }, {action: 'release'}]),
    I.seeElement('//*[contains(text(),"THANK YOU FOR YOUR ORDER")]') 
    I.wait(3)
});


// Scenario('Buy Sauce Labs Bike Light by web with success',  () => {

//     I.amOnPage('https://www.saucedemo.com/')

//     // login
//     I.waitForElement('//input[@id = "user-name"]', 3)
//     I.fillField('//input[@id = "user-name"]', user)
//     I.fillField('//input[@id = "password"]', password)
//     I.click('//input[@id = "login-button"]')
//     I.wait(3)
//     I.seeElement('//*[contains(@class, "app_logo")]')
//     I.wait(3)

//     // addBackpackToCart
//     I.touchPerform([{
//         action: 'longPress',
//         options: { x: 600, y: 1600 }}, 
//       {  
//         action: 'moveTo', 
//         options: { x: 600, y: -950 } 
//       }, {action: 'release'}]),

//     I.wait(2) 
//     I.click('//*[contains(text(),"Sauce Labs Bike Light")]')  
//     I.wait(2) 

//     I.touchPerform([{
//         action: 'longPress',
//         options: { x: 600, y: 1200 }}, 
//       {  
//         action: 'moveTo', 
//         options: { x: 600, y: 450 } 
//       }, {action: 'release'}]),
  
//     I.wait(3)
//     I.click('//*[contains(text(),"Add to cart")]')
//     I.wait(3)

//     // backMenu()  
//     I.touchPerform([{
//         action: 'longPress',
//         options: { x: 600, y: 450 }}, 
//       {  
//         action: 'moveTo', 
//         options: { x: 600, y: 1200 } 
//       }, {action: 'release'}]),
    
//     I.wait(3)
//     I.click('//*[contains(text(),"Back to products")]')
//     I.wait(3)
    
//     // cart()
//     I.click('//*[contains(@class, "shopping_cart_link")]')
//     I.wait(3)
//     I.click('//*[contains(text(),"Checkout")]')
//     I.wait(3)

//     // dataBuyer
//     I.fillField('//input[@id = "first-name"]', firstName)
//     I.fillField('//input[@id = "last-name"]', lastName)
//     I.fillField('//input[@id = "postal-code"]', postalCode)
//     I.wait(3)
//     I.click('//input[@id = "continue"]')
//     I.wait(3)
    
//     // completePayment()
//     I.click('//button[@id = "finish"]')
//     I.wait(3)

//     // payment with success
//     I.touchPerform([{
//         action: 'longPress',
//         options: { x: 600, y: 450 }}, 
//       {  
//         action: 'moveTo', 
//         options: { x: 600, y: 1200 } 
//       }, {action: 'release'}]),
//     I.seeElement('//*[contains(text(),"THANK YOU FOR YOUR ORDER")]') 
//     I.wait(3)
// });