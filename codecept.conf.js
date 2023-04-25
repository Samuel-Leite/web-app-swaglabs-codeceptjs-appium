/* eslint-disable no-dupe-keys */
exports.config = {
  output: './output',
  helpers: {
    Appium: {
      platform: 'Android',
      app: 'C:/Users/slle/OneDrive - GFT Technologies SE/Desktop/Samuel Leite/AutomationProject/Mobile/app/Android.SauceLabs.Mobile.Sample.app.2.7.1.apk',
      desiredCapabilities: {
        appPackage: 'com.swaglabsmobileapp',
        appActivity: 'MainActivity',
        deviceName: 'pixel',
        platformVersion: '9'
      }
    }
    // Appium: {
    //   platform: 'Android',
    //   desiredCapabilities: {
    //     deviceName: 'pixel',
    //     platformVersion: '9',
    //     automationName: 'UiAutomator2',
    //     browserName: 'Chrome'
    //   }
    // }
  },
  include: {
    I: './steps_file.js',
    loginAppPage: './src/Utils/pages/appAndroid/loginApp_page.js',
    homeAppPage: './src/Utils/pages/appAndroid/homeApp_page.js',
    productAppPage: './src/Utils/pages/appAndroid/productApp_page.js',
    cartAppPage: './src/Utils/pages/appAndroid/cartApp_page.js',
    loginWebPage: './src/Utils/pages/webAndroid/loginWeb_page.js',
    homeWebPage: './src/Utils/pages/webAndroid/homeWeb_page.js',
    productWebPage: './src/Utils/pages/webAndroid/productWeb_page.js',
    cartWebPage: './src/Utils/pages/webAndroid/cartWeb_page.js',
    qaConfig: './src/configs/qa.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  // gherkin: {
  //   features: './src/features/appTest.feature',
  //   steps: ['./src/step_definitions/app_steps.js']

  //   features: "./src/features/webTest.feature",
  //   steps: ["./src/step_definitions/web_steps.js"],
  // },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy'
    },
    stepByStepReport: {
      enabled: true,
      screenshotsForAllureReport: true
    },
    tryTo: {
      enabled: true
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [
    {
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  name: 'mobile-automation',
  // tests: './src/steps/web_test.js'
  tests: './src/steps/app_test.js'
}
