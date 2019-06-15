var cartProducts = function (state) {
    return state.cart.added.map(function (shape) {
        var product = state.products.all.find(function (p) { return p.id === shape.id; });
        if (product) {
            var cartProduct = {
                title: product.title,
                price: product.price,
                quantity: shape.quantity,
            };
            return cartProduct;
        }
    });
};
var getterTree = {
    cartProducts: cartProducts
};
export default getterTree;
//# sourceMappingURL=getters.js.map