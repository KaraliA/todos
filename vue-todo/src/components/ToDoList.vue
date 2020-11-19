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
          <router-link :to="`/todo/${item.id}`">
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </router-link>
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
      this.$store.dispatch('removeToDo', item);
    }
  }
}
</script>

<style lang="scss" scoped>
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

    &:disabled {
      opacity: 0.6;
      box-shadow: none;
    }
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
}
</style>
