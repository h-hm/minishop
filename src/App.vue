<template>
  <div id="app">
    <van-nav-bar :title="pageInfo.name" left-text="返回" left-arrow @click-left="$router.back()">
      <van-icon :name="pageInfo.icon" slot="right" size="18px" @click="goto(pageInfo.path)" />
    </van-nav-bar>

    <router-view @goodsInfo="goodsInfo"></router-view>

    <van-goods-action v-if="$route.path.indexOf('/product-detail') != -1">
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" :info="value" to="/my-cart" />
      <van-goods-action-icon icon="star" text="收藏"  @click="addCollect" />
      <van-goods-action-button type="warning" text="加入购物车" @click="addCart" />
      <van-goods-action-button type="danger" text="立即购买"  :to="'/pay/'+info.id+'/'+info.value" />
    </van-goods-action>

    <van-tabbar v-else v-model="active">
      <van-tabbar-item
        v-for="item in navs"
        :key="item.id"
        :icon="item.icon"
        :to="item.path"
        :info="item.info"
      >
        <van-icon slot="icon" slot-scope="props" :name="item[props.active?'iconed':'icon']" />
        {{item.name}}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      active: 0,
      navs: [
        {
          id: 1,
          name: "首页",
          icon: "wap-home-o",
          iconed: "wap-home",
          path: "/home"
        },
        {
          id: 2,
          name: "分类",
          icon: "goods-collect-o",
          iconed: "goods-collect",
          path: "/product",
          info: 3
        },
        {
          id: 3,
          name: "新闻",
          icon: "todo-list-o",
          iconed: "todo-list",
          path: "/news"
        },
        {
          id: 4,
          name: "我的",
          icon: "manager-o",
          iconed: "manager",
          path: "/about"
        }
      ],
      pageInfo: {},
      carts: [],
      info: {},
      collects:[],
      value: 0
    };
  },
  created() {

  },
  watch: {
    $route(route) {
      this.pageInfo = route.meta;
      this.active = route.meta.active;
    }
  },
  methods: {
    //加入购物车
    addCart() {
      if (localStorage.getItem("carts")) {
        this.carts = JSON.parse(localStorage.getItem("carts"));
      }
      // console.log(this.carts)
      // some() 返回值是布尔值
      let id = this.info.id;
      let isExistCarts = this.carts.some(item => {
        return item.id == id;
      });

      if (isExistCarts) {
        this.$dialog.alert({
          title: "提示",
          message: "该商品已存在购物车"
        });
      } else {
        this.$toast("加入购物车成功！");
        this.carts.push(this.info);
      }
      localStorage.setItem("carts", JSON.stringify(this.carts)); //转化成字符串存储在本地
      this.value = JSON.parse(localStorage.getItem("carts")).reduce(
        (prev, next) => {
          return prev + next.value;
        },
        0
      );
    },
    //添加收藏
    addCollect(){
      if(localStorage.getItem("collects")){
        this.collects = JSON.parse(localStorage.getItem("collects"));
      }
      // console.log(this.collects)
      let id = this.info.id;
      let isExistCollect = this.collects.some(item => {
        return item.id == id;
      });
      if(isExistCollect){
         this.$dialog.alert({
          title: "提示",
          message: "该商品已在收藏夹中"
        });
        this.$router.push('/my-collect')
      }else {
        this.$toast("收藏成功！");
        this.collects.push(this.info);
        this.$router.push('/my-collect');
      }
      localStorage.setItem("collects", JSON.stringify(this.collects)); //转化成字符串存储在本地
    },
    goodsInfo(info) {
      // console.log(info);
      this.info = info;
    },
    goto(path) {
      if (path) {
        this.$router.push(path);
      }
    }
  },
  updated() {
    //  更新购物车数字
    if (localStorage.getItem("carts")) {
      this.value = JSON.parse(localStorage.getItem("carts")).reduce(
        (prev, next) => {
          return prev + next.value;
        },
        0
      );
    };
  }
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
html {
  font-size: 62.5%;
}
body {
  margin: 0;
  background-color: #f4f4f4;
  font-size: 14px;
  padding-bottom: 50px;
  padding-top: 46px;
  min-height: calc(100vh - 96px);
  color: #333;
}

#app {
  max-width: 375px;
  min-height: calc(100vh - 96px);
  background-color: #fff;
  margin-left: auto;
  margin-right: auto;
}
#app .van-nav-bar {
  position: fixed;
  top: 0;
  background-color: #fff;
  width: 100%;
  max-width: 375px;
  z-index: 99 !important;
}
#app .van-tabbar {
  max-width: 375px;
  left: 50%;
  transform: translateX(-50%);
}
#app .van-swipe__indicator {
  width: 8px;
  height: 8px;
  border: 1px solid #ccc;
}
#app .van-swipe__indicator--active {
  border-color: #1989fa;
}
</style>
