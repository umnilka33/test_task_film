<template>
  <div id="app">
    <p>Hello Vue haha</p>
    <p>Lom com top</p>
    <f-main-wrapper/>
  </div>
</template>

<script>
  import fMainWrapper from './components/f-main-wrapper'


export default {
  name: 'App',
  components: {
    fMainWrapper
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
