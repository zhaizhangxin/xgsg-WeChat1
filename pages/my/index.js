//newpage.js  
//获取应用实例  
var app = getApp()
Page({
  data: {
    infofromapp: app.data.infofromapp,
    infofromstorage: '',
  },
  onShow: function () {
    var _this = this;
    //获取  
    wx.getStorage({
      key: 'infofrominput',
      success: function (res) {
        console.log(res)
          _this.setData({
            infofromstorage: res.data,
          })
      },
      //失败调用
      fail:function(e){
      console.log(e)
      wx.redirectTo({
          url: "/pages/login/index"
        });
      }
    })
  }
})  