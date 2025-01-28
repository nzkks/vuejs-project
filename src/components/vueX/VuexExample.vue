<template>
  <BaseContainer title="Vuex">
    <TheCounter />
    <button @click="increment">Increment</button>
  </BaseContainer>
</template>

<script>
import BaseContainer from '../ui/BaseContainer.vue';
import TheCounter from './TheCounter.vue';

export default {
  components: { BaseContainer, TheCounter },
  methods: {
    increment() {
      this.$store.state.counter++;
    },
  },
};
</script>
