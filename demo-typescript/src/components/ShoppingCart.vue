<template>
    <div>
        <h1>Shopping cart example</h1>
        <hr>
        <h2>Products</h2>
        <Product-list></Product-list>
        <hr>
        <cart></cart>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import ProductList from './ProductList.vue';
import Cart from './Cart.vue';
export default Vue.extend({
    components: {
        ProductList,
        Cart,
    },
});
</script>
