// components/good-modal.js
const computedBehavior = require('../../miniprogram_npm/miniprogram_npm/miniprogram-computed/index.js')
const app = getApp();
Component({
  behaviors: [computedBehavior],
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

  lifetimes: {
    attached() {
      const selectedCategory = this.properties.good.priceInfo[0].category;
      this.setData({ good: { ...this.properties.good, count: 1, selectedCategory } })
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    count: 1,
    good: {},
  },

  computed: {
    categories(data) {
      return data.good && data.good.priceInfo.map(i => i.category);
    },
    currentPrice(data) {
      if (data.good) {
        const selectedInfo = data.good.priceInfo.find(i => i.category === data.good.selectedCategory);
        return selectedInfo && selectedInfo.price;
      }
    }
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
      const current = cart.find(i => i.id === this.data.good.id)
      if (current) {
        current.count += this.data.count;
      } else {
        cart.push({ ...this.data.good, count: this.data.count });
      }
      this.onClose();
    },
    changeCategory(e) {
      const selectedCategory = e.currentTarget.dataset.category;
      this.setData({ good: { ...this.data.good, selectedCategory}})
    }
  }
})
