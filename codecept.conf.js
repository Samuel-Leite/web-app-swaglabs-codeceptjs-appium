/* eslint-disable import/no-dynamic-require */
const path = require('path')
require('dotenv').config({ path: '.env' })

const capabilities = require(`./resources/conf/${[process.env.MODE]}/caps.json`)[process.env.CAPS]

/* eslint-disable no-dupe-keys */
exports.config = {
  output: './output',
  helpers: {
    Appium:
      process.env.MODE === 'local'
        ? // Local
          {
            app: path.join(__dirname, '/resources/app', process.env.APP),
            platform: capabilities.platformName,
            capabilities
          }
        : // Remote
          {
            app: path.join(__dirname, '/resources/app', process.env.APP),
            platform: capabilities.platformName,
            capabilities
          },
    Hooks: {
      require: './helpers/hooks.js'
    }
  },
  include: {
    I: './helpers/commands.js',
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
    retryFailedStep: {
      enabled: true
    },
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy'
    },
    stepByStepReport: {
      enabled: true,
      screenshotsForAllureReport: true,
      ignoreSteps: ['grab*'],
      output: './output',
      deleteSuccessful: false,
      disableScreenshotOnFail: false
    },
    // Habilitar o ultimo print em caso de falha
    screenshotOnFail: {
      enabled: true
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
  name: 'mobile-automation'
}
