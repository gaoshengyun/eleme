import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

//引入mint-ui框架
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import './common/less/mycss.less'
Vue.use(Mint)

//引入axios
import Axios from 'axios'
Vue.prototype.axios = Axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
