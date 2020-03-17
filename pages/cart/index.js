const app = getApp();
// pages/cart/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    cartInfo: [],
    sumPrice: 0
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
    const sumPrice = app.globalData.cart.reduce((pre, cru) => {
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

  deleteItem(e) {
    const selectedId = e.currentTarget.dataset.id;
    const category = e.currentTarget.dataset.category;
    const cartInfo = this.data.cartInfo.filter(i => !(i.id === selectedId && i.selectedCategory === category));
    const sumPrice = cartInfo.reduce((pre, cru) => {
      const singleItem = cru.count * cru.selectedPrice;
      return pre += singleItem;
    }, 0);
    this.setData({ cartInfo, sumPrice });
    app.globalData.cart = cartInfo;
  },
  
})