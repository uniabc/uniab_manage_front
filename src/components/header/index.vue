<template>
  <div>


    <header class="header">
      <!-- 头部的第一行 -->
      <div class="top">
        <div class="container">

          <div class="loginList">
            欢迎来到uniab校园办公系统管理端
            <!-- 没有登录：显示登录与注册 -->
<!--            <p v-if="!$store.state.user.nickName">-->
              <span>请</span>
              <!-- <a href="###">登录</a> -->
              <!--
                声明式导航,当然你也可以使用编程式导航,因为不管是那个导航，都可以实现路由跳转，
                但是最后为什么选择声明式导航，没有任何业务、逻辑
               -->
            <router-link active-class="active" to="/login">登录</router-link>
            <router-link active-class="active" to="/login"> 注册</router-link>

            <!-- 如果登录显示的是用户名字与退出登录 -->
<!--            <p v-else>-->
<!--              <a>{{$store.state.user.nickName}}</a>-->
<!--              <a class="register" @click="logout">退出登录</a>-->
<!--            </p>-->
          </div>-->
          <div class="typeList">
            <router-link to="/center">我的订单</router-link>
            <router-link to="/shopcart">我的购物车</router-link>
            <router-link to="/shopcart">我的购物车</router-link>
          </div>
        </div>
      </div>
      <!--头部第二行 搜索区域-->
<!--      <div class="bottom">-->
<!--        <h1 class="logoArea">-->
<!--          <router-link class="logo" to="/home">-->
<!--            <img src="./images/logo.png" alt="" />-->
<!--          </router-link>-->
<!--        </h1>-->
<!--        <div class="searchArea">-->
<!--          <form action="###" class="searchForm">-->
<!--            <input-->
<!--              type="text"-->
<!--              id="autocomplete"-->
<!--              class="input-error input-xxlarge"-->
<!--              v-model="keyword"-->
<!--            />-->
<!--            &lt;!&ndash; 编程式导航:因为有业务 &ndash;&gt;-->
<!--            <button-->
<!--              class="sui-btn btn-xlarge btn-danger"-->
<!--              type="button"-->
<!--              @click="goSearch"-->
<!--            >-->
<!--              搜索-->
<!--            </button>-->
<!--          </form>-->
<!--        </div>-->
<!--      </div>-->
    </header>

  </div>
</template>

<script>
export default {

  name: "Header",
  data() {
    return {
      //收集用户输入的关键字
      keyword: "",
    };
  },
  methods: {

    },



};
</script>

<style scoped lang="less">

</style>
