// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iconList: [
    {
        icon: 'choiceness',
        color: 'black',
        badge: 0,
        name: '当地特色'
    },{
        icon: 'upstage',
        color: 'yellow',
        badge: 0,
        name: '排行榜'
    },{
      icon: 'shop',
      color: 'orange',
      badge: 0,
      name: '交赞餐厅'
    }, {
      icon: 'location',
      color: 'cyan',
      badge: 0,
      name: '地铁图'
    }, {
      icon: 'baby',
      color: 'green',
      badge: 0,
      name: '下午茶'
    }, {
      icon: 'punch',
      color: 'olive',
      badge: 0,
      name: '酒店'
    }, {
      icon: 'discover',
      color: 'purple',
      badge: 0,
      name: '导航'
    }, {
      icon: 'question',
      color: 'mauve',
      badge: 0,
      name: '帮助'
    }, {
      icon: 'command',
      color: 'purple',
      badge: 0,
      name: '问答'
    }, {
      icon: 'brand',
      color: 'mauve',
      badge: 0,
      name: '版权'
    }],
    gridCol:4,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  toSubway_map:function(e){
    console.log(e.currentTarget.dataset.name)
    if(e.currentTarget.dataset.name=="地铁图"){
      let plugin = requirePlugin("subway");
      let key = 'E4OBZ-DVXK6-TFMSH-E3XFN-B2VX7-HVFFL';//使用在腾讯位置服务申请的key;
      let referer = '旅游推荐系统'; //调用插件的app的名称
      wx.navigateTo({
        url: 'plugin://subway/index?key=' + key + '&referer=' + referer
    });
    }
    else if(e.currentTarget.dataset.name=="当地特色"){
      wx.navigateTo({
        url: '../local_charac/local_charac',
      })
    }
    else if(e.currentTarget.dataset.name=="排行榜"){
      wx.navigateTo({
        url: '../ranking_list/ranking_list',
      })
    }
    else if(e.currentTarget.dataset.name=="交赞餐厅"){
      wx.navigateTo({
        url: '../restaurant/restaurant',
      })
    }
    else if(e.currentTarget.dataset.name=="下午茶"){
      wx.navigateTo({
        url: '../afternoon_tea/afternoon_tea',
      })
    }
    else if(e.currentTarget.dataset.name=="酒店"){
      wx.navigateTo({
        url: '../hotel/hotel',
      })
    }
    else if(e.currentTarget.dataset.name=="导航"){
      let plugin = requirePlugin('routePlan');
      let key = 'E4OBZ-DVXK6-TFMSH-E3XFN-B2VX7-HVFFL';  //使用在腾讯位置服务申请的key
      let referer = '旅游推荐系统';   //调用插件的app的名称
      let endPoint = JSON.stringify({  //终点
        
      });
      wx.navigateTo({
        url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
      });
    }
    
    
  }


})