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