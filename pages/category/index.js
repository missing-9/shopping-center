//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    category: [{
        name: '热带辣果',
        id: 'one'
      },
      {
        name: '清新萌果',
        id: 'two'
      },
      {
        name: '留恋香果',
        id: 'three'
      },
    ],
    detail: [],
    curIndex: 0,
    isScroll: false,
    toView: 'one'
  },
  onReady:{
    wx.request({
      url: '',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  switchTab(e) {
    const self = this;
    this.setData({
      isScroll: true
    })
    setTimeout(function () {
      self.setData({
        toView: e.target.dataset.id,
        curIndex: e.target.dataset.index
      })
    }, 0)
    setTimeout(function () {
      self.setData({
        isScroll: false
      })
    }, 1)

  }
});