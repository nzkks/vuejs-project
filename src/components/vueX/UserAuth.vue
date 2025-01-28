<template>
  <BaseButton @click="login" v-if="!isAuthenticated">Login</BaseButton>
  <BaseButton @click="logout" v-else>Logout</BaseButton>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import BaseButton from '../ui/BaseButton.vue';

export default {
  components: { BaseButton },
  methods: {
    ...mapActions(['login', 'logout']),
  },
  computed: {
    ...mapGetters(['isAuthenticated']),
  },
};
</script>
