Page({
  data: {
    userInfo: {
      familyname: '某某某',
      idcard: '12345678906666',
      phone: '13212312312',
      syou: '江西省赣州司法局',
      type: 'T'
    },
    types: { 'T': '司法局', 'S': '司法所', 'J': '居委', 'F': '家属', 'O': '其他'}
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
