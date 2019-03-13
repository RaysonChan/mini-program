// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [],          // 图片的网络地址
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    circular: true,      // 是否采用衔接滑动
    navList: []          // 九宫格数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setStorage({
      key:"AAA"
    })
    // var that = this
    wx.request({
      url: 'https://locally.uieee.com/slides',
      // 成功的回调函数
      // 箭头函数可以改变this的指向，原本是谁调用的这个函数，那么this就指向谁，现在变成了指向他的父级。
      success: (res) => {
        // console.log('请求的轮播图数据---->', res)
        // console.log(this)
        // this 指向问题
        this.setData({
          imgUrls: res.data
        })
      }
    })
    wx.request({
      url: 'https://locally.uieee.com/categories',
      success: (res) => {
        // console.log('九宫格数据！', res)
        this.setData({
          navList: res.data
        })
      }
    })
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

  }
})