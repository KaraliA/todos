<template>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    
  </div> -->
  <v-app>
    <v-app-bar app>
      <Counter />
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
</v-app>
</template>

<script>
import Counter from './components/Counter';

export default {
  name: 'App',
  components: {
    Counter
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
header {
  height: 80px !important;
}
</style>
