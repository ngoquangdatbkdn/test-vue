var _a;
import * as types from '../mutation-type';
import shop from '../../api/shop';
var initState = {
    all: [],
};
var getters = {
    allProducts: function (state) { return state.all; }
};
var actions = {
    getAllProducts: function (context) {
        shop.getProducts(function (products) {
            var payload = {
                products: products
            };
            context.commit(types.RECEIVE_PRODUCTS, payload);
            console.log('product:ssss', payload);
        });
    }
};
var mutations = (_a = {},
    _a[types.RECEIVE_PRODUCTS] = function (state, payload) {
        state.all = payload.products;
        console.log('state:ssssss', state);
    },
    _a[types.ADD_TO_CART] = function (state, payload) {
        console.log("add to cart in product module", payload.id);
        var product = state.all.find(function (p) { return p.id === payload.id; });
        if (product) {
            product.inventory--;
        }
    },
    _a);
export default {
    state: initState,
    getters: getters,
    actions: actions,
    mutations: mutations,
};
//# sourceMappingURL=product.js.map