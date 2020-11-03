//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    TabCur: 0,
    scrollLeft:0,
    TabCur_1: 0,
    scrollLeft_1:0,
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    tar_title:["旅迹","行程","收藏","备忘录"],
    tar_title_1:["景点","攻略"],
    temp:0,
    collect_temp:0
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  onReady: function () {
    
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  

  //导航栏
    tabSelect(e) {
      this.selectTar(e)
      console.log(e)
      this.setData({
        TabCur: e.currentTarget.dataset.id,
        scrollLeft: (e.currentTarget.dataset.id-1)*60
      })
    },

    


    selectTar:function(e){
      var id_temp = e.currentTarget.dataset.id
      this.setData({
        temp:id_temp
      })
      // console.log(this.data.temp)
    },

    tabSelect_1(e) {
      this.selectTar_1(e)
      console.log(e)
      this.setData({
        TabCur_1: e.currentTarget.dataset.id,
        scrollLeft_1: (e.currentTarget.dataset.id-1)*60
      })
    },

    selectTar_1:function(e){
      var id_temp = e.currentTarget.dataset.id
      this.setData({
        collect_temp:id_temp
      })
      // console.log(this.data.temp)
    },
    

})
