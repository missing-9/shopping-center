const app = getApp();
// pages/cart/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    cartInfo: [],
    sumPrice: 0,
    allCheck: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // app.globalData.cart = [{
    //   id: 1,
    //   name: 'item1',
    //   img: 'https://img.yzcdn.cn/vant/apple-1.jpg',
    //   priceInfo: [{ category: 'a', price: 100 }, { category: 'b', price: 200 }],
    //   selectedPrice: 100,
    //   selectedCategory: 'a'
    // }, {
    //     id: 2,
    //     name: 'item2',
    //     img: 'https://img.yzcdn.cn/vant/apple-1.jpg',
    //     priceInfo: [{ category: 'a', price: 100 }, { category: 'b', price: 200 }],
    //     selectedPrice: 200,
    //     selectedCategory: 'b'
    //   },];
    const sumPrice = app.globalData.cart.filter(i => i.checked).reduce((pre, cru) => {
      const singleItem = cru.count * cru.selectedPrice;
      return pre += singleItem;
    }, 0);
    this.setData({ cartInfo: app.globalData.cart, sumPrice });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  deleteItem({ detail: { selectedId, category } }) {
    const cartInfo = this.data.cartInfo.filter(i => !(i.id === selectedId && i.selectedCategory === category));
    const sumPrice = cartInfo.reduce((pre, cru) => {
      const singleItem = cru.count * cru.selectedPrice;
      return pre += singleItem;
    }, 0);
    this.setData({ cartInfo, sumPrice });
    app.globalData.cart = cartInfo;
  },

  sumPrice({ detail: { selectedId, category, count, checked } }) {
    const cartInfo = this.data.cartInfo;
    const current = cartInfo.find(i => i.id === selectedId && i.selectedCategory === category);
    current.count = count;
    current.checked = checked;
    const sumPrice = cartInfo.filter(i => i.checked).reduce((pre, cru) => {
      const singleItem = cru.count * cru.selectedPrice;
      return pre += singleItem;
    }, 0);
    this.setData({ cartInfo, sumPrice });
    if (!cartInfo.some(i => i.checked !== checked)) {
      this.setData({ allCheck: checked });
    }
    app.globalData.cart = cartInfo;
  },

  toggleCheck(e) {
    const allCheck = e.detail;
    const cartInfo = this.data.cartInfo;
    for (let item of cartInfo) {
      item.checked = allCheck;
    }
    const sumPrice = cartInfo.filter(i => i.checked).reduce((pre, cru) => {
      const singleItem = cru.count * cru.selectedPrice;
      return pre += singleItem;
    }, 0);
    this.setData({ allCheck, cartInfo, sumPrice });
    app.globalData.cart = cartInfo;
  },

  goCheck() {
    wx.navigateTo({ url: '../check-order/index'});
  }
  
})