const data = {
  fruit: [
    {
      id: 1,
      name: 'item1',
      img: 'https://img.yzcdn.cn/vant/apple-1.jpg',
      priceInfo: [{ category: 'a', price: 100 }, { category: 'b', price: 200 }],
    },
    {
      id: 2,
      name: 'item2',
      img: 'https://img.yzcdn.cn/vant/apple-2.jpg',
      priceInfo: [{ category: 'c', price: 300 }, { category: 'd', price: 400 }],
    },
  ],
  digital: [
    {
      id: 3,
      name: 'item3',
      img: 'https://img.yzcdn.cn/vant/apple-3.jpg',
      priceInfo: [{ category: 'e', price: 500 }],
    },
    {
      id: 4,
      name: 'item4',
      img: 'https://img.yzcdn.cn/vant/apple-4.jpg',
      priceInfo: [{ category: 'g', price: 100 }, { category: 'h', price: 200 }, { category: 'i', price: 300 }],
    }
  ]
}

const getData = type => data[type];

export default getData;