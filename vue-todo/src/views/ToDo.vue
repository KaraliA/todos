<template>
  <div class="todo-container">
    <div class="todo-input">
      <v-text-field
        label="I need to..."
        v-model="todo"
        v-on:keyup.enter="createNewToDoItem"
        hide-details="auto"
        color="#41b883"
      ></v-text-field>
      <v-btn class="todo-add" @click="createNewToDoItem">+</v-btn>
    </div>
    <ToDoList v-if="!isListEmpty"/>
  </div>
</template>

<script>
import ToDoList from '../components/ToDoList';

export default {
  name: 'ToDo',
  components: {
    ToDoList
  },
  data() {
    return {
      todo: ''
    }
  },
  computed: {
    isListEmpty: function () {
      return this.$store.getters.isListEmpty;
    }
  },
  methods: {
    createNewToDoItem() {
      if (!this.todo || !this.todo.trim()) {
        return;
      }

      this.$store.dispatch('addToDoItem', this.todo);
      this.todo = '';
    }
  },
  created() {
    this.$store.dispatch('getToDoList');
  }
}
</script>

<style scoped>
.todo-container {
  width: 40%;
  margin: 2% auto;
}
.todo-input {
  display: inline-flex;
  width: 70%;
}
.todo-add {
  margin-top: 0.5em;
  min-width: 30px !important;
  width: 40px;
  color: #2c3e50;
  font-size: 24px;
}
</style>
