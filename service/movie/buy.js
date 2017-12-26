//本页面实现从聚合数据API接口中获取购票网站数据
var handle;
var app = getApp();
handle = {
  getData: function () {
    wx.request({
      url: 'https://v.juhe.cn/wepiao/query?key=72c09c5573bca63e7e19d2a64ff58e56',
      method: 'GET',
      data: {
        apikey: '72c09c5573bca63e7e19d2a64ff58e56'
      },
      header: {
        'Content-Type': 'application/json',
        'apikey': '72c09c5573bca63e7e19d2a64ff58e56'
      },
      success: function (res) {
        app.web = res.data.result.h5url;//保存到全局数据
        console.log(app.web);//控制台输出数据查看是否有误

      },
      fail: function () {
        console.log(app.web);//控制台输出数据查看是否有误
      }, end: function () {
        console.log();
      }
    });
  }
}

module.exports = handle;
