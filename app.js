//app注册
App({
  onLaunch() {
    console.log('App.onLaunch()');//控制台输出开始运行
      },
  onShow: function () {
       },
  onHide: function () {
  },
  

  //本应用全局数据
  globalData: {
    movies:{},//从聚合数据API上获取的数据
    web:""//购票页面所在网页


  }
      
})

