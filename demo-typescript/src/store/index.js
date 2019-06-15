import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import cart from './modules/cart';
import products from './modules/product';
Vue.use(Vuex);
"";
export default new Vuex.Store({
    actions: actions,
    getters: getters,
    modules: {
        cart: cart,
        products: products
    }
});
//# sourceMappingURL=index.js.map