const orders = {
  0: [{
      order_id: 11,
      user_id: 11,
      order_number: 'a1',
      order_price: 12,
      order_pay: 0,
      is_send: '否',
      create_time: "2020-05-03"
    },
    {
      order_id: 12,
      user_id: 12,
      order_number: 'a2',
      order_price: 33,
      order_pay: 0,
      is_send: '否',
      create_time: "2019-12-15"
    },
  ],
  1: [{
      order_id: 21,
      user_id: 21,
      order_number: 'b1',
      order_price: 10,
      order_pay: 0,
      is_send: '否',
      create_time: "2020-06-12"
    },
    {
      order_id: 22,
      user_id: 1,
      order_number: 'b2',
      order_price: 33,
      order_pay: 0,
      is_send: '否',
      create_time: "2009-12-15"
    },
  ],
  2: [{
    order_id: 23,
    user_id: 1,
    order_number: 'c1',
    order_price: 12,
    order_pay: 0,
    is_send: '否',
    create_time: "2020-05-03"
  },
  {
    order_id: 11,
    user_id: 1,
    order_number: 'c2',
    order_price: 33,
    order_pay: 0,
    is_send: '否',
    create_time: "2019-12-15"
  },
  ],
  3: [{
    order_id: 10,
    user_id: 1,
    order_number: 'd1',
    order_price: 12,
    order_pay: 0,
    is_send: '否',
    create_time: "2020-05-03"
  },
  {
    order_id: 11,
    user_id: 1,
    order_number: 'd2',
    order_price: 33,
    order_pay: 0,
    is_send: '否',
    create_time: "2019-12-15"
  },
  ],
}

const getOrders = type => orders[type];

export default getOrders;