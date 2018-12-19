// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'
import Axios from 'axios'
Vue.use(VueRouter)
Vue.config.productionTip = true

// 引入重置样式 
import "./style/reset.less"

Axios.interceptors.response.use(function (response) {
  // Do something with response data
  console.log('响应拦截器')
  console.log(response)
  return response.data;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

//全局axios 
Vue.prototype.$axios=Axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
