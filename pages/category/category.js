// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classType: [{
        "id": 1,
        "name": "水果1"
      },
      {
        "id": 2,
        "name": "水果2"
      },
      {
        "id": 3,
        "name": "水果3"
      }
    ],
    productList: [],
    productAll: [{
        "id": 1,
        "name": "苹果",
        "src": "/static/img/shop/fruit.jpg",
        "price": 2,
        "classid": 1
      },
      {
        "id": 2,
        "name": "香蕉",
        "src": "/static/img/shop/fruit.jpg",
        "price": 3,
        "classid": 1
      },
      {
        "id": 3,
        "name": "黄梨",
        "src": "/static/img/shop/fruit.jpg",
        "price": 4,
        "classid": 2
      },
      {
        "id": 4,
        "name": "柑橘",
        "src": "/static/img/shop/fruit.jpg",
        "price": 1,
        "classid": 2
      },
      {
        "id": 5,
        "name": "西瓜",
        "src": "/static/img/shop/fruit.jpg",
        "price": 6,
        "classid": 3
      },
      {
        "id": 6,
        "name": "甜橙",
        "src": "/static/img/shop/fruit.jpg",
        "price": 1.5,
        "classid": 3
      }
    ]
  },
  searchTab(e) {
    var p = this.data.productAll;
    var id = e.currentTarget.id;
    var list = [];
    for (var i = 0; i < p.length; i++) {
      if (p[i].classid == id) {
        list.push(p[i])
      }
    }
    this.setData({
      productList:list
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})