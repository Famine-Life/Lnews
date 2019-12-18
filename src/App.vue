<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <MY_list></MY_list>
  </div>
</template>

<script>
import hello from './components/hello'
import MY_list from './components/MY_list'

export default {
  name: 'App',
  components:{
    hello,
    MY_list
  }
}
</script>

<style>
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:100%;
  /* margin-top: 60px; */

}
</style>
