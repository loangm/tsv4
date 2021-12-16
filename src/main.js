import Vue from 'vue'
import App from './apps/App5.vue'
/*
                        App     Karolina
                        App2    Colored
                        App3    ...tests Toolbar vs Appbar
                        App4    Landing
                        App5    
*/
import router from './router'
import vuetify from './plugins/vuetify'
import 'animate.css';

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
