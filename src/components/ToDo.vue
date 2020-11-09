<template>
  <div class='todo-container'>
    <img src='../assets/logo.png' class='logo'/>
    <h1>To Do List</h1>
    <div class='todo-input'>
      <input type='text' placeholder='I need to...' v-model="todo" v-on:keyup.enter="createNewToDoItem" />
      <button class='todo-add' @click="createNewToDoItem">+</button>
    </div>
    <div v-if="!isListEmpty" :class="{'todo-list': !isListEmpty}">
      <Counter :list="list"/>
      <button class='action-btn' :disabled="!areThereDoneItems" @click="removeDoneItems">Remove done</button>
      <button class='action-btn' @click="clearToDoList">Clear all</button>
      <div style="width: 100%;">
        <ToDoItem v-for="item in list" :item="item" :key="item.id" :remove="removeToDo" />
      </div>
    </div>
  </div>
</template>

<script>
import ToDoItem from './ToDoItem.vue'
import Counter from './Counter.vue'

export default {
  name: 'ToDo',
  components: {
    ToDoItem,
    Counter
  },
  data() {
    return {
      list: [],
      todo: ''
    }
  },
  computed: {
    isListEmpty: function () {
      return this.list.length === 0;
    },
    areThereDoneItems: function () {
      return this.list.find(item => item.done);
    }
  },
  methods: {
    createNewToDoItem() {
      if (!this.todo || !this.todo.trim()) {
        return;
      }

      this.list.push({
        id: Math.floor(Math.random()*Date.now()),
        text: this.todo,
        done: false
      });
      this.todo = '';
    },
    removeDoneItems() {
      this.list = this.list.filter(item => !item.done);
    },
    clearToDoList() {
      this.list = [];
    },
    removeToDo(item) {
      this.list.splice(this.list.indexOf(item), 1);
    }
  }
}
</script>

<style scoped>
.logo {
  width: 100px;
}
.todo-container {
  width: 40%;
  margin: 5% auto;
}
.todo-input > input {
  background: aliceblue;
  width: 70%;
  padding: 12px;
  font-size: 16px;
  outline: none;
  border: 1px solid #2c3e50;
  border-radius: 5px;
  margin: 2% auto 2% 5%;
  box-shadow: 1px 3px 20px 0px rgba(0, 0, 0, 0.3);
}
.todo-add {
  padding: 4px 12px 8px;
  cursor: pointer;
  border-radius: 5px;
  color: #2c3e50;
  font-size: 24px;
}
.todo-list {
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: auto;
  margin-top: 5%;
  padding: 3% 0;
  box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.3);
  background:#D2EEE1;
}
.action-btn {
  font-size: 16px;
  padding: 16px;
  margin: 4px 2px;
  background-color: white;
  color: #2c3e50;
  border: 1px solid #2c3e50;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 1px 3px 5px 0px rgba(0, 0, 0, 0.3);
}
.action-btn:disabled {
  opacity: 0.6;
  box-shadow: none;
}
</style>
