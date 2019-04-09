<template>
  <section class="m-istyle">
    <dl @mouseover="over">
      <dt>有格调</dt>
      <dd
        :class="{active:kind==='all'}"
        kind="all"
        keyword="景点">全部</dd>
      <dd
        :class="{active:kind==='part'}"
        kind="part"
        keyword="美食">约会聚餐</dd>
      <dd
        :class="{active:kind==='spa'}"
        kind="spa"
        keyword="丽人">丽人SPA</dd>
      <dd
        :class="{active:kind==='movie'}"
        kind="movie"
        keyword="电影">电影演出</dd>
      <dd
        :class="{active:kind==='travel'}"
        kind="travel"
        keyword="旅游">品质出游</dd>
    </dl>
    <ul class="ibody">
      <li
        v-for="item in cur"
        :key="item.title">
        <el-card
          :body-style="{ padding: '0px' }"
          shadow="never">
          <img
            :src="item.imgUrl"
            class="image">
          <ul class="cbody">
            <li class="title">{{ item.title }}</li>
            <li class="pos"><span>{{ item.subTitle }}</span></li>
            <li class="price">￥<em>{{ item.currentPrice }}</em><span>/起</span></li>
          </ul>
        </el-card>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  data: () => {
    return {
      kind: 'all',
      list: {
        all: [{
          "id": "50054223_163046301",
          "style": null,
          "from": "DEAL_DAOCAN",
          "stid": "190046582394960273583243688946370139431_c1_eb0ede3b2059052ffeef5216d5ee46ee9",
          "ctpoi": null,
          "iUrl": "//www.meituan.com/meishi/163046301",
          "mge": {},
          "imgUrl": "http://p1.meituan.net/msmerchant/df89bccee7a1733ab30a19827a0a94e4427794.jpg@368w_208h_1e_1c",
          "imageTag": null,
          "title": "晓本烘焙·茶本铺（东方广场店）",
          "titleTag": null,
          "topRightInfo": null,
          "star": null,
          "subTitle": "星座生日蛋糕1个，约6英寸，圆形",
          "tags": null,
          "subTitle2": null,
          "bottomInfo": "王府井/东单",
          "reasonId": null,
          "oldPrice": "门市价¥298",
          "currentPrice": "268",
        }, {
          "id": "55808488_2723381",
          "style": null,
          "from": "DEAL_DAOCAN",
          "stid": "190046582394960273583243688946370139431_c2_eb0ede3b2059052ffeef5216d5ee46ee9",
          "ctpoi": null,
          "iUrl": "//www.meituan.com/meishi/2723381",
          "mge": {},
          "imgUrl": "https://p1.meituan.net/msmerchant/f0f72ccd78773cc5a0156b1c00d588c0961404.jpg@368w_208h_1e_1c",
          "imageTag": null,
          "title": "大董（王府井店）",
          "titleTag": null,
          "topRightInfo": null,
          "star": null,
          "subTitle": "春季糖醋黄鱼套餐，建议4人使用",
          "tags": null,
          "subTitle2": null,
          "bottomInfo": "王府井/东单",
          "reasonId": null,
          "oldPrice": "门市价¥1472.8",
          "currentPrice": "1400",
        }, {
          "id": "48692047_262690",
          "style": null,
          "from": "DEAL_DAOCAN",
          "stid": "190046582394960273583243688946370139431_c3_eb0ede3b2059052ffeef5216d5ee46ee9",
          "ctpoi": null,
          "iUrl": "//www.meituan.com/meishi/262690",
          "mge": {},
          "imgUrl": "https://p1.meituan.net/msmerchant/1a8aaac8cfcf76fae83c2ecd6405bd4c1457315.jpg@368w_208h_1e_1c",
          "imageTag": null,
          "title": "北京饭店阳光咖啡厅",
          "titleTag": null,
          "topRightInfo": null,
          "star": null,
          "subTitle": "特价自助晚餐",
          "tags": null,
          "subTitle2": null,
          "bottomInfo": "王府井/东单",
          "reasonId": null,
          "oldPrice": "门市价¥298",
          "currentPrice": "238",
        }, {
          "id": "49459559_4858264",
          "style": null,
          "from": "DEAL_DAOCAN",
          "stid": "190046582394960273583243688946370139431_c4_eb0ede3b2059052ffeef5216d5ee46ee9",
          "ctpoi": null,
          "iUrl": "//www.meituan.com/meishi/4858264",
          "mge": {},
          "imgUrl": "http://p0.meituan.net/merchantpic/8d40aacd77004b484151c1ee547918d287691.jpg@368w_208h_1e_1c",
          "imageTag": null,
          "title": "天安瑞嘉烤鸭",
          "titleTag": null,
          "topRightInfo": null,
          "star": null,
          "subTitle": "北京烤鸭3人套餐",
          "tags": null,
          "subTitle2": null,
          "bottomInfo": "王府井/东单",
          "reasonId": null,
          "oldPrice": "门市价¥275",
          "currentPrice": "198",
        }, {
          "id": "41877507",
          "style": null,
          "from": "POI_CINEMA",
          "stid": null,
          "ctpoi": "192410205306732987751250246922709053083_c5_eb0ede3b2059052ffeef5216d5ee46ee9_f41877507",
          "iUrl": "//www.meituan.com/shop/41877507",
          "mge": {},
          "imgUrl": "http://p1.meituan.net/deal/45b6e31d5f5d23a49dcef128945112c581314.jpg@368w_208h_1e_1c",
          "imageTag": null,
          "title": "大地影院(垡头永辉店)",
          "titleTag": null,
          "topRightInfo": null,
          "star": null,
          "subTitle": "免押金,儿童票,有WIFI,RealD厅",
          "currentPrice": "19.9",
          "discount": null,
          "cfrom": null,
          "priceType": "人均",
        }, {
          "id": "46962603_526725",
          "style": null,
          "from": "DEAL_DAOCAN",
          "stid": "190046582394960273583243688946370139431_c6_eb0ede3b2059052ffeef5216d5ee46ee9",
          "ctpoi": null,
          "iUrl": "//www.meituan.com/meishi/526725",
          "mge": {},
          "imgUrl": "http://p1.meituan.net/poi/697cf6a6e1785559a7bb31d0bf03c649110592.jpg@368w_208h_1e_1c",
          "imageTag": null,
          "title": "北京饭店诺金东33餐厅",
          "titleTag": null,
          "topRightInfo": null,
          "star": null,
          "subTitle": "豪华宴席A款1席",
          "tags": null,
          "subTitle2": null,
          "bottomInfo": "王府井/东单",
          "reasonId": null,
          "oldPrice": "门市价¥6516",
          "currentPrice": "5000",
        }],
        part: [{
          "id": "54624430_2709877",
          "style": null,
          "from": "DEAL_DAOCAN",
          "stid": "080040938424159152116774577773591892055_c0_e005a21a3bb15cef6a8a61524dcb99193",
          "ctpoi": null,
          "iUrl": "//www.meituan.com/meishi/2709877",
          "mge": {},
          "imgUrl": "http://p0.meituan.net/mogu/50c775bda3ec3c371e4ed320b5cfe53393356.jpg@368w_208h_1e_1c",
          "imageTag": null,
          "title": "老巷子菜馆（总店）",
          "titleTag": null,
          "topRightInfo": null,
          "star": null,
          "subTitle": "外带烤鸭，建议2人使用",
          "tags": null,
          "subTitle2": null,
          "bottomInfo": "东城区",
          "reasonId": null,
          "oldPrice": "门市价¥253",
          "currentPrice": "158",
        }, {
          "id": "53880618_1557006",
          "style": null,
          "from": "DEAL_DAOCAN",
          "stid": "080040938424159152116774577773591892055_c1_e005a21a3bb15cef6a8a61524dcb99193",
          "ctpoi": null,
          "iUrl": "//www.meituan.com/meishi/1557006",
          "mge": {},
          "imgUrl": "http://p0.meituan.net/scarlett/3d7277585e3718c032f31b3d028618d490198.png@368w_208h_1e_1c",
          "imageTag": null,
          "title": "俏江南（东方广场店）",
          "titleTag": null,
          "topRightInfo": null,
          "star": null,
          "subTitle": "四人套餐，提供免费WiFi",
          "tags": null,
          "subTitle2": null,
          "bottomInfo": "王府井/东单",
          "reasonId": null,
          "oldPrice": "门市价¥1426",
          "currentPrice": "388",
        }, {
          "id": "53752002_42304348",
          "style": null,
          "from": "DEAL_DAOCAN",
          "stid": "080040938424159152116774577773591892055_c2_e005a21a3bb15cef6a8a61524dcb99193",
          "ctpoi": null,
          "iUrl": "//www.meituan.com/meishi/42304348",
          "mge": {},
          "imgUrl": "https://img.meituan.net/msmerchant/f682553974f941fb5f616991dc65876b1319400.jpg@368w_208h_1e_1c",
          "imageTag": null,
          "title": "南京精菜馆（北京南京大饭店分店）",
          "titleTag": null,
          "topRightInfo": null,
          "star": null,
          "subTitle": "3人套餐1份，提供免费WiFi",
          "tags": null,
          "subTitle2": null,
          "bottomInfo": "王府井/东单",
          "reasonId": null,
          "oldPrice": "门市价¥513",
          "currentPrice": "298",
        }, {
          "id": "50876733_51047229",
          "style": null,
          "from": "DEAL_DAOCAN",
          "stid": "080040938424159152116774577773591892055_c3_e005a21a3bb15cef6a8a61524dcb99193",
          "ctpoi": null,
          "iUrl": "//www.meituan.com/meishi/51047229",
          "mge": {},
          "imgUrl": "https://img.meituan.net/msmerchant/81ff3ba5e15155f39ae56761ccfc157d5844372.png@368w_208h_1e_1c",
          "imageTag": null,
          "title": "theFive伍·中原食堂（王府中环店）",
          "titleTag": null,
          "topRightInfo": null,
          "star": null,
          "subTitle": "单人套餐A，提供免费WiFi",
          "tags": null,
          "subTitle2": null,
          "bottomInfo": "王府井/东单",
          "reasonId": null,
          "oldPrice": "门市价¥91",
          "currentPrice": "78",
        }, {
          "id": "55846901_177766286",
          "style": null,
          "from": "DEAL_DAOCAN",
          "stid": "080040938424159152116774577773591892055_c4_e005a21a3bb15cef6a8a61524dcb99193",
          "ctpoi": null,
          "iUrl": "//www.meituan.com/meishi/177766286",
          "mge": {},
          "imgUrl": "https://img.meituan.net/msmerchant/606fde7049c2ff8c224f90ff6383e3f730729.jpg@368w_208h_1e_1c",
          "imageTag": null,
          "title": "小船牛排（合景·摩方店）",
          "titleTag": null,
          "topRightInfo": null,
          "star": null,
          "subTitle": "双人下午小食套餐",
          "tags": null,
          "subTitle2": null,
          "bottomInfo": "崇文门",
          "reasonId": null,
          "oldPrice": "门市价¥88",
          "currentPrice": "68",
        }, {
          "id": "56207076_184571820",
          "style": null,
          "from": "DEAL_DAOCAN",
          "stid": "080040938424159152116774577773591892055_c5_e005a21a3bb15cef6a8a61524dcb99193",
          "ctpoi": null,
          "iUrl": "//www.meituan.com/meishi/184571820",
          "mge": {},
          "imgUrl": "https://img.meituan.net/msmerchant/d55a5038b905e0630012604d39fea1d3467183.jpg@368w_208h_1e_1c",
          "imageTag": null,
          "title": "bluefrog蓝蛙（合景·摩方店）",
          "titleTag": null,
          "topRightInfo": null,
          "star": null,
          "subTitle": "甄选海陆套餐，建议1-2人使用",
          "tags": null,
          "subTitle2": null,
          "bottomInfo": "崇文门新世界",
          "reasonId": null,
          "oldPrice": "门市价¥316",
          "currentPrice": "218",
        }],
        spa: [],
        movie: [],
        travel: []
      }
    }
  },
  computed: {
    cur: function () {
      return this.list[this.kind]
    }
  },
  // async mounted(){
  //   let self=this;
  //   let {status,data:{count,pois}}=await self.$axios.get('/search/resultsByKeywords',{
  //     params:{
  //       keyword:'景点',
  //       city:self.$store.state.geo.position.city
  //     }
  //   })
  //   if(status===200&&count>0){
  //     let r= pois.filter(item=>item.photos.length).map(item=>{
  //       return {
  //         title:item.name,
  //         pos:item.type.split(';')[0],
  //         price:item.biz_ext.cost||'暂无',
  //         img:item.photos[0].url,
  //         url:'//abc.com'
  //       }
  //     })
  //     self.list[self.kind]=r.slice(0,9)
  //   }else{
  //     self.list[self.kind]=[]
  //   }
  // },
  methods: {
    over: async function (e) {
      let dom = e.target
      let tag = dom.tagName.toLowerCase()
      let self = this
      if (tag === 'dd') {
        this.kind = dom.getAttribute('kind')
      //   let keyword = dom.getAttribute('keyword')
      //   let {status,data:{count,pois}}=await self.$axios.get('/search/resultsByKeywords',{
      //     params:{
      //       keyword,
      //       city:self.$store.state.geo.position.city
      //     }
      //   })
      //   if(status===200&&count>0){
      //     let r= pois.filter(item=>item.photos.length).map(item=>{
      //       return {
      //         title:item.name,
      //         pos:item.type.split(';')[0],
      //         price:item.biz_ext.cost||'暂无',
      //         img:item.photos[0].url,
      //         url:'//abc.com'
      //       }
      //     })
      //     self.list[self.kind]=r.slice(0,9)
      //   }else{
      //     self.list[self.kind]=[]
      //   }
      }
    }
  },

}
</script>
<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>
