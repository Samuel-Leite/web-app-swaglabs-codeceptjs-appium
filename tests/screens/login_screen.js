/* eslint-disable no-undef */
const { I } = inject()

module.exports = {
  locs: {
    txtUserName: '//input[@id = "user-name"]',
    txtPassword: '//input[@id = "password"]',
    btnEnter: '//input[@id = "login-button"]'
  },

  loginApp(user, pass) {
    I.amOnPage('https://www.saucedemo.com')
    I.waitForElement(this.locs.txtUserName, 3)
    I.fillField(this.locs.txtUserName, user)
    I.fillField(this.locs.txtPassword, pass)
    I.click(this.locs.btnEnter)
    I.wait(2)
  }
}
