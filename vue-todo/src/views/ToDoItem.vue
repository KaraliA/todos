<template>
  <div class="item-container">
    <p>{{ $t('taskName') }}: {{ item.text }}</p>
    <p>{{ $t('createdAt') }}: {{ item.createdAt.toLocaleTimeString() }}</p>
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