<template>
    <!-- <ul class="list">
        <li v-for="p in products" :key="p.id">
            {{p.title}} - {{p.price}}
            <br>
            <button
            :disabled="p.invetory"
            >Add to cart
            </button>
        </li>
    </ul> -->
    <div>
        <span v-if="products.length === 0">Fetching Product...</span>
        <table :class="{products: products.length !=0}">
            <tr>
                <th>Product Id</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Invetory</th>
                <th>Buy</th>
            </tr>
            <tr v-for="product in products" :key="product.id">
                <td>{{product.id}}</td>
                <td>{{product.title}}</td>
                <td>{{product.price}}</td>
                <td><button >-</button> {{product.inventory}} <button>+</button></td>
                <td><button :disabled="product.invetory" @click="addToCart(product)">Add to Cart</button></td>
            </tr>
        </table>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Product } from '../store'
import { dispatchAddToCart } from '../store/dispatches'
export default Vue.extend({
    computed: {
        products(): Product[]{
            return this.$store.getters.allProducts
        }
    },
    methods: {
        addToCart(p: Product){
            dispatchAddToCart(p)
            console.log("addtocart", p)
            console.log(this.$store)
        }
    },
    created(){
        this.$store.dispatch('getAllProducts')
    }
})
</script>
<style scoped>
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