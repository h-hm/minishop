<template>
  <div class="pay-success">
    <van-icon name="checked" class="success" />
    <h2>购买成功</h2>
    <p >
      已收到您的货款,请留意
      <a  href="#/my-order">订单详情</a>
      以及
      <a href="#/my-order">物流信息</a>
      另外祝您生活愉快 感谢您的支持与厚爱
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style>
.pay-success {
  text-align: center;
  padding: 30% 5%;
}
.pay-success h2{
  font-size: 3rem;
  margin-top: 2rem;
  font-weight: 400;
  margin-bottom: .8rem;
}
.pay-success .success {
  font-size: 10.5rem;
  color: #52b838;
}
.pay-success p a{
  color: #1574e3;
}
</style>