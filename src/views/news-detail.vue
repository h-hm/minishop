<template>
<div class="news-detail">
  <div v-html="detail.newsDetail">
    <!-- {{detail}} -->
  </div>
</div>
  
</template>

<script>
export default {
  data(){
    return{
      detail:{}

    }
  },
    created() {
    this.$http.get("/api/news").then(res => {
      // console.log(res)
      this.detail = res.data.news.filter(item=>{
        return item.id==this.$route.params.id
      })[0];
      // console.log(this.detail.newsDetail);
    });
  }

}
</script>

<style>
.news-detail{
  padding: 0 5%;

}
.news-detail p{
  text-align: justify;
  font-size: 1.5rem;
  line-height: 1.8rem;;
  
}

</style>