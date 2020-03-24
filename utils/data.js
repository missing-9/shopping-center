function getOrders(type) {
  var data = [];
  if (type == 1) {
    data = [{
        "order_id": 100,
        "":'',
      }

    ]
  }
  return data || [];
}
module.exports = {
  getSData: getSData
}