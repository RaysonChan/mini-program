// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    haveHead: false,   // 用户是否有头像，有就显示他自己的头像，没有就调用微信的头像
    headPic: ''           // 用户上传的头像
  },
  // 换头像
  changeHeadPic() {
    wx.chooseImage({
      count: 3,       // 上传图片的数量
      success: (res) => {
        // console.log('上传图片成功------>', res)
        this.setData({
          headPic: res.tempFilePaths[0]
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'AAA',
      success: (res) => {
        console.log(res.data)
      },
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