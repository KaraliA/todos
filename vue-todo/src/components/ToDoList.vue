<template>
  <div class="todo-list">
    <v-btn
      class="action-btn"
      :disabled="!areThereDoneItems"
      @click="removeDoneItems"
    >
      Remove done
    </v-btn>
    <v-btn class="action-btn" @click="clearToDoList">Clear all</v-btn>
    <v-list style="width: 100%; background: #D2EEE1;">
      <v-list-item
        class="todo-item"
        v-for="item in list"
        :key="item.id"
      >
        <v-list-item-action>
          <v-checkbox v-model="item.done"></v-checkbox>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-icon v-text="'$remove'" @click="removeToDo(item)">
          </v-icon>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'ToDoList',
  computed: {
    list: function () {
      return this.$store.getters.toDoList;
    },
    areThereDoneItems: function () {
      return this.$store.getters.areThereDoneItems;
    }
  },
  methods: {
    removeDoneItems() {
      this.$store.dispatch('removeDoneItems');
    },
    clearToDoList() {
      this.$store.dispatch('clearToDoList');
    },
    removeToDo(item) {
      console.log(item)
      this.$store.dispatch('removeToDo', item);
    }
  }
}
</script>

<style scoped>
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
