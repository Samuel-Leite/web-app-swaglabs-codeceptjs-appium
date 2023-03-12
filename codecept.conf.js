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
    },
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
    "I": "./steps_file.js",
    "loginAppPage": "./pages/appAndroid/loginApp_page.js",
    "homeAppPage": "./pages/appAndroid/homeApp_page.js",
    "productAppPage": "./pages/appAndroid/productApp_page.js",
    "cartAppPage": "./pages/appAndroid/cartApp_page.js",
    "loginWebPage": "./pages/webAndroid/loginWeb_page.js",
    "homeWebPage": "./pages/webAndroid/homeWeb_page.js",
    "productWebPage": "./pages/webAndroid/productWeb_page.js",
    "cartWebPage": "./pages/webAndroid/cartWeb_page.js"
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  // gherkin: {
  //   features: './features/appTest.feature',
  //   steps: ['./step_definitions/app_steps.js']

  //   features: './features/webTest.feature',
  //   steps: ['./step_definitions/web_steps.js']
  // },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    allure: {
      enabled: true
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
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  name: 'mobile-automation',
  // tests: './steps/web_test.js',
  tests: './steps/app_test.js'
}