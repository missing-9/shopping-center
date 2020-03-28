import getOrders from '../../mock/orders.js';

Page({
  data: {
    orders: [],
    tabs: [{
        id: 0,
        value: "全部",
        isActive: true
      },
      {
        id: 1,
        value: "待付款",
        isActive: false
      }, {
        id: 2,
        value: "待发货",
        isActive: false
      },
      {
        id: 3,
        value: "退款/退货",
        isActive: false
      },
    ],
  },

  onChange(e) {
    const {
      index
    } = e.detail;
    let {
      tabs
    } = this.data;
    tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
    this.setData({
      tabs
    })
  },

  getOrders(type) {
    const res = getOrders(type);
    this.setData({
      orders: res.map(v => ({ ...v,
        create_time_cn: (new String(v.create_time).replace(/-/g, "/"))
      }))
    })
  },

  onShow: function(options) {
    let pages = getCurrentPages();
    let currentPage = pages[pages.length - 1];
    const {
      type
    } = currentPage.options;
    this.changeTitleByIndex(type - 1);
    this.getOrders(type - 1);
  },

  changeTitleByIndex(index) {
    let {
      tabs
    } = this.data;
    tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
    this.setData({
      tabs
    })
  },
  handleTabsItemChange(e) {
    const {
      index
    } = e.detail;
    this.changeTitleByIndex(index);
    this.getOrders(index);
  }
})