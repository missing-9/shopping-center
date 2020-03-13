//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    announcement: 'Vant Weapp 是移动端 Vue 组件库 Vant 的小程序版本，两者基于相同的视觉规范，提供一致的 API 接口，助力开发者快速搭建小程序应用。',
    swiper: {
      imgs: ['/static/img/swiper-item1.jpg', '/static/img/swiper-item2.jpg', '/static/img/swiper-item3.jpg'],
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      interval: 2000,
      duration: 500
    },
    searchValue: '',
    grids: [
      { text: '快速购买', icon: '/static/img/purchase.png', url: '' },
      { text: '拼团', icon: '/static/img/group-buy.png', url: '' },
      { text: '秒杀', icon: '', url: '' },
      { text: '预约', icon: '', url: '' },
      { text: '文章', icon: '', url: '' },
      { text: '视频', icon: '', url: '' },
      { text: '优惠券', icon: '', url: '' },
      { text: '余额', icon: '', url: '' },
    ]

  },
});