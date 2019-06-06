<template>
    <div>
        <h3>This is cart page</h3>
        <ul>
            <li v-for="item in cart" :key="item.id">
                <span class="item-name">{{item.name}}
                    <button @click="removeItem">x</button>
                </span>
            </li>
        </ul>
        <div v-if="cart.length === 0">
			<h2> No item </h2>
		</div>
        <div v-else>
			<div>Total: {{totalAmount}}.000 VND</div>
			<button @click="clearCart"> Clear All </button>
			<button> Checkout </button>
		</div>
    </div>
</template>
<script>
import { mapState, mapMutations, mapGetters } from 'vuex';
export default {
    computed: {
        ...mapState(['cart']),
        ...mapGetters(['totalAmount'])
    },
    methods: {
        ...mapMutations([
            'removeItem',
            'clearCart'
        ])
    }
}
</script>
<style>
    ul {
        list-style: none;
    }
    li {
        display: flex;
        margin: auto
    }
    .item-name {
        flex: auto
    }
</style>
