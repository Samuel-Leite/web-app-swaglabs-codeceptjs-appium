/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type loginPage = typeof import('./pages/appAndroid/loginApp_page.js');
type homePage = typeof import('./pages/appAndroid/homeApp_page.js');
type productPage = typeof import('./pages/appAndroid/productApp_page.js');
type cartPage = typeof import('./pages/appAndroid/cartApp_page.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, loginPage: loginPage, homePage: homePage, productPage: productPage, cartPage: cartPage }
  interface Methods extends Appium {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
