<template>
  <div class="order-detail">
    <div class="head">
      <h2>订单状态: 已完成</h2>
      <img src="../assets/uploads/order.png" alt />
    </div>
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
      <van-card
        class="goods"
        :num="detail.value"
        :price="detail.price"
        :title="detail.name"
        :thumb="detail.images"
      />
    </div>
    <div class="detail">
      <div class="deta detail-one">
        <p>
          <span class="span-1">订单优惠：</span>
          <span class="span-2">订单满68元包邮</span>
        </p>
        <p>
          <span class="span-1">订单备注：</span>
          <span class="span-2">{{detail.msg}}</span>
        </p>
      </div>
      <div class="deta detail-two">
        <p>
          <span class="span-1">商品总金额：</span>
          <span class="span-2">￥{{detail.totalPrice}}</span>
        </p>
        <p>
          <span class="span-1">运费：</span>
          <span class="span-2">¥ 0.00</span>
        </p>
        <p>
          <span class="span-1">优惠：</span>
          <span class="span-2 red">-¥ 0.00</span>
        </p>
        <p>
          <span class="span-1">换鼓励金：</span>
          <span class="span-2 red">-¥ 0.00</span>
        </p>
      </div>
      <div class="deta detail-three">
        <p>
          <span class="span-1">配送方式：</span>
          <span class="span-2">顺丰速运 免邮</span>
        </p>
        <p>
          <span class="span-1">支付方式：</span>
          <span class="span-2">{{detail.way}}</span>
        </p>
        <p>
          <span class="span-1">发票类型：</span>
          <span class="span-2">个人</span>
        </p>
        <p>
          <span class="span-1">发票抬头：</span>
          <span class="span-2">{{detail.bill}}</span>
        </p>
      </div>
    </div>
    <van-submit-bar :price="detail.totalPrice*100" button-type="hidden" class="none"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detail: {}
    };
  },
  created() {
    this.detail = JSON.parse(localStorage.getItem("orders")).filter(
      (item, index) => {
        return index == this.$route.params.index;
      }
    )[0];
    console.log(this.detail);
  }
};
</script>

<style>
.order-detail {
}
.order-detail .head {
  width: 100%;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  height: 7.5rem;
  background: #69c1ff;
  padding: 0 1rem;
}
.order-detail .head h2 {
  font-weight: 400;
  color: #fff;
  font-size: 1.7rem;
}
.order-detail .head img {
  width: 8.5rem;
}
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
.order-detail .info {
  border-top: 1rem solid #f4f4f4;
}
.order-detail .goods-list .goods {
  margin-top: 0;
  background-color: #fff;
  padding: 12px;
}
.order-detail .goods-list .goods .van-card__title {
  font-size: 1.6rem;
}
.order-detail .goods-list .goods .van-card__price {
  margin-top: 1rem;
  font-size: 1.4rem;
}
.order-detail .detail {
  padding: 0 1rem;
}
.order-detail .detail .deta {
  border-top: 1px solid #ccc;
  padding: 0.8rem 0;
  color: #888;
  font-size: 1.3rem;
}
.order-detail .detail .deta p {
  line-height: 2.25rem;
}
.order-detail .detail .deta .span-1 {
  display: inline-block;
  width: 7.2rem;
}
.order-detail .detail .deta .red {
  color: red;
}
.order-detail .none{
  border-top: 1px solid #ccc;
}
.order-detail .none button{
  display: none;
  
}
</style>