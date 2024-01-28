/* eslint-disable no-undef */
/* eslint-disable no-sequences */
const { I } = inject()

module.exports = {
  locs: {
    btnAddCart: '//*[contains(text(),"Add to cart")]',
    btnPageBack: '//*[contains(text(),"Back to products")]',
    btnBikeLight: '//*[contains(text(),"Sauce Labs Bike Light")]'
  },

  addBackpackToCart() {
    I.wait(2)
    I.click('//*[contains(text(),"Sauce Labs Backpack")]')
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

  addBikeLightToCart() {
    I.touchPerform([
      {
        action: 'longPress',
        options: { x: 600, y: 1600 }
      },
      {
        action: 'moveTo',
        options: { x: 600, y: -950 }
      },
      { action: 'release' }
    ]),
      I.wait(2)
    I.click(this.locs.btnBikeLight)
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

  addBoltTShirtToCart() {
    I.touchPerform([
      {
        action: 'longPress',
        options: { x: 600, y: 1600 }
      },
      {
        action: 'moveTo',
        options: { x: 600, y: -3200 }
      },
      { action: 'release' }
    ]),
      I.wait(2)

    I.touchPerform([
      {
        action: 'press',
        options: { x: 600, y: 500 }
      },
      { action: 'release' }
    ]),
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

  addFleeceJacketToCart() {
    I.touchPerform([
      {
        action: 'longPress',
        options: { x: 600, y: 1600 }
      },
      {
        action: 'moveTo',
        options: { x: 600, y: -5600 }
      },
      { action: 'release' }
    ]),
      I.wait(2)

    I.touchPerform([
      {
        action: 'press',
        options: { x: 600, y: 500 }
      },
      { action: 'release' }
    ]),
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

  addOnesieToCart() {
    I.touchPerform([
      {
        action: 'longPress',
        options: { x: 600, y: 1600 }
      },
      {
        action: 'moveTo',
        options: { x: 600, y: -7800 }
      },
      { action: 'release' }
    ]),
      I.wait(2)

    I.touchPerform([
      {
        action: 'press',
        options: { x: 600, y: 500 }
      },
      { action: 'release' }
    ]),
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

  addTShirtREDToCart() {
    I.touchPerform([
      {
        action: 'longPress',
        options: { x: 600, y: 1600 }
      },
      {
        action: 'moveTo',
        options: { x: 600, y: -10000 }
      },
      { action: 'release' }
    ]),
      I.wait(2)

    I.touchPerform([
      {
        action: 'press',
        options: { x: 600, y: 500 }
      },
      { action: 'release' }
    ]),
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
