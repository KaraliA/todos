<template>
  <div class='todo-container'>
    <img src='../assets/logo.png' class='logo'/>
    <h1>To Do List</h1>
    <div class='todo-input'>
      <input
        type='text'
        placeholder='I need to...'
        v-model="todo"
        v-on:keyup.enter="createNewToDoItem"
      />
      <button class='todo-add' @click="createNewToDoItem">+</button>
    </div>
    <ToDoItem v-for="item in list" :item="item" :key="item.id" />
  </div>
</template>

<script>
import ToDoItem from './ToDoItem.vue'

export default {
  name: 'ToDo',
  components: {
    ToDoItem
  },
  data() {
    return {
      list: [{ id: 1, text: 'prepare breakfast' }, { id: 2, text: 'make a coffee' }],
      todo: ''
    }
  },
  methods: {
    createNewToDoItem() {
      if (!this.todo) {
        alert('Please enter a todo!');
        return;
      }

      this.list.push({ id: 0, text: this.todo });
      this.todo = '';
    }
  }
}
</script>

<style scoped>
.logo {
  width: 100px;
}
.todo-container {
  background: #D2EEE1;
  width: 40%;
  margin: 5% auto;
  box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.3);
}
.todo-list {
  text-align: center;
  width: 100%;
  height: auto;
  box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.3);
  background: #fdfdfd;
  padding-bottom: 60px;
  
}
</style>
