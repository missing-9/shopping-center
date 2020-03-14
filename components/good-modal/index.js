// components/good-modal.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    good: {
      type: Object,
    },
    show: {
      type: Boolean,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    count: 1,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClose() {
      this.triggerEvent('close');
      this.setData({ count: 1 });
    },
    changeCount(e) {
      this.setData({ count: e.detail });
    },
    addToCart() {
      const cart = app.globalData.cart;
      const current = cart.find(i => i.id === this.properties.good.id)
      if (current) {
        current.count += this.data.count;
      } else {
        cart.push(this.properties.good);
      }
      this.onClose();
    },
  }
})
