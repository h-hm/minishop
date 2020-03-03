<template>
  <div class="my-order">
    <van-tabs v-model="active">
      <van-tab title="全部">
        <div class="order-list" v-for="(order,index) in orders" :key="index">
          <div class="head">
            <span>
              <van-icon name="shop-o" class="shop" />vivo官方旗舰店
            </span>

            <span>已完成</span>
          </div>
          <van-card
            class="order"
            :num="order.value"
            :price="order.price"
            :title="order.name"
            :thumb="order.images"
          />
          <div class="foot">
            <p>
              共计
              <span>{{order.value}}</span>件商品 总计
              <span>￥{{order.totalPrice}}</span>
            </p>
            <p class="fare">(含运费：¥0.00优惠：¥0.00)</p>
            <div class="btns">
              <van-button type="default" class="del btn" @click="del(index)">订单删除</van-button>
              <van-button type="default" class=" btn" :to="'/order-detail/'+index">查看详情</van-button>
            </div>
          </div>
          <van-dialog 
          v-model="show" 
          title="标题" 
          show-cancel-button 
          message="确定删除该订单么" 
          close-on-click-overlay
          @confirm="delItem"></van-dialog>
        </div>
      </van-tab>
      <van-tab title="待付款">
        <van-card
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
          v-for="p in 3"
          :key="p"
        />
      </van-tab>
      <van-tab title="待收货">
        <van-card
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
          v-for="p in 3"
          :key="p"
        />
      </van-tab>
      <van-tab title="待评价">
        <van-card
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
          v-for="p in 2"
          :key="p"
        />
      </van-tab>
      <van-tab title="退货/换货">
        <van-card
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
          v-for="p in 2"
          :key="p"
        />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      orders: [],
      show: false,
      index:null
    };
  },
  created() {
    // console.log (Number(this.$route.params.index));
    this.active = Number(this.$route.params.index) + 1;
    // 获得本地存储的值
    if (localStorage.getItem("orders")) {
      this.orders = JSON.parse(localStorage.getItem("orders"));
    }
  },
  methods: {
    del(index){
      this.index=index,
      this.show=true

    },
    delItem() {
      this.orders.splice(this.index,1);
      // 存储改变后的orders到本地
      localStorage.setItem('orders',JSON.stringify(this.orders))
    }
  }
};
</script>

<style>
.my-order .van-hairline--top-bottom {
  position: fixed;
  top: 46px;
  width: 100%;
  z-index: 99;
  max-width: 375px;
}
.my-order .van-tabs {
  padding-top: 44px;
}
.order-list {
  border-bottom: 10px solid #f4f4f4;
}
.order-list .head {
  display: flex;
  justify-content: space-between;
  padding: 0 1.6rem;
  border-bottom: 1px solid #eee;
  font-size: 1.5rem;
  height: 4rem;
  line-height: 4rem;
}
.order-list .head .shop {
  font-size: 2.6rem;
  margin-right: 5px;
}
.order-list .head span:last-child {
  color: #00acff;
}
.order-list .head span {
  display: flex;
  align-items: center;
}
.order-list .order {
  margin-top: 0;
}
.order-list .foot {
  text-align: right;
  padding: 0.8rem;
  border-top: 1px solid #eee;
}
.order-list .foot .fare {
  font-size: 1.2rem;
  color: #666;
  padding-top: 0.6rem;
}
.order-list .foot p span {
  color: red;
}
.order-list .foot .btns {
  padding: 0.8rem 0;
  height: 55px;
  box-sizing: border-box;
}
.order-list .foot .btn {
  margin-left: 0.8rem;
  height: 3rem;
  line-height: 3rem;
}
</style>