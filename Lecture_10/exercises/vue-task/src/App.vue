<template>
  <div id="app">
    <addressBook/>
  </div>
</template>

<script>
import addressBook from './components/phoneBook'

export default {
  name: 'App',
  components: {
    addressBook
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
