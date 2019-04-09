<template>
  <div class="m-hcity">
    <dl>
      <dt>热门城市：</dt>
      <dd
        v-for="item in list"
        :key="item.id">{{ item.name==='市辖区'?item.province:item.name }}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  data(){
    return {
      list:[{
        name: '北京',
        id: '1',
      }, {
        name: '上海',
        id: '2'
      }, {
        name: '广州',
        id: '3'
      }, {
        name: '深圳',
        id: '4'
      }, {
        name: '天津',
        id: '5'
      }, {
        name: '西安',
        id: '6'
      }, {
        name: '重庆',
        id: '7'
      }, {
        name: '杭州',
        id: '8'
      }, {
        name: '南京',
        id: '9'
      }, {
        name: '武汉',
        id: '10'
      }, {
        name: '成都',
        id: '11'
      }]
    }
  },
  // async mounted(){
  //   let {status,data:{hots}}=await this.$axios.get('/geo/hotCity')
  //   if(status===200){
  //     this.list=hots
  //   }
  // }
}
</script>

<style lang="scss">
  @import "@/assets/css/changeCity/hot.scss";
</style>
