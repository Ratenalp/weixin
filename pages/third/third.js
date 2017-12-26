//本页面原计划实现购票网站的跳转，但微信小程序对此不开放
var service = require('../../service/movie/buy'),
app=getApp();
Page({
  data: {
  buy:""
  },
  onLoad: function (options) {
      service.getData();//调用service中的buy中的getData函数
        this.setData({
         buy: app.web//保存到本页面数据
        });
     console.log(this.data.buy);//控制台输出
  },
  onReady: function () {
  
  },
  onShow: function () {
    service.getData();//调用service中的buy中的getData函数
    this.setData({
      buy: app.web//保存到本页面数据
    });
    console.log(this.data.buy);//控制台输出
  },
  onHide: function () {
  
  },
  onUnload: function () {
  
  },
  onPullDownRefresh: function () {
  
  },
  onReachBottom: function () {
  
  },
  onShareAppMessage: function () {
  
  }
});