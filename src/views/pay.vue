<template>
  <div class="pay">
    <van-cell-group>
    <div class="pay-address">
      <div class="pay-name">
        <span>收货人:张三</span>
        <span>15255460858</span>
      </div>
      <p>
        收货地址：
        <span>安徽省合肥市蜀山区金寨路立基大厦B座 中科大对面</span>
      </p>
    </div>
    <div class="info goods-list">
      <h3>商品清单</h3>
      <van-card
        class="goods"
        :num="detail.value"
        :price="detail.price"
        :title="detail.name"
        :thumb="detail.images"
      />
    </div>
    <div class="info bill-list">
      <h3>发票信息</h3>
      <van-field
        class="bill"
        label="发票抬头"
        required
        clearable
        placeholder="请输入发票信息"
        :value="bill"
        @input="val=>bill=val"
        ref="bill"
      />
    </div>
    <div class="info pay-list">
      <h3>支付方式</h3>
      <van-tabs type="card" class="pay-way" v-model="active">
        <van-tab title="在线支付">支持支付宝支付、微信支付、银行卡支付、财付通等</van-tab>
        <van-tab title="花呗分期">花呗分期是花呗联合天猫淘宝推出的，面向互联网的赊购服务，通过支付宝轻松还款，0首付</van-tab>
        <van-tab title="货到付款">货到再付款，支持现金交易</van-tab>
      </van-tabs>
    </div>
    <div class="info message">
      <h3>订单留言</h3>
      <van-field
        class="msg"
        type="textarea"
        placeholder="限300字（若有特殊需求，请联系商城在线客服)"
        rows="1"
        :value="msg"
        @input="val=>msg=val"
      />
      <p>商品总金额：¥{{totalPrice}}</p>
      <p>运费：0.00</p>
      <p>优惠：¥0.00</p>
      <p>赠送积分：{{totalPrice}}</p>
    </div>
    <van-submit-bar
      :price="totalPrice*100"
      button-text="提交订单"
      label="订单总金额:"
      class="submit"
      @submit="onSubmit"
    />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      bill: null,
      detail: {},
      way: ["在线支付", "花呗分期", "货到付款"],
      msg: null
    };
  },
  computed: {
    totalPrice() {
      return this.detail.price * this.detail.value;
    }
  },
  created() {
    this.$http.get("/api/all").then(res => {
      let arr = [];
      for (let key in res.data) {
        arr = arr.concat(res.data[key]);
      }
      this.detail = arr
        .filter(item => {
          return item.id == this.$route.params.id;
        })
        .map(item => {
          return {
            id: item.id,
            name: item.name,
            price: item.price,
            images: item.images,
            value: this.$route.params.value
          };
        })[0];
    });
  },
  methods: {
    onSubmit() {
      let arr = [];
      if (localStorage.getItem("orders")) {
        arr = JSON.parse(localStorage.getItem("orders"));
      }
      if(!this.bill){
        this.$toast({
          message:'请输入发票抬头',
          duration:1000
        });
        this.$refs.bill.focus()
        return;
      }

      let orders = Object.assign({}, this.detail);
      orders.way = this.way[this.active];
      orders.totalPrice = this.totalPrice;
      orders.bill = this.bill;
      orders.msg = this.msg;
      arr.push(orders);
      localStorage.setItem("orders", JSON.stringify(arr));


      this.$router.push('/pay-success')
    }
  }
};
</script>

<style>
.pay-address {
  padding: 0 7% 1.8rem;
  background: url(../assets/uploads/bg-addr-box-line.png) repeat-x left bottom;
  background-size: 4rem;
}
.pay-address .pay-name {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
}
.pay .info {
  border-top: 1rem solid #f4f4f4;
}
.pay .info h3 {
  padding: 1.2rem;
  font-weight: 400;
  font-size: 1.4rem;
  border-bottom: 1px solid #ccc;
}
.pay .goods-list .goods {
  margin-top: 0;
}
.pay .bill .van-cell__value {
  width: 100%;
}
.pay .bill .van-field__control {
  border: 1px solid #ccc;
  border-radius: 3px;
  padding-left: 0.4rem;
}
.pay .pay-way .van-tabs__content {
  height: 5rem;
  padding: 1.4rem;
}
.pay .msg .van-field__control {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0 0.5rem;
}
.pay .message {
  padding-bottom: 2rem;
}
.pay .message p {
  padding: 0 16px;
  font-size: 1.3rem;
  color: #888;
  line-height: 1.5rem;
}
.pay .message p:first-of-type {
  margin-top: 0.8rem;
}
.pay .submit {
  border-top: 1px solid #ccc;
}
.pay .submit .van-submit-bar__text {
  text-align: left;
  padding-left: 1rem;
  font-size: 1.6rem;
}
.pay .submit .van-submit-bar__price {
  margin-left: 0.5rem;
}
</style>