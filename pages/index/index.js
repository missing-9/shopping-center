
Page({
  data: {
    announcement: 'Vant Weapp 是移动端 Vue 组件库 Vant 的小程序版本，两者基于相同的视觉规范，提供一致的 API 接口，助力开发者快速搭建小程序应用。',
    swiper: {
      imgs: ['/static/img/shop/swiper/swiper-item1.jpg', '/static/img/shop/swiper/swiper-item2.jpg',
'/static/img/shop/swiper/swiper-item3.jpg',],
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      interval: 2000,
      duration: 500
    },
    searchValue: '',
    grids: [
      { text: '快速购买', icon: '/static/img/shop/grids/purchase.png', url: './quickly-buy/index' },
      { text: '拼团', icon: '/static/img/shop/grids/group-buy.png', url: '' },
      { text: '秒杀', icon: '/static/img/shop/grids/clock.png', url: '../goods/index' },
      { text: '预约', icon: '/static/img/shop/grids/booking.png', url: '' },
      { text: '文章', icon: '/static/img/shop/grids/article.png', url: '' },
      { text: '视频', icon: '/static/img/shop/grids/vedio.png', url: '' },
      { text: '优惠券', icon: '/static/img/shop/grids/coupon.png', url: '' },
      { text: '余额', icon: '/static/img/shop/grids/balance.png', url: '' },
    ],
    show: false,
    goods: [
      {
        id: 1,
        name: 'item1',
        count: 1,
        price: 100,
        img: 'https://img.yzcdn.cn/vant/apple-1.jpg',
        category: ['a', 'b']
      },
      {
        id: 2,
        name: 'item2',
        count: 1,
        price: 200,
        img: 'https://img.yzcdn.cn/vant/apple-2.jpg',
        category: ['c', 'd']
      },
      {
        id: 3,
        name: 'item3',
        count: 1,
        price: 300,
        img: 'https://img.yzcdn.cn/vant/apple-3.jpg',
        category: ['e', 'f']
      },
      {
        id: 4,
        name: 'item4',
        count: 1,
        price: 400,
        img: 'https://img.yzcdn.cn/vant/apple-4.jpg',
        category: ['a']
      }
    ],
    currentGood: { },
  },
  jumpToSpecial() {
    wx.navigateTo({ url: './quickly-buy/index' });
  },
  showPopup(e) {
    const currentId = e.currentTarget.dataset.id;
    const currentGood = this.data.goods.find(item => item.id === currentId);
    this.setData({ currentGood, show: true });
  },
  onClose() {
    this.setData({ currentGood: {}, show: false });
  },
});