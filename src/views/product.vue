<template>
  <div class="product-all">
    <van-row type="flex" justify="space-between" >
      <van-col>
        <van-sidebar v-model="active">
          <van-sidebar-item
            v-for="(item,key,index) in navs"
            :key="index"
            :title="key"
            :info="item.info"
            :to="'/product/'+key"
          />
        </van-sidebar>
      </van-col>
      <van-col class="goods">
          <router-view :navs="navs"></router-view>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      navs: {}
    };
  },
  created() {
    this.$http.get("/api/all").then(res => {
      // console.log(res)
      let arr = [];
      for (let key in res.data) {
      console.log(res.data[key])
        arr = arr.concat(res.data[key]);
      }
      this.navs["全部"] = arr;
      //console.log(this.navs) //返回数组
      // Object.assign()拼接两个对象
      Object.assign(this.navs, res.data);
      // ...展开运算符 用于取出参数对象中的所有可遍历属性，拷贝到当前对象之中
      this.navs = { ...this.navs };
      console.log(this.navs)
     // Object.keys() 
     // 传入对象返回key值;传入字符串返回索引
    //  console.log(Object.keys(this.navs)) 侧边栏分类名称数组
    //  console.log(this.$route.params.name)
     this.active=Object.keys(this.navs).indexOf(this.$route.params.name) 
    });
  }
};
</script>

<style>
.goods {
  padding: 12px 0;
}
.van-grid-item img {
  max-width: 100%;
  display: block;
  height: auto;
}
.product-all .van-sidebar {
  width: 8.5rem;
}
.product-all .van-grid-item__content p{
  font-size: 1.2rem;
  color: #999;
  line-height: 2.7rem;

}
</style>