/* eslint-disable no-undef */
/* eslint-disable no-sequences */
const { I } = inject()

module.exports = {
  locs: {
    btnAddCart: '//*[contains(text(),"Add to cart")]',
    btnPageBack: '//*[contains(text(),"Back to products")]',
    btnBackpack: '//*[contains(text(),"Sauce Labs Backpack")]'
  },

  addBackpackToCart() {
    I.wait(2)
    I.click(this.locs.btnBackpack)
    I.wait(2)

    I.touchPerform([
      {
        action: 'longPress',
        options: { x: 600, y: 1200 }
      },
      {
        action: 'moveTo',
        options: { x: 600, y: 20 }
      },
      { action: 'release' }
    ]),
      I.wait(3)
    I.click(this.locs.btnAddCart)
    I.wait(3)
  },

  backMenu() {
    I.touchPerform([
      {
        action: 'longPress',
        options: { x: 600, y: 70 }
      },
      {
        action: 'moveTo',
        options: { x: 600, y: 1500 }
      },
      { action: 'release' }
    ]),
      I.wait(3)
    I.click(this.locs.btnPageBack)
    I.wait(3)
  }
}
