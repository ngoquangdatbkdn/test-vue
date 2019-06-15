<template>
  <div>
    <ShoppingCart />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ShoppingCart from '@/components/ShoppingCart.vue';

@Component({
  components: {
    ShoppingCart,
  },
})
export default class Home extends Vue {}
</script>
