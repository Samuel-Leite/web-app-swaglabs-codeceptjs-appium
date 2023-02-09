/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type loginAppPage = typeof import('./pages/appAndroid/loginApp_page.js');
type homeAppPage = typeof import('./pages/appAndroid/homeApp_page.js');
type productAppPage = typeof import('./pages/appAndroid/productApp_page.js');
type cartAppPage = typeof import('./pages/appAndroid/cartApp_page.js');
type loginWebPage = typeof import('./pages/webAndroid/loginWeb_page.js');
type homeWebPage = typeof import('./pages/webAndroid/homeWeb_page.js');
type productWebPage = typeof import('./pages/webAndroid/productWeb_page.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, loginAppPage: loginAppPage, homeAppPage: homeAppPage, productAppPage: productAppPage, cartAppPage: cartAppPage, loginWebPage: loginWebPage, homeWebPage: homeWebPage, productWebPage: productWebPage }
  interface Methods extends Appium {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
