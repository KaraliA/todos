<template>
  <div class="todo-item">
    <p>{{item.text}}</p>
  </div>
</template>

<script>
export default {
  name: 'ToDoItem',
  props: ['item']
}
</script>

<style scoped>
.todo-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75%;
    margin: 3% auto;
    background: aliceblue;
    border: 1px solid seagreen;
}
</style>
