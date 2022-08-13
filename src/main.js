import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from "@/router";
import VueLazyload from 'vue-lazyload'
import {firestorePlugin} from "vuefire";



Vue.config.productionTip = false

Vue.use(VueLazyload)
Vue.use(firestorePlugin);

new Vue({
    vuetify,
    router,
    render: h => h(App)
}).$mount('#app')
