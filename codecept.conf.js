/* eslint-disable import/no-dynamic-require */
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
            platform: capabilities.platformName,
            capabilities
          }
        : // Remote
          {
            host: 'hub-cloud.browserstack.com',
            port: 4444,
            user: 'samuelleite_GtpoxN',
            key: 'sYCp8ma8kXSd4DoH6mAY',
            platform: capabilities.platformName,
            desiredCapabilities: capabilities
          },
    Hooks: {
      require: './helpers/hooks.js'
    }
  },
  include: {
    I: './helpers/commands.js',
    loginScreen: './tests/screens/login_screen.js',
    homeScreen: './tests/screens/home_screen.js',
    productScreen: './tests/screens/product_screen.js',
    cartScreen: './tests/screens/cart_screen.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  // gherkin: {
  //   features: './tests/features/webTest.feature',
  //   steps: ['./tests/step_definitions/product_steps.js']
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
