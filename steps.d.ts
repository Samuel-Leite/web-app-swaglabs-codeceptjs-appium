/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type loginAppPage = typeof import('./src/Utils/pages/appAndroid/loginApp_page.js');
type homeAppPage = typeof import('./src/Utils/pages/appAndroid/homeApp_page.js');
type productAppPage = typeof import('./src/Utils/pages/appAndroid/productApp_page.js');
type cartAppPage = typeof import('./src/Utils/pages/appAndroid/cartApp_page.js');
type loginWebPage = typeof import('./src/Utils/pages/webAndroid/loginWeb_page.js');
type homeWebPage = typeof import('./src/Utils/pages/webAndroid/homeWeb_page.js');
type productWebPage = typeof import('./src/Utils/pages/webAndroid/productWeb_page.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, loginAppPage: loginAppPage, homeAppPage: homeAppPage, productAppPage: productAppPage, cartAppPage: cartAppPage, loginWebPage: loginWebPage, homeWebPage: homeWebPage, productWebPage: productWebPage }
  interface Methods extends Appium {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
