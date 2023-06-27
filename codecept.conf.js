/* eslint-disable import/no-dynamic-require */
const path = require('path')
require('dotenv').config({ path: '.env' })

const capabilities = require(`./resources/conf/${[process.env.MODE]}/caps.json`)[process.env.CAPS]

/* eslint-disable no-dupe-keys */
exports.config = {
  output: './output',
  helpers: {
    Appium:
      process.env.MODE === 'phone'
        ? // Phone
          {
            app: path.join(__dirname, '/resources/app', process.env.APP),
            platform: capabilities.platformName,
            capabilities
          }
        : // Tablet
          {
            app: path.join(__dirname, '/resources/app', process.env.APP),
            platform: capabilities.platformName,
            capabilities
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
    loginAppPage: './tests/pages/appAndroid/loginApp_page.js',
    homeAppPage: './tests/pages/appAndroid/homeApp_page.js',
    productAppPage: './tests/pages/appAndroid/productApp_page.js',
    cartAppPage: './tests/pages/appAndroid/cartApp_page.js',
    loginWebPage: './tests/pages/webAndroid/loginWeb_page.js',
    homeWebPage: './tests/pages/webAndroid/homeWeb_page.js',
    productWebPage: './tests/pages/webAndroid/productWeb_page.js',
    cartWebPage: './tests/pages/webAndroid/cartWeb_page.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  // gherkin: {
  //   features: './tests/features/appTest.feature',
  //   steps: ['./tests/step_definitions/app_steps.js']

  //   features: './tests/features/webTest.feature',
  //   steps: ['./tests/step_definitions/web_steps.js']
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
  // tests: './tests/steps/web_test.js'
  tests: './tests/steps/app_test.js'
}
