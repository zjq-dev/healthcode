Page({
  data: {
  },
  onLoad(query) {
    // 页面加载
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
