import * as types from './mutation-type';
var addToCart = function (context, product) {
    console.log("call Add to cart");
    if (product.inventory > 0) {
        var payload = {
            id: product.id,
        };
        context.commit(types.ADD_TO_CART, payload);
    }
};
var actions = {
    addToCart: addToCart,
};
export default actions;
//# sourceMappingURL=actions.js.map