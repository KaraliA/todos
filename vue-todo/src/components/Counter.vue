<template>
  <div class="counter">
    <p>To do: {{ toDo }} {{pluralize(toDo)}}</p>
    <p>Done: {{ done }} {{pluralize(done)}}</p>
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
  },
  methods: {
    pluralize: (length) => {
      return length === 1 ? "item" : "items";
    }
  }
}
</script>

<style scoped>
.counter {
  display: inline-block;
  width: 33%;
  margin-top: 2%;
  margin-left: 10%;
  text-align: left;
  font-weight: bold;
}
</style>
