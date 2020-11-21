<template>
  <div class="counter">
    <p>{{ $t('toDoCounter') }}: {{ toDo }}</p>
    <p>{{ $t('doneCounter') }}: {{ done }}</p>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  computed: {
    toDo: function () {
      return this.$store.getters.toDoItems;
    },
    done: function () {
      return this.$store.getters.doneItems;
    }
  }
}
</script>

<style scoped>
.counter {
  display: inline-block;
  width: 10%;
  margin-left: 5%;
  text-align: left;
  font-weight: bold;
}
</style>
