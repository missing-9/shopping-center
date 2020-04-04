const app = getApp();
Page({
  data: {
    cartInfo: []
  },
  onLoad() {
    this.setData({cartInfo: app.globalData.cart});
  }
});