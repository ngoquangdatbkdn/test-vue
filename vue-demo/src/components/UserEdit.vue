<template>
    <div class="component" id="edit">
        <h3>Edit user</h3>
        <h3>tuoi cua toi: {{userAge}}</h3>
        <button v-on:click="change">thay doi</button>
    </div>
</template>
<script>
import { eventBus } from '../main.js'
export default {
    props: ['userAge'],
    methods: {
        change() {
            this.userAge +=1;
            eventBus.$emit('ageWasEdit', this.userAge)
        }
    }
}
</script>

<style>
    #edit {
        background-color:blueviolet;
    }
</style>
