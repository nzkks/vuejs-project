<template>
  <user-alert v-if="alertIsVisible" :title="alertTitle" @close="hideAlert">
    <p>Do you want to continue with deleting a user?</p>
  </user-alert>
  <section>
    <h2>Delete a User</h2>
    <base-button @click="showAlert">Delete User</base-button>
  </section>
</template>

<script>
import UserAlert from './UserAlert.vue';
import alertMixin from '../mixins/alertMixin.js';

export default {
  components: {
    UserAlert,
  },
  data() {
    return {
      alertTitle: 'Delete User?',
      alertIsVisible: true,
    };
  },
  mixins: [alertMixin],
};
</script>
