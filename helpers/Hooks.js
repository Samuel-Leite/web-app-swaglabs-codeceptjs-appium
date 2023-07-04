/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
const Helper = require('@codeceptjs/helper')
const { container, ecorder, event, output, helper } = require('codeceptjs')

const rimraf = require('rimraf')

const utils = require('./utils')

class hooks extends Helper {
  _init() {
    // before all tests
    console.log('*************************************')
    console.log('******* Variáveis de Ambiente *******')
    console.log(`MODE: ${process.env.MODE}`)
    console.log(`CAPS: ${process.env.CAPS}`)
    console.log(`APP file: ${process.env.APP}`)
    console.log('*************************************')
    try {
      rimraf.sync('output/')
      console.log('Diretório "output" excluído com sucesso!')
    } catch (error) {
      console.error(`Ocorreu um erro ao excluir o diretório: ${error}`)
    }
  }

  _before(test) {
    // before a test
    // test.retries(process.env.RETRY)
    console.log('--------------------------------Start----------------------------------')
    const allure = codeceptjs.container.plugins('allure')
    allure.addParameter('0', 'Mode', process.env.MODE)
    allure.addParameter('0', 'Device', process.env.CAPS)
  }

  //   _after() {
  //     console.log('--------------------------------End----------------------------------')
  //   } // after a test

  //   _beforeStep() {} // before each step

  //   _afterStep() {
  //     // after each step
  //     utils.addEvidenciaApiAllure()
  //   }

  //   _beforeSuite() {} // before each suite

  //   _afterSuite() {} // after each suite

  //   _passed() {} // after a test passed

  //   _failed() {} // after a test failed

  //   _finishTest() {
  //     // after all tests
  //     //  execSync('allure serve output', utf8)
  //   }
}
module.exports = hooks
