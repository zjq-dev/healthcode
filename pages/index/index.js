// 获取全局 app 实例
const app = getApp();

Page({
  data: {
    navs: [
      { icon: '../../images/nav1.png', title: '人员健康码', desc: '信息互信共享，提高交接效率', link: '../health-code/health-code' },
      { icon: '../../images/nav2.png', title: '人员接收', desc: '精准识别，快速接收', link: '../acceptance/acceptance' },
      { icon: '../../images/nav3.png', title: '健康信息上报', desc: '按时上报健康状况，实时回传跟进', link: '../health-report/health-report' }
    ]
  },
  onItemClick(ev) {
    this.getLogin(this.data.navs[ev.currentTarget.dataset.index].link)
  },
  getLogin(link) {
    let that = this
    if (app.globalData.isLogin && app.globalData.isRegister) {
      // console.log({ status: 1, message: '已登录注册' })
      my.navigateTo({ url: link })
    } else if (app.globalData.isLogin) {
      // console.log({ status: 2, message: '已登录未注册' })
      my.navigateTo({ url: '../register/register' })
    } else {
      // console.log({ status: 3, message: '未登录' })
      my.navigateTo({ url: '../login/login' })
    }
  },
  onLoad(query) {
    // 页面加载
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
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
