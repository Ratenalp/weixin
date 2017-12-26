//该页面实现对即将上映的电影的显示
var app = getApp(),
service = require('../../../service/movie/movie');
Page({
  data: {
    movies: {}
  },
  onLoad: function (options) {
    this.setData({
      movies: app.movies.data[1]//从返回数据获取即将上映影片信息
    });
    console.log(this.data.movies);
  },
  onReady: function () {

  },
  onShow: function () {
    this.setData({
      movies: app.movies.data[1]//从返回数据获取即将上映影片信息
    });
    console.log(this.data.movies);
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
})