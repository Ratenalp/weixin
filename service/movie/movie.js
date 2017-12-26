//本页面实现从聚合数据API接口中获取最近影片的数据
var  handle;
var app=getApp();
handle = {
   getData: function () {
    wx.request({
      url: 'https://op.juhe.cn/onebox/movie/pmovie?key=6bd162e3b6c67df530c13539c8308b46&city=北京',
      method: 'GET',
      data: {
        apikey: '6bd162e3b6c67df530c13539c8308b46'
      },
      header: {
        'Content-Type': 'application/json',
        'apikey': '6bd162e3b6c67df530c13539c8308b46'
      },
      success: function (res) {
        app.movies =res.data.result;//保存到全局数据
        console.log(app.movies);//控制台输出数据查看是否有误
        
      },
      fail: function () {
        console.log(app.movies);//控制台输出数据查看是否有误
      },end:function(){
        console.log();
      }
    });
  }
}

module.exports = handle;
