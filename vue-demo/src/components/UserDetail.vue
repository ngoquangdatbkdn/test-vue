<template>
    <div class="component" id="detail">
        <h3>User Detail</h3>
        <h3>tuoi toi: {{age}}</h3>
        <button v-on:click="thaydoi">thaydoi</button>
    </div>
    
</template>

<script>
import { eventBus } from '../main'

    export default {
        props: ['age'],
        methods: {
            thaydoi (){
                this.age = 24;
                this.$emit('ageWasUpdated', this.age)
            }
        },
        created () {
        eventBus.$on('ageWasEdit', (age) => {
            this.age = age
        })
    }  
    }
</script>
<style>
    #detail {background-color: aqua}
</style>
