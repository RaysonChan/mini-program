// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    page: 1,
    limit: 10,
    list: []
  },
  // 把当前这条数据存储到storage中
  setDetail(e) {
    console.log(e.currentTarget.dataset.detail);
    wx.setStorage({
      key: 'currentDetail',
      data: e.currentTarget.dataset.detail
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log('传进来的id', options.id)
    this.setData({
      id: options.id
    })
    // 设置title
    wx.setNavigationBarTitle({
      title: options.title
    })
    wx.request({
      // url: 'https://locally.uieee.com/categories/'+ this.data.id +'/shops',
      // 模板字符串 `string ${变量} string`
      url: `https://locally.uieee.com/categories/${this.data.id}/shops`,
      data: {
        // 分页操作，避免一次性请求过多数据造成不好的体验
        _page: this.data.page,
        _limit: this.data.limit
      },
      success: (res) => {
        console.log(res)
        this.setData({
          list: res.data
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
    // console.log('到底')
    this.setData({
      page: this.data.page + 1
    })
    // console.log('当前页码======>', this.data.page)
    wx.request({
      // url: 'https://locally.uieee.com/categories/'+ this.data.id +'/shops',
      // 模板字符串 `string ${变量} string`
      url: `https://locally.uieee.com/categories/${this.data.id}/shops`,
      data: {
        // 分页操作，避免一次性请求过多数据造成不好的体验
        _page: this.data.page,
        _limit: this.data.limit
      },
      success: (res) => {
        console.log(res)
        this.setData({
          list: this.data.list.concat(res.data)
        })
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})