import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import './assets/base/reset.css'
import 'vant/lib/index.css'

import Distpicker from 'v-distpicker'
 
Vue.component('v-distpicker', Distpicker)

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')