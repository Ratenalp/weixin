//此页面实现导航还有小程序启动初次数据获取
//调用聚合数据API获得近期影讯
//组队按钮因技术原因尚未开发完成
var service = require('../../service/movie/movie'),
  utils = require('../../common/utils/utils'),
  ser = require('../../service/movie/buy')
 ;
Page({
  data: {
    movies:{}
  },
  onReady: function () {
    
  },
  onShow:function(){
    service.getData();
    ser.getData();
  },
  turn: function () {
    var self = this,
    app=getApp();
      wx.navigateTo({
      url: '../first/now/now'
    })
  },
  change: function () {
    var self = this,
      app = getApp();
    wx.navigateTo({
      url: '../first/next/next'
    })
     },
  onUnload: function () {
   
  },
  onHide: function () {
    
  },
});







