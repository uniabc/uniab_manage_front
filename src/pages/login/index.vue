<template>
  <div class="dowebok">
    <div class="logo"></div>
    <div class="form-item">
      <input id="username" type="text" autocomplete="off" placeholder="邮箱">
      <p class="tip">请输入合法的邮箱地址</p>
    </div>
    <div class="form-item">
      <input id="password" type="password" autocomplete="off" placeholder="登录密码">
      <p class="tip">邮箱或密码不正确</p>
    </div>
    <div class="form-item"><button id="submit">登 录</button></div>
    <div class="reg-bar">
      <a class="reg" href="#" target="_blank">立即注册</a>
      <a class="forget" href="#" target="_blank">忘记密码</a>
    </div>

  </div>

</template>

<script>
export default {
  name: "LoginPage",
}
</script>

<style scoped>

</style>