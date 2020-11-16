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
    }
  },
  mutations: {
    setToDoList: (state, list) => {
      state.toDoList = list;
    }
  },
  actions: {
    getToDoList ({ commit }) {
      api.getToDoList((list) => {
        commit('setToDoList', list);
      });
    },
    addToDoItem: ({ dispatch }, itemText) => {
      api.addToDoItem(
        itemText,
        () => dispatch('getToDoList')
      );
    },
    removeToDo: ({ dispatch }, item) => {
      api.removeToDoItem(
        item,
        () => dispatch('getToDoList')
      );
    },
    clearToDoList: ({ dispatch }) => {
      api.clearToDoList(() => dispatch('getToDoList'));
    },
    removeDoneItems: ({ dispatch }) => {
      api.removeDoneItems(() => dispatch('getToDoList'));
    }
  },
  modules: {
  }
})
