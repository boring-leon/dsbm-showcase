import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/scss/app.scss';
import VueScrollReveal from 'vue-scroll-reveal';
 
Vue.use(VueScrollReveal);
 
Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal',
  duration: 800,
  scale: 1,
  distance: '10px',
  mobile: true,
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

