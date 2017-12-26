//该页面实现对正在上映的电影的显示
var service = require('../../../service/movie/movie'),
app = getApp()
;
Page({
  data: {
  movies:{}
  },
  onLoad: function (options) {

   this.setData({
     movies: app.movies.data[0],//从返回数据获取正在上映影片信息
    });
    console.log(this.data.movies);
  },
  onShow: function () {
    this.setData({
      movies: app.movies.data[0]
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