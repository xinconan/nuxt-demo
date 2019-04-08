<template>
  <section class="page-index">
    <el-row>
      <el-col :span="5">
        <my-menu/>
      </el-col>
      <el-col :span="19">
        <life/>
      </el-col>
    </el-row>
    <el-row>
      <el-col></el-col>
    </el-row>
  </section>
</template>

<script>
import MyMenu from '~/components/index/menu.vue'
import Life from '~/components/index/life.vue'

export default {
  components: {
    MyMenu,
    Life
  }
}
</script>

<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>
