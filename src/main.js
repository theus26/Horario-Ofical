import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueMoment from 'vue-moment'
import moment from 'moment'

Vue.use(moment)
Vue.use(VueMoment)

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
