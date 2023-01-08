<template>
  <header>



      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="login">
          基本信息
        </el-menu-item>
        <el-menu-item index="login">
          组织管理
        </el-menu-item>
        <el-menu-item index="login">
         系统管理
        </el-menu-item>
        <el-menu-item index="login">
          登录
        </el-menu-item>
        <el-menu-item index="login">
          注册
        </el-menu-item>
      </el-menu>






  </header>
</template>

<script>
export default {

  name: "Header",
  data() {
    return {
      activeIndex:''
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$router.push({
        name: key,
      })

    }
  }



};
</script>

<style scoped lang="less">
a{
  width: 100%;
  height: 100%;
}
</style>
