// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import Vuesource from 'vue-resource'
import 'element-ui/lib/theme-chalk/index.css'
import "./Font/font1/iconfont.css"
import './CSS/small.css'
import './CSS/medium.css'
import './CSS/large.css'
Vue.use(ElementUI)
Vue.use(Vuesource)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
