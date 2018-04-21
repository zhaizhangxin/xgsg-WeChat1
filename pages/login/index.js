//index.js  
//获取应用实例  
var app = getApp()
Page({
  data: {
    info: app.data.info,
    infofrominput: ''
  },
  onLoad: function () {
  },
  //跳转到新页面  
  gotonewpage: function () {
      //保存参数 
      wx.setStorageSync('infofrominput', this.data.infofrominput)
    wx.redirectTo({
      url: "/pages/my/index"
    });
  },
  //获取输入值  
  searchInputEvent: function (e) {
    console.log(e.detail.value)
    this.setData({ infofrominput: e.detail.value })
  }
})  