const { I } = inject();

module.exports = {

  homeMenu: {
    addCart: '//*[contains(text(),"Add to cart")]',
    pageBack: '//*[contains(text(),"Back to products")]'
  },

  addBackpackToCart(){
    I.wait(2)
    I.click('//*[contains(text(),"Sauce Labs Backpack")]')  
    I.wait(2)

    I.touchPerform([{
      action: 'longPress',
      options: { x: 600, y: 1200 }}, 
    {  
      action: 'moveTo', 
      options: { x: 600, y: 450 } 
    }, {action: 'release'}]),

    I.wait(3)
    I.click(this.homeMenu.addCart)
    I.wait(3)
  },

  backMenu(){
    I.touchPerform([{
      action: 'longPress',
      options: { x: 600, y: 450 }}, 
    {  
      action: 'moveTo', 
      options: { x: 600, y: 1200 } 
    }, {action: 'release'}]),
  
    I.wait(3)
    I.click(this.homeMenu.pageBack)
    I.wait(3)
  }
}
