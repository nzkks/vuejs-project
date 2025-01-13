<template>
  <div>
    <the-header />
    <badge-list />
    <user-info :full-name="activeUser.name" :info-text="activeUser.description" :role="activeUser.role" />
  </div>
</template>

<script>
import TheHeader from './TheHeader.vue';

export default {
  components: { 'the-header': TheHeader },
  data() {
    return {
      activeUser: {
        name: 'John Doe',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script>
