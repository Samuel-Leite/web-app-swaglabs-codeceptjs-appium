/* eslint-disable no-sequences */
/* eslint-disable no-undef */
const { I } = inject()

module.exports = {
  locs: {
    btnRemoveProduct: '//*[contains(text(),"Remove")]',
    btnContinue: '//input[@id = "continue"]',
    btnCheckout: '//*[contains(text(),"Checkout")]',
    btnCancel: '//button[@id = "cancel"]',
    btnFinish: '//button[@id = "finish"]',
    txtFirstName: '//input[@id = "first-name"]',
    txtLastName: '//input[@id = "last-name"]',
    txtPostalCode: '//input[@id = "postal-code"]',
    lblPaymentSuccess: 'Thank you for your order!'
  },

  checkoutProduct() {
    I.click(this.locs.btnCheckout)
    I.wait(3)
  },

  dataBuyer(firstName, lastName, postalCode) {
    I.fillField(this.locs.txtFirstName, firstName)
    I.fillField(this.locs.txtLastName, lastName)
    I.fillField(this.locs.txtPostalCode, postalCode)
    I.click(this.locs.btnContinue)
    I.wait(3)
  },

  completePayment() {
    I.touchPerform([
      {
        action: 'longPress',
        options: { x: 600, y: 1000 }
      },
      {
        action: 'moveTo',
        options: { x: 600, y: 450 }
      },
      { action: 'release' }
    ]),
      I.waitForElement(this.locs.btnFinish)
    I.click(this.locs.btnFinish)
    I.wait(3)

    I.touchPerform([
      {
        action: 'longPress',
        options: { x: 600, y: 450 }
      },
      {
        action: 'moveTo',
        options: { x: 600, y: 1000 }
      },
      { action: 'release' }
    ]),
      I.wait(3)
    I.see(this.locs.lblPaymentSuccess)
    I.wait(3)
  }
}
