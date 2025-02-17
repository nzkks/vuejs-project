<template>
  <div class="container">
    <the-counter></the-counter>
    <control-center></control-center>
  </div>
</template>

<script>
import ControlCenter from './components/ControlCenter.vue';
import TheCounter from './components/TheCounter.vue';

export default {
  components: {
    ControlCenter,
    TheCounter,
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
