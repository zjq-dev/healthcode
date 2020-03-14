App({
  // 声明全局数据
  globalData: {
    API: "https://yidao.chengziapp.com/",
    API_SLW: 'https://zhyw.ymyimi.cn:8085/ms/',
    // GETCOOKIE: 'base/login/gobal_login_intojson.do?username=gzjyyljkyh&password=959425f1bf8541f7e99b57cc80d84e6d&_ignorevmscode="Y"',
    // API_SLW: 'https://moringsoft.imwork.net:7008/ms/',
    GETCOOKIE: 'base/login/gobal_login_intojson.do?username=gzjyyljkyh&password=4c27f87e057712e2904065f1126a593a&_ignorevmscode="Y"',
    API_QRcode: 'http://yidao.chengziapp.com/iiw/iiw.familymeeting_remote/webapp/files/goto?code=Z#',
    isAuthor: false, // 是否授权
    isLogin: true, // 是否登录
    isRegister: true, // 是否注册
    authCode: null, // 授权信息
    userInfo: null, // 用户信息，到时候登录成功会将所有用户信息放在这个字段，比如手机号，身份证，实名信息等
  },

  // 声明全局方法
  getUserInfo() {
    let that = this
    return new Promise((resolve, reject) => {
      if (that.globalData.userInfo) resolve(that.globalData.userInfo)
      // 调用用户授权 API
      my.getAuthCode({
        scopes: ['auth_user'],
        success: authcode => {
          console.log(authcode)
          that.globalData.isAuthor = true
          that.globalData.authCode = authcode
          // 调用获取用户信息 API
          my.getAuthUserInfo({
            success: res => {
              that.globalData.userInfo = res
              resolve(that.globalData.userInfo)
            },
            fail: err => {
              reject(err)
              my.showToast({
                type: 'fail',
                content: err.errorMessage,
                duration: 1000
              })
            },
          })
        },
        fail: err => {
          reject(err)
          my.showToast({
            type: 'fail',
            content: err.errorMessage,
            duration: 1000
          })
        },
      })
    })
  },
  onLaunch(options) {
  },
  onShow(options) {
  },
});
