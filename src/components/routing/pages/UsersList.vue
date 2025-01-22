<template>
  <!-- Example button to just show the "programmatic route navigation" -->
  <BaseButton @click="confirmInput">Confirm</BaseButton>

  <!-- Example button to simulate unsaved changes prompt (confirm) before the user tries to navigate away -->
  <BaseButton @click="updateChanges">Update Changes</BaseButton>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      changesSaved: false,
    };
  },
  methods: {
    confirmInput() {
      // Do something

      this.$router.push('/teams');
      // this.$router.back();
      // this.$router.forward();
    },
    updateChanges() {
      this.changesSaved = true;
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log('UsersList Cmp beforeRouteEnter');
    // console.log({ to, from });
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('UsersList Cmp beforeRouteLeave');
    // console.log({ to, from });
    if (this.changesSaved) {
      next();
    } else {
      confirm('Are you sure? You have unsaved changes!') ? next() : next(false);
    }
  },
  unmounted() {
    console.log('UsersList Cmp unmounted');
    // here we cannot cancel the navigation. But beforeRouteLeave hook can be used to cancel the navigation
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
