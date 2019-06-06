<template>
    <div>
        <span v-if="products.length === 0">Fetching Products....</span>
        <h3>this is product page</h3>
        <div></div>
        <table :class="{products: products.length !==0}">
            <tr v-show="products.length !== 0">
                <th>Product Id</th>
                <th>Product BrandName</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Buy</th>
            </tr>
            <tr v-for="product in products"
            :key="product.id">
                <td>{{product.id}}</td>
                <td>{{product.brand_name}}</td>
                <td>{{product.name}}</td>
                <td>{{product.price}}.000 VNĐ</td>
                <td>
                    <button @click="addToCart(product)">Add to cart</button>
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
    // data(){
    //     //?
    //     return {
	// 		infos: []
	// 	}
    // },
    mounted() {
        this.fetchProducts();
        console.log('mounted fetch')
	},
    computed: mapState(['products']),
    methods: {
        ...mapActions(['fetchProducts']),
        addToCart(product){
            console.log('add to cart----')
            this.$store.commit('addToCart', product)
        }
    }
}
</script>
<style>
    .products {
		border: 1px solid #ddd;
		margin: auto;
	}
    .products td,
	th {
		border: 1px solid #ddd;
		padding: 10px;
	}
</style>
