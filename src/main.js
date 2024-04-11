import Vue from 'vue'
import App from './App.vue'

import VueSocketIO from 'vue-socket.io';

Vue.use(new VueSocketIO({
  connection: 'http://localhost:3333',
}))

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
