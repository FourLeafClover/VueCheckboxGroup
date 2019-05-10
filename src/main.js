import Vue from 'vue'
import App from './example'

const vm = new Vue({
  el: '#app',
  render: h => h(App)
})

window.$vm = vm
