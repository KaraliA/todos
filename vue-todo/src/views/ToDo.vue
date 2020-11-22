<template>
  <div class="todo-container">
    <v-form
      class="todo-form"
      @submit.prevent="createNewToDoItem"
    >
      <v-text-field
        :label="$t('toDoPlaceholder')"
        v-model="form.todo"
        :error-messages="todoErrors"
      ></v-text-field>
      <v-btn class="todo-add" type="submit">
        <v-icon v-text="'$add'" />
      </v-btn>
    </v-form>
    <ToDoList v-if="!isListEmpty"/>
  </div>
</template>

<script>
import ToDoList from '../components/ToDoList';
import { required, maxLength } from "vuelidate/lib/validators";

export default {
  name: 'ToDo',
  components: {
    ToDoList
  },
  data() {
    return {
      form: {
        todo: ''
      }
    }
  },
  validations: {
    form: {
      todo: { required, maxLength: maxLength(20) }
    }
  },
  computed: {
    isListEmpty: function () {
      return this.$store.getters.isListEmpty;
    },
    todoErrors: function () {
      const errors = []
      if (!this.$v.form.todo.$dirty) return errors;
      
      !this.$v.form.todo.maxLength && errors.push(`${this.$t('validationErrors.maxLengthMessage')} ${this.$v.form.todo.$params.maxLength.max}.`);
      !this.$v.form.todo.required && errors.push(this.$t('validationErrors.requiredMessage'));
      return errors;
    }
  },
  methods: {
    createNewToDoItem() {
      this.$v.form.$touch();
      if(this.$v.form.$error) return;

      this.$store.dispatch('addToDoItem', this.form.todo);

      this.$v.form.$reset();
      this.form.todo = '';
    }
  },
  created() {
    this.$store.dispatch('getToDoList');
  }
}
</script>

<style lang="scss" scoped>
.todo-container {
  width: 40%;
  margin: 2% auto;

  .todo-form {
    display: inline-flex;
    width: 70%;

    .todo-add {
      margin-top: 0.8em;
      min-width: 30px !important;
      width: 40px;
      color: #2c3e50;
    }
  }
}
</style>
