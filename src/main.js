import Vue from 'vue';
import App from './App.vue';
import vuetify from "@/plugins/vuetify";
import {auth} from "@/plugins/firebase";
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'ress/ress.css';
import 'vuetify/dist/vuetify.css';
import './main.scss';
import VueMask from 'v-mask'

Vue.use(VueMask);
Vue.config.productionTip = false;
let app;
auth.onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
                router,
                store,
                vuetify,
                render: h => h(App)
            }
        ).$mount('#app')
    }
});
