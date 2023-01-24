const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  output: './output',
  helpers: {
    Appium: {
      platform: 'Android',
      app: 'C:/Users/slle/OneDrive - GFT Technologies SE/Desktop/Samuel Leite/AutomationProject/Mobile/app/Android.SauceLabs.Mobile.Sample.app.2.7.1.apk',
      desiredCapabilities: {
        appPackage: "com.swaglabsmobileapp",
        appActivity: "MainActivity",
        deviceName: "pixel",
        platformVersion: "9"
      }
    }
  },
  include: {
    "I": "./steps_file.js",
    "loginPage": "./pages/login_page.js",
    "homePage": "./pages/home_page.js",
    "productPage": "./pages/product.js",
    "cartPage": "./pages/cart.js"
  },
  bootstrap: null,
  mocha: {},
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    allure: {
      enabled: true
    }
  },
  name: 'mobile-automation',
  tests: './steps/*_test.js',
}