<template>
  <div class="server-goods">
    <van-tabs v-model="active">
      <van-tab :title="key" v-for="(item,key,index) in goods" :key="index">
        <van-row type="flex" justify="space-around" class="order">
          <van-col span="4">
            <p>价格升序</p>
          </van-col>
          <van-col span="4">
            <p>价格降序</p>
          </van-col>
          <van-col span="4">
            <p>销量优先</p>
          </van-col>
        </van-row>
        <goods :goods="item"></goods>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      goods: {}
    };
  },
  created() {
    this.$http.get("/api/peijian").then(res => {
      let arr = [];
      for (let key in res.data) {
        arr = arr.concat(res.data[key]);
      }
      this.goods['全部']= arr;

      Object.assign(this.goods,res.data);

      this.goods={...this.goods}

    });
  }
};
</script>

<style scoped>
.order {
  background-color: #f4f4f4;
}
.van-col p {
  line-height: 3rem;
  text-align: center;
}
</style>