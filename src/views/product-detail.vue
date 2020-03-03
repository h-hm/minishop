<template>
  <div class="product-detail">
    <div class="swpeir">
      <van-swipe :autoplay="4000">
        <van-swipe-item v-for="(image, index) in detail.swipeImages" :key="index">
          <van-image :src="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="detail">
      <h2>{{detail.name}}</h2>
      <div class="content">
        <span>{{detail.detailHeader}}</span>
        {{detail.detailContent}}
      </div>
      <p>￥{{detail.price}}</p>
    </div>
    <div class="number">
      <van-row type="flex">
        购买数量:
        <van-stepper v-model="value" />
      </van-row>
    </div>
    <div class="support">
      <van-cell title="单元格" color="red" is-link @click="showPop">
        <template slot="title">
          <van-icon name="passed" />
          <span class="custom-title">支持花呗分期</span>
          <van-icon name="passed" />
          <span class="custom-title">支持以旧换新</span>
        </template>
      </van-cell>
      <van-popup v-model="show" position="bottom" :style="{ height: '40%' }" closeable>
        <h3>服务说明</h3>
        <div class="server-support">
          <div class="server-1">
            <van-icon name="passed" />
            <span>支持花呗分期</span>
            <p>商品支持花呗分期</p>
          </div>
          <div class="server-2">
            <van-icon name="passed" />
            <span>可以使用换新鼓励金</span>
            <p>
              换新鼓励金通过参加以旧换新回收旧手机以后获得，旧手机享受额外补贴。
              <a href="#">现在换机</a>
            </p>
          </div>
        </div>
        <div class="server-btn">
          <van-button color="#00acff" round size="large" @click="close">关闭</van-button>
        </div>
      </van-popup>
    </div>
    <div class="parameter">
      <van-tabs v-model="active" line-width="50%">
        <van-tab title="图文详情">
          <van-row v-for="(image,index) in detail.paramsImages " :key="index">
            <van-image :src="image" />
          </van-row>
        </van-tab>
        <van-tab title="参数">
          <div v-html="detail.homePeizhi" class="peizhi"></div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 1,
      detail: {},
      show: false,
      active: 0,
      goodsInfo:{}
    };
  },
  created() {
    this.$http.get("/api/all").then(res => {
      let arr = [];
      for (let key in res.data) { 
        // console.log(res.data[key])
        arr = arr.concat(res.data[key]);
        // console.log(arr);
      }
      this.detail = arr.filter(item => {
        // console.log(item)
        return item.id == this.$route.params.id; 
      })[0];//筛选返回跟请求商品详情id一样的商品 因filter()返回的是一个数组所以取第一项

      // console.log(this.detail)

      let tem=[];
      tem.push(this.detail)
      //遍历商品信息
      this.goodsInfo=tem.map(item=>{
        // console.log(item)
        return{
          id:item.id,
          name:item.name,
          price:item.price,
          value:this.value,
          images:item.images
        }
      })[0]
      this.$emit('goodsInfo',this.goodsInfo);
    });
  },
  updated(){
    this.goodsInfo.value=this.value
    this.$emit('goodsInfo',this.goodsInfo);
  },
  methods: {
    showPop() {
      this.show = true;
    },
    close() {
      this.show = false;
    }
  }
};
</script>

<style >
.product-detail {
  background-color: #fff;
}
.product-detail h3 {
  text-align: center;
  font-size: 1.7rem;
  font-weight: 400;
  line-height: 4.475rem;
}
.swpeir .van-image__img {
  width: 70%;
  margin: auto;
}
.product-detail .detail {
  padding: 1.25rem;
}
.product-detail .detail h2 {
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 3.2rem;
}
.product-detail .detail p {
  color: red;
  font-size: 2.6rem;
  margin-top: 5px;
}
.product-detail .content {
  text-align: justify;
}
.product-detail .content span {
  margin-left: -0.6rem;
  color: #ff4b3d;
}
.product-detail .number {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 1.7rem 1.25rem;
  line-height: 2.7rem;
  font-size: 1.3rem;
}
.product-detail .number button {
  border: 1px solid #b2b2b2;
  width: 3.2rem;
  height: 2.7rem;
  margin-left: -1px;
}
.product-detail .number .van-stepper__input {
  margin: 0;
  border: 1px solid #b2b2b2;
  width: 3.2rem;
  height: 2.7rem;
  margin-left: -1px;
}
.product-detail .number .van-stepper {
  margin-left: 2rem;
}
.product-detail .support {
  border-bottom: 10px solid #f4f4f4;
}
.product-detail .support .van-icon {
  vertical-align: middle;
  margin-right: 0.3rem;
}
.product-detail .support .van-icon-passed {
  color: #0098df;
}
.product-detail .support .custom-title {
  margin-right: 0.5rem;
}
.product-detail .server-support {
  width: 85%;
  margin: 20px auto;
  font-size: 1.4rem;
}
.product-detail .server-support p {
  color: #666;
  padding-left: 0.8rem;
  margin-top: 0.5rem;
  line-height: 2.1rem;
}
.product-detail .server-support p a {
  color: #00acff;
}
.product-detail .server-support .server-2 {
  margin-top: 1.5rem;
}
.product-detail .server-btn {
  width: 100%;
  text-align: center;
  border-top: 1px solid #eee;
  position: absolute;
  bottom: 0;
  padding: 0.8rem 0;
}
.product-detail .server-btn .van-button--large {
  width: 95%;
  height: 2.7rem;
  line-height: 2.7rem;
}
.product-detail .parameter .van-tabs__line {
  background-color: #00acff;
  bottom: 16px;
}
.product-detail .parameter .van-image {
  display: block;
}
.product-detail .parameter .peizhi {
  width: 90%;
  margin: auto;
}
.product-detail .parameter .peizhi h4 {
  line-height: 6rem;
  font-size: 1.8rem;
  font-weight: 400;
  border-bottom: 1px solid #ccc;
}
.product-detail .parameter .peizhi span {
  color: #888;
  margin-top: 0.8rem;
  display: block;
}
.product-detail .parameter .peizhi p {
  color: #888;
  font-size: 1.2rem;
  line-height: 1.7rem;
}
.product-detail .parameter .peizhi > div {
  margin: 1.5rem 0;
}
.product-detail .parameter .peizhi::after {
  content: "";
  display: table;
}
</style>