const app = getApp();

Page({
  data: {
    author: false,
    readed: false
  },
  onReaded() {
    this.setData({ readed: !this.data.readed })
  },
  onGetAuthorize() {
    app.getUserInfo().then(res => {
      console.log(res)
      this.setData({ userInfo: res })
    }).then(() => {
      this.setData({ author: app.globalData.isAuthor })
    })
  },
  onGetPhone() {
    if (!app.globalData.isAuthor) return
    my.getPhoneNumber({
      success: (res) => {
        let encryptedData = res.response;
        my.request({
          url: '你的后端服务端',
          data: encryptedData,
        });
      },
      fail: (res) => {
        console.log(res)
        console.log('getPhoneNumber_fail')
      },
    });
  },
  login() {},
  onLoad(query) {
    // 页面加载
    this.onGetAuthorize()
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: '驿道康汇',
      desc: '助力监管 共抗疫情',
      path: 'pages/index/index',
    };
  },
});
