/* eslint-disable no-undef */
const { I } = inject()

module.exports = {
  locs: {
    btnMenu: '//*[contains(@class, "app_logo")]',
    btnCart: '//*[contains(@class, "shopping_cart_link")]'
  },

  checkLoginSuccess() {
    I.waitForElement(this.locs.btnMenu, 5)
    I.seeElement(this.locs.btnMenu)
  },

  checkCart() {
    I.click(this.locs.btnCart)
    I.wait(2)
  }
}
