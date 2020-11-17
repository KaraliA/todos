<template>
  <v-app>
    <v-app-bar app>
      <Counter />
    </v-app-bar>
    <v-main style="margin-top: 5%;">
      <img src="./assets/logo.png" class="logo"/>
      <h1>To Do List</h1>
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
.logo {
  width: 100px;
}
</style>
