<template>
  <div class="news">
    <van-row>
      <van-col span="24" v-for="item in news" :key="item.id" @click="newsDetail(item.id)">
        <h2>{{item.newsTitle}}</h2>
        <van-image :src="item.newsImg" />
        <p>{{item.newsCon}}</p>
        <p>发布日期：{{item.newsTime}}</p>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: []
    };
  },
  created() {
    this.$http.get("/api/news").then(res => {
      this.news = res.data.news;
      // console.log(res.data);
    });
  },
  methods:{
    newsDetail(id){
      this.$router.push('/news-detail/'+id)
    }
  }
};
</script>

<style>
.news .van-col {
  padding: 0 2.5%;
}
.news .van-col h2 {
  color: #505b63;
  font-weight: 400;
  text-align: left;
  font-size: 1.875rem;
  height: 4.7rem;
  line-height: 4.7rem;
}
.news .van-col .van-image {
  display: block;
  height: 13.5rem;
}
.news .van-col p {
  line-height: 1.5rem;
  padding-top: 1rem;
  color: #696969;
  text-align: justify;
  font-size:1.2rem;
}
</style>