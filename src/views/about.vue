<template>
  <div class="about">
    <van-row type="flex" justify="center" align="center" class="header">
      <van-col>
        <van-uploader :after-read="afterRead">
          <van-image :src="avatar" class="img-avatar" round width="7rem" height="7rem"></van-image>
        </van-uploader>
        <!-- <van-image round :src="me" /> -->
        <h3>个人头像</h3>
        <p>风声太大，听不清楚</p>
      </van-col>
    </van-row>
    <van-row class="coupon">
      <van-col span="8">
        <b>0</b>
        <p>优惠券</p>
      </van-col>
      <van-col span="8">
        <b>0</b>
        <p>换鼓励金</p>
      </van-col>
      <van-col span="8">
        <b>0</b>
        <p>积分</p>
      </van-col>
    </van-row>
    <van-cell-group border>
      <van-cell value="全部" to="/my-order">
        <template slot="title">
          <span class="custom-title">我的订单</span>
        </template>
      </van-cell>
      <van-grid :border="border" class="order">
        <van-grid-item v-for="(item,index) in srcs" :key="index" :to="'/my-order/'+index">
          <van-icon :name="item.src" class="van-grid-item__icon" />
          <p>{{item.title}}</p>
        </van-grid-item>
      </van-grid>
    </van-cell-group>
    <van-cell-group border>
      <van-cell title="我的收藏" icon="star-o" is-link to="/my-collect"></van-cell>
      <van-cell title="我的收货地址" icon="records" is-link to="/my-address"></van-cell>
      <van-cell title="我的购物车" icon="shopping-cart-o" is-link to="/my-cart"></van-cell>
      <van-cell title="扫码分享" icon="qr" is-link @click="toggleShow"></van-cell>
      <van-dialog v-model="show" title="扫描二维码" confirm-button-text="确认">
        <van-image :src="qrcode" />
      </van-dialog>
      <van-cell title="关于我们" icon="info-o" is-link to="/me"></van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      border: false,
      srcs: [
        {
          title: "待付款",
          src: "send-gift-o"
        },
        {
          title: "待收货",
          src: "logistics"
        },
        {
          title: "待评价",
          src: "flower-o"
        },
        {
          title: "退货/换货",
          src: "replay"
        }
      ],
      show: false,
      qrcode: require("../assets/uploads/qrcode.png"),
      // me:require("../assets/uploads/me.jpg")
     avatar:require("../assets/uploads/me.jpg")
    };
  },
  methods: {
    toggleShow() {
      this.show = true;
    },
    //文件上传
    afterRead(file) {
    // 此时可以自行将文件上传至服务器
    let content = file;
    // console.log(content);
    let formData = new FormData();
    // 文件对象
    formData.append("file",content);
    //  console.log(formData.getAll(""));
    // console.log(formData)
  }
  }
};
</script>

<style>

.about .header {
  height: 210px;
  background-image: linear-gradient(to bottom, #1989faa1, #1989fa);
}
.about .header .van-col {
  text-align: center;
}
.about .van-cell__value {
  color: #ee0a24;
}
.about .van-grid {
  padding: 10px;
}
.about .van-cell__left-icon {
  font-size: 20px;
}
.about .van-grid-item .van-grid-item__icon {
  font-size: 2.8rem;
  margin-bottom: 0.8rem;
}
.about .van-dialog__content {
  padding: 1rem 0;
  text-align: center;
}
.about .coupon {
  text-align: center;
  border-bottom: 5px solid rgb(237, 237, 237);
  padding: 20px 0;
}
.about .coupon p {
  line-height: 2rem;
}
.about .order {
  border-bottom: 5px solid rgb(237, 237, 237);
}
</style>