<template>
  <div>
<!--    <header class="header">-->
<!--      &lt;!&ndash; 头部的第一行 &ndash;&gt;-->
<!--      <div class="top">-->
<!--        <div class="container">-->
<!--&lt;!&ndash;          <div class="loginList">-->
<!--            <p>uniab校园OA系统管理端</p>-->
<!--            &lt;!&ndash; 没有登录：显示登录与注册 &ndash;&gt;-->
<!--            <p v-if="!$store.state.user.nickName">-->
<!--              <span>请</span>-->
<!--              &lt;!&ndash; <a href="###">登录</a> &ndash;&gt;-->
<!--              &lt;!&ndash;-->
<!--                声明式导航,当然你也可以使用编程式导航,因为不管是那个导航，都可以实现路由跳转，-->
<!--                但是最后为什么选择声明式导航，没有任何业务、逻辑-->
<!--               &ndash;&gt;-->
<!--              <router-link to="/login">登录</router-link>-->
<!--              <router-link class="register" to="/register">注册</router-link>-->
<!--            </p>-->
<!--            &lt;!&ndash; 如果登录显示的是用户名字与退出登录 &ndash;&gt;-->
<!--            <p v-else>-->
<!--              <a>{{$store.state.user.nickName}}</a>-->
<!--              <a class="register" @click="logout">退出登录</a>-->
<!--            </p>-->
<!--          </div>&ndash;&gt;-->
<!--          <div class="typeList">-->
<!--            <router-link to="/center">我的订单</router-link>-->
<!--            <router-link to="/shopcart">我的购物车</router-link>-->
<!--            <a href="###">我的尚品汇</a>-->
<!--            <a href="###">尚品汇会员</a>-->
<!--            <a href="###">企业采购</a>-->
<!--            <a href="###">关注尚品汇</a>-->
<!--            <a href="###">合作招商</a>-->
<!--            <a href="###">商家后台</a>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      &lt;!&ndash;头部第二行 搜索区域&ndash;&gt;-->
<!--&lt;!&ndash;      <div class="bottom">&ndash;&gt;-->
<!--&lt;!&ndash;        <h1 class="logoArea">&ndash;&gt;-->
<!--&lt;!&ndash;          <router-link class="logo" to="/home">&ndash;&gt;-->
<!--&lt;!&ndash;            <img src="./images/logo.png" alt="" />&ndash;&gt;-->
<!--&lt;!&ndash;          </router-link>&ndash;&gt;-->
<!--&lt;!&ndash;        </h1>&ndash;&gt;-->
<!--&lt;!&ndash;        <div class="searchArea">&ndash;&gt;-->
<!--&lt;!&ndash;          <form action="###" class="searchForm">&ndash;&gt;-->
<!--&lt;!&ndash;            <input&ndash;&gt;-->
<!--&lt;!&ndash;              type="text"&ndash;&gt;-->
<!--&lt;!&ndash;              id="autocomplete"&ndash;&gt;-->
<!--&lt;!&ndash;              class="input-error input-xxlarge"&ndash;&gt;-->
<!--&lt;!&ndash;              v-model="keyword"&ndash;&gt;-->
<!--&lt;!&ndash;            />&ndash;&gt;-->
<!--&lt;!&ndash;            &lt;!&ndash; 编程式导航:因为有业务 &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;            <button&ndash;&gt;-->
<!--&lt;!&ndash;              class="sui-btn btn-xlarge btn-danger"&ndash;&gt;-->
<!--&lt;!&ndash;              type="button"&ndash;&gt;-->
<!--&lt;!&ndash;              @click="goSearch"&ndash;&gt;-->
<!--&lt;!&ndash;            >&ndash;&gt;-->
<!--&lt;!&ndash;              搜索&ndash;&gt;-->
<!--&lt;!&ndash;            </button>&ndash;&gt;-->
<!--&lt;!&ndash;          </form>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->
<!--    </header>-->
    10
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
