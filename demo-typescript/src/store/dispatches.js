import store from './index';
export var dispatchCheckout = function (products) {
    return store.dispatch('checkout', products);
};
export var dispatchAddToCart = function (product) {
    return store.dispatch('addToCart', product);
};
//# sourceMappingURL=dispatches.js.map