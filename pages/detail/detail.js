//本页面实现对影片详细数据的输出和展示
var service = require('../../service/movie/movie'),
  utils = require('../../common/utils/utils'),
  app = getApp();

Page({
  data: {
    movie: {},
    id: 0,
    moviesid: 0,
    screen: {
      minHeight: 'auto'
    }
  },
  onShow: function () {
    console.log(this.data.moviesid);//调试信息
    console.log(this.data.id);//调试信息
    this.setData({
      movie:app.movies.data[this.data.id].data[this.data.moviesid]
      //获得具体影片信息
    });
    console.log(this.data.movie);//调试信息
  },
  onLoad: function (options) {
    var self = this;
    utils.showLoading();
//设置屏幕高度，不留白
    wx.getSystemInfo({
      success: function (info) {
        self.setData({
          'screen.minHeight': info.windowHeight + 'px'
        });
      }
    });
    //每次启动从url中获取参数，并保存到本页面数据，使其获得影片具体编号
    this.setData({
      moviesid: options.id,
      id: options.item
    });
  }, onHide: function () {
    wx.navigateBack(1);//这个实现退出页面后关闭页面，使其每次打开都调用onLoad函数
  },
  onUnload: function () {
 
  },
});


