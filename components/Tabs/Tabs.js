Component({

  properties: {
tabs:{
  type:Array,
  value:[]
}
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemTap(e){
      //获取点击的索引
      const {index}=e.currentTarget.dataset;
      this.triggerEvent("tabsItemChange",{index});
    }
  }
})
