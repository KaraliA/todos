<template>
  <div class="todo-item">
    <input class="toggle-done" type="checkbox" v-model="item.done" />
    <p>{{item.text}}</p>
    <button class="remove-btn" @click="remove(item)"></button>
  </div>
</template>

<script>
export default {
  name: 'ToDoItem',
  props: ['item', 'remove']
}
</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  width: 75%;
  margin: 3% auto;
  background: aliceblue;
  border: 1px solid #2c3e50;
  border-radius: 5px;
}
.todo-item:hover .remove-btn {
  display: block;
}
.toggle-done {
  margin: 0 2%;
}
.remove-btn {
  display: none;
  position: absolute;
  right: 900px;
  border: 0;
  background: none;
  cursor: pointer;
  font-size: 30px;
  color:  #2c3e50;
}
.remove-btn:focus {
  outline: 0;
}
.remove-btn:after {
  content: '×';
}
@media only screen and (max-width: 1920px) {
  .remove-btn {
    right: 680px;
  }
}
@media only screen and (max-width: 1440px) {
  .remove-btn {
    right: 510px;
  }
}
@media only screen and (max-width: 1024px) {
  .remove-btn {
    right: 360px;
  }
}
</style>
