<template>
  <van-nav-bar :title="navs[active].navtext" left-text="返回" left-arrow @click-left="$router.back()">
    <van-icon :name="navs[active].navicon" slot="right" size="18px" />
  </van-nav-bar>
</template>

<script>
export default {
  props: {
    navs: {
      type: Array,
      required: true
    },
    active:{
      type:Number,
      default:0
    }
  },
  data() {
    return {
      // goods:[],
    };
  }
};
</script>

<style>
</style>