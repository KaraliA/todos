<template>
  <div class="item-container">
    <p>Task: {{ item.text }}</p>
    <p>Created at: {{ item.createdAt.toLocaleTimeString() }}</p>
  </div>
</template>

<script>
export default {
  name: 'ToDoItem',
  computed: {
    item: function () {
      return this.$store.getters.getToDoItem(this.$route.params.id);
    }
  },
  created() {
    if(!this.item) {
      this.$router.push('/not-existing');
    }
  }
}
</script>

<style scoped>
.item-container {
  width: 40%;
  margin: 2% auto;
}
</style>