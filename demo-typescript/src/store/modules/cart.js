var _a;
import shop from '../../api/shop';
import * as types from '../mutation-type';
var initState = {
    added: [],
    checkoutStatus: null,
};
var getters = {
    checkoutStatus: function (state) { return state.checkoutStatus; }
};
var actions = {
    checkout: function (context, product) {
        var failurePayload = {
            savedCartItems: context.state.added.slice(),
        };
        context.commit(types.CHECKOUT_REQUEST);
        shop.buyProducts(product, function () { return context.commit(types.CHECKOUT_SUCCESS); }, function () { return context.commit(types.CHECKOUT_FAILURE, failurePayload); });
    }
};
var mutations = (_a = {},
    _a[types.ADD_TO_CART] = function (state, payload) {
        console.log("add to cart in cart modulesssssss", payload.id);
        state.checkoutStatus = null;
        var record = state.added.find(function (p) { return p.id === payload.id; });
        console.log("record", record);
        if (!record) {
            state.added.push({
                id: payload.id,
                quantity: 1
            });
        }
        else {
            record.quantity++;
        }
    },
    _a[types.CHECKOUT_REQUEST] = function (state) {
        // clear cart
        state.added = [];
        state.checkoutStatus = null;
    },
    _a[types.CHECKOUT_SUCCESS] = function (state) {
        state.checkoutStatus = 'successful';
    },
    _a[types.CHECKOUT_FAILURE] = function (state, payload) {
        // rollback to the cart saved before sending the request
        state.added = payload.savedCartItems;
        state.checkoutStatus = 'failed';
    },
    _a);
export default {
    state: initState,
    getters: getters,
    actions: actions,
    mutations: mutations
};
//# sourceMappingURL=cart.js.map