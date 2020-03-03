<template>
  <div class="my-collect">
    <div v-for="(collect, index) in collects" :key="index">
      <van-card
        :num="collect.value"
        :price="collect.price"
        desc="描述信息"
        :title="collect.name"
        :thumb="collect.images"
        :key="collect.id"
      >
        <div slot="bottom" class="del">
          <van-icon name="delete" @click="delItem(index)" />
        </div>
      </van-card>
      <!-- </van-tab> -->
      <!-- <van-tab title="文章">
        <van-card
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
          v-for="p in 3"
          :key="p"
        />
      </van-tab> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      collects: [],
      index: null
    }
  },
  created() {
    // 获得本地存储的值
    if (localStorage.getItem('collects')) {
      this.collects = JSON.parse(localStorage.getItem('collects'))
      console.log(this.collects)
    }
  },
  methods: {
    delItem(index) {
      this.index = index
      this.collects.splice(this.index, 1)
      localStorage.setItem('collects', JSON.stringify(this.collects))
    }
  }
}
</script>

<style>
.my-collect .van-hairline--top-bottom {
  position: fixed;
  top: 46px;
  width: 100%;
  max-width: 375px;
  z-index: 9999;
}
.my-collect .van-tabs {
  padding-top: 44px;
}
.my-collect .del{
  position: absolute;
  top: 0;
  right: 0;
}
</style>
