<template>
  <div class="header">
    <!-- <the-header :navs="navs"></the-header> -->
    <div class="head">
      <van-image :src="src" />
    </div>
    <van-swipe :autoplay="4000">
      <van-swipe-item v-for="(image, index) in swipeImages" :key="index">
        <van-image :src="image" />
      </van-swipe-item>
    </van-swipe>
    <van-row type="flex" class="middle">
      <van-grid :border="false" :column-num="4">
        <van-grid-item v-for="item in serverImages" :key="item.id" :to="item.path">
          <van-image :src="item.img" />
        </van-grid-item>
      </van-grid>
    </van-row>
    <van-search v-model="search" @search="onSearch" @clear="onClear" @input="input" placeholder="请输入搜索关键词" clearable/>
    <van-cell  :value="textInfo" v-if="search.length !== 0 && searchData.length == 0" />
    <goods :goods="goods" v-if="searchData.length>0"></goods>
    <main v-if="goods.length>0 && searchData.length == 0">
      <h2>爆款产品</h2>
      <van-grid :border="true" :column-num="1">
        <van-grid-item>
          <van-image :src="banner" />
        </van-grid-item>
      </van-grid>
      <goods :goods="goods"></goods>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: require('../assets/uploads/official.png'),
      swipeImages: [require('../assets/uploads/apple-3.jpg'), require('../assets/uploads/apple-2.jpg')],
      serverImages: [
        {
          id: 1,
          path: '/home-goods',
          img: require('../assets/uploads/xuangou.jpg')
        },
        {
          id: 2,
          path: '/home-peijian',
          img: require('../assets/uploads/peijian.jpg')
        },
        {
          id: 3,
          path: '/home-goods',
          img: require('../assets/uploads/dingzhi.jpg')
        },
        {
          id: 4,
          path: '/home-goods',
          img: require('../assets/uploads/pingbao.jpg')
        }
      ],
      banner: require('../assets/uploads/banner.jpg'),
      goods: [],
      search: '',
      searchData:[],
      textInfo:''
    }
  },
  watch:{
    // searchData:function() {
    //    return this.searchData;
    // }
  },
  created() {
    this.getGoodsList()
  },
  methods: {
    //获取商品列表
    getGoodsList() {
      this.$http.get('/api/goods').then(res => {
        // console.log(res.data)
        let arr = []
        for (let key in res.data) {
          // console.log(res.data[key])
          arr = arr.concat(res.data[key])
        }
        this.goods = arr.slice(0, 6)
        // console.log(this.goods)
      })
    },
    //模糊搜索商品
    onSearch() {
      if(!this.search){
        this.$dialog({
          title: "提示",
          message: "搜索框不能为空"
        });
      };
      this.searchData = this.goods.filter( item => {
        return item.name.indexOf(this.search) !== -1;  
      })
      if(this.searchData.length == 0){
        //  this.$dialog({
        //   title: "提示",
        //   message: "没有你想要的东西喔~"
        // });
        this.textInfo = "没有你想要的东西喔"
      }
      this.goods = this.searchData;
    },
    // 清除搜索框触发
    onClear(){
      //  console.log(event)
      this.textInfo = '';
      this.getGoodsList();
    },
    input(){
      // console.log(event)
      this.textInfo = '';
      this.getGoodsList();
    }
  }
}
</script>

<style scoped>
main h2 {
  font-size: 1.3rem;
  font-weight: normal;
  padding-left: 1rem;
  line-height: 4rem;
  background-color: #fff;
}
</style>
