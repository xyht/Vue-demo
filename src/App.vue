<template>
  <div id="app" class="app">
      <m-header></m-header>
      <div class="wappers">
        <router-link to="/login">登录</router-link>
        <router-link to='/Register'>注册</router-link>
      </div>
      <div class="login-wapper">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import MHeader from './components/MHeader/MHeader'
export default {
  components: {
    MHeader
  }
}
</script>

<style>
  .app .wappers{
    position: absolute;
    line-height: 60px;
    top: 0;
    right: 20px;
  }
  .app .login-wapper{
    position: absolute;
    left: 0;
    z-index: -1;
  }
</style>
