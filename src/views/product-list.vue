<template>
  <van-grid :border="true" :column-num="3" >
    <van-grid-item v-for="(good,index) in navs[$route.params.name]" :key="index" :to="'/product-detail/'+good.id">
      <van-image :src="good.images" />
      <p class="name">{{good.name.replace(/(?<=\s).+/,'')}}</p>
    </van-grid-item>
  </van-grid>
</template>

<script>
export default {
  props: {
    navs: {
      type: Object,
      required: true
    }
  },
  data(){
    return{
    }
  },
  created(){
  
  }
};
</script>

<style>
</style>