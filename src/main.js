import Vue from 'vue'
import App from './App.vue'

// import socketio from 'socket.io';
import VueSocketIO from 'vue-socket.io';

// export const SocketInstance = socketio('http://localhost:3333');

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:3333',
  // vuex: {
  //     store,
  //     actionPrefix: 'SOCKET_',
  //     mutationPrefix: 'SOCKET_'
  // },
  // options: { path: "/my-app/" } //Optional options
}))
// Vue.use(VueSocketIO, SocketInstance)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
