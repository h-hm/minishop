<template>
  <van-grid :border="true" :column-num="2" >
    <van-grid-item v-for="(good,index) in goods" :key="index" :to="'/product-detail/'+good.id">
      <van-image :src="good.images" />
      <p class="name">{{good.name}}</p>
      <p>{{good.info}}</p>
      <p class="price">￥{{(good.price).toFixed(2)}}</p>
    </van-grid-item>
  </van-grid>
</template>

<script>
// toFixed()  四舍五入为指定小数位数的数字
export default {
  props:{
    goods:{
      type:Array,
      required:true,
    }
  },
  data(){
    return{
      // goods:[],
    }
  }
};
</script>

<style scoped>
p{
  font-size: 1rem;
}
.name {
  font-weight: bold;
}
 .price {
  color: red;
}
.van-image{
  width: 8.3rem;

}

</style>