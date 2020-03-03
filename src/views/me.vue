<template>
  <div class="me">
    <van-image :src="me" />
    <h3></h3>
    <p></p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      me:require("../assets/uploads/me.jpg")
    }
  }

}
</script>

<style>
.me{
  text-align: center;
}
</style>