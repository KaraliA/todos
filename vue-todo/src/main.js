import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store'
import router from './router'
import Vuelidate from 'vuelidate'
import i18n, { locales } from './plugins/i18n'

Vue.config.productionTip = false
Vue.use(Vuelidate)

new Vue({
  vuetify,
  store,
  router,
  i18n,
  render: h => h(App, {props: {locales: locales}})
}).$mount('#app')
