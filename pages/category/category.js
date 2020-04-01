import getCategory from '../../mock/category.js';


Page({
  data: {
    leftMenuList: [],
    rightContent: []
  },
  Cates: [],

  onLoad: function(options) {
    this.getCategory();
  },

  onChange({detail}){
    console.log(detail);
    this.setData({
      activeKey:detail
    })
  },

  getCategory() {
    const category = getCategory;
    this.Cates = category;
    let leftMenuList = this.Cates.map(v=>v.cat_name);
    let rightContent = this.Cates[0].children;
    this.setData({
      leftMenuList,
      rightContent
    })
  }

})