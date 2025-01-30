<template>
  <div class="wrapper">
    <h2>Page Not Found</h2>
    <p>
      This page could not be found - maybe check out all our
      <RouterLink to="/teams">teams</RouterLink>
    </p>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  components: {
    RouterLink,
  },
};
</script>

<style scoped>
.wrapper {
  margin: 5rem auto;
  max-width: 40rem;
  text-align: center;
}
</style>
