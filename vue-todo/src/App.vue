<template>
  <v-app>
    <v-app-bar app>
      <Counter />
      <v-select
        v-model="$i18n.locale"
        :items="locales"
        item-text="title"
        item-value="locale"
        class="lang-select"
      />
    </v-app-bar>
    <v-main style="margin-top: 5%;">
      <img src="./assets/logo.png" class="logo"/>
      <h1>{{ $t('toDoList') }}</h1>
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
  },
  props: ['locales']
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
  padding-top: 1%;

  .lang-select {
    max-width: 10%;
  }
}
.logo {
  width: 100px;
}
</style>
