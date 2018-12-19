<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './components/pages/Home/Home'
import Category from './components/pages/Category/Category'
import My from './components/pages/My/My'
import Shopcar from './components/pages/Shopcar/Shopcar'

export default {
  name: 'App',
  components: {
    Home,Category,My,Shopcar
  }
}
</script>

<style lang="less" scoped>

</style>

