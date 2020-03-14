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
    toView: 'one',
    kwd:' ',
    loadingTxt: "加载更多"
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