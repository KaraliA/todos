import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    toDoList: []
  },
  getters: {
    toDoList: state => {
      return state.toDoList;
    },
    isListEmpty: (state) => {
      return state.toDoList.length === 0;
    },
    toDoItems: (state) => {
      return state.toDoList.filter(item => !item.done).length;
    },
    doneItems: (state) => {
      return state.toDoList.filter(item => item.done).length;
    },
    areThereDoneItems: (state, getters) => {
      return getters.doneItems > 0;
    },
    getToDoItem: (state) => (id) => {
      return state.toDoList.find(item => item.id == id);
    }
  },
  mutations: {
    setToDoList: (state, list) => {
      state.toDoList = list;
    }
  },
  actions: {
    async getToDoList ({ commit }) {
      const list = await api.getToDoList();
      commit('setToDoList', list);
    },
    async addToDoItem ({ dispatch }, itemText) {
      await api.addToDoItem(itemText);
      dispatch('getToDoList');
    },
    async removeToDo ({ dispatch }, item) {
      await api.removeToDoItem(item);
      dispatch('getToDoList');
    },
    async clearToDoList ({ dispatch }) {
      await api.clearToDoList();
      dispatch('getToDoList');
    },
    async removeDoneItems ({ dispatch }) {
      await api.removeDoneItems();
      dispatch('getToDoList');
    }
  },
  modules: {
  }
})
