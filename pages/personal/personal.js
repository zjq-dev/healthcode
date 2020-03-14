const app = getApp();

Page({
  data: {
    userInfo: null
  },
  pageTo(e) {
    // console.log(e.currentTarget.dataset.link)
    my.navigateTo({ url: e.currentTarget.dataset.link })
  },
  realName() {
    if (app.globalData.isRegister) {
      my.navigateTo({
        url: '../user/user',
      })
    } else {
      my.navigateTo({
        url: '../register/register',
      })
    }
  },
  onTabItemTap() {
    app.getUserInfo().then(res => {
      console.log(res)
      this.setData({ userInfo: res})
    })
  },
  onLoad(query) {
    // 页面加载
    app.getUserInfo().then(res => {
      console.log(res)
      this.setData({ userInfo: res})
    })
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
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
