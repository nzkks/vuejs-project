<template>
  <div class="container">
    <add-user></add-user>
    <delete-user></delete-user>
  </div>
</template>

<script>
import AddUser from './components/AddUser.vue';
import DeleteUser from './components/DeleteUser.vue';

export default {
  components: {
    AddUser,
    DeleteUser,
  },
};
</script>

<style scoped>
.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
