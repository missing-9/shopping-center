// components/cart-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item: {
      type: Object,
    },
  },

  lifetimes: {
    attached() {
      this.setData({ item: this.properties.item });
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    item: {},
  },

  /**
   * 组件的方法列表
   */
  methods: {
    deleteItem() {
      const selectedId = this.data.item.id;
      const category = this.data.item.selectedCategory;
      this.triggerEvent('deleteItem', { selectedId, category });
    },
    changeCount(e) {
      const count = e.detail;
      const selectedId = this.data.item.id;
      const category = this.data.item.selectedCategory;
      const checked = this.data.item.checked;
      this.setData({ item: {...this.data.item, count } });
      this.triggerEvent('sumPrice', { selectedId, category, count, checked });
    },
    toggleCheck(e) {
      const checked = e.detail;
      const selectedId = this.data.item.id;
      const category = this.data.item.selectedCategory;
      const count = this.data.item.count;
      this.setData({ item: { ...this.data.item, checked } });
      this.triggerEvent('sumPrice', { selectedId, category, count, checked });
    }
  }
})
