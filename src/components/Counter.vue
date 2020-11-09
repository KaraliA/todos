<template>
  <div class="counter">
    <p>To do: {{ toDo }} {{pluralize(toDo)}}</p>
    <p>Done: {{ done }} {{pluralize(done)}}</p>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  props: ['list'],
  computed: {
    toDo: function () {
      return this.list.filter(item => !item.done).length;
    },
    done: function () {
      return this.list.filter(item => item.done).length;
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
  text-align: left;
  font-weight: bold;
}
</style>
