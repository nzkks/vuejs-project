<template>
  <div>
    <the-header />
    <badge-list />
    <user-info :full-name="activeUser.name" :info-text="activeUser.description" :role="activeUser.role" />
  </div>
</template>

<script>
export default {
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
