<template>
  <div class="login">
    <van-cell-group class="login-group" :border="false">
      <van-field
        v-model="username"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="$toast('手机号')"
        ref="user"
      />

      <van-field
        v-model="password"
        :type="show ? 'text':'password'"
        label="密码"
        :right-icon="show ? 'eye' :'closed-eye'"
        placeholder="请输入密码"
        required
        @click-right-icon="show =! show"
        ref="password"
      />
      <van-button type="primary" size="large" class="login-btn" @click="login">登录</van-button>
      <van-divider>或用其他账号登录</van-divider>
      <van-row type="flex" justify="center" class="quick" gutter="20">
        <van-col>
          <van-image width="36" height="36" :src="qq" />
          <p>QQ</p>
        </van-col>
        <van-col>
          <van-image width="36" height="36" :src="weixin" />
          <p>微信</p>
        </van-col>
      </van-row>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: null,
      password: null,
      qq: require("../assets/uploads/qq.svg"),
      weixin: require("../assets/uploads/weixin.svg"),
      show: false
    };
  },
  methods: {
    login() {
      if (!this.username) {
        this.$toast({
          message: "请输入用户名",
          duration: 1000
        });
        this.$refs.user.focus()
        return;
      } else if (!this.password) {
        this.$toast({
          message: "请输入密码",
          duration: 1000
        });
        this.$refs.password.focus()
        return;
      } else {
        this.$router.push("/about");
      }
    }
  }
};
</script>

<style>
.login-group {
  padding: 5.4rem 2.1rem;
}
.login-group .login-btn {
  margin-top: 2.5rem;
  margin-bottom: 5rem;
}
.login-group .quick p {
  text-align: center;
}
</style>