import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { currencyFilter } from './currency';
Vue.filter('currency', currencyFilter);
Vue.config.productionTip = false;
new Vue({
    router: router,
    store: store,
    render: function (h) { return h(App); },
}).$mount('#app');
//# sourceMappingURL=main.js.map