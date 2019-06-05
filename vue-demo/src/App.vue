<template>
  <div id="app">
    <user></user>
    <!-- <typescript></typescript> -->
  </div>
</template>

<script>
import user from './components/User.vue'
//import typescript from './components/TestTypescript.vue'
export default {
  name: 'app',
  components: {
    user
   // typescript
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
