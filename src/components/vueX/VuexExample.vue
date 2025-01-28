<template>
  <BaseContainer title="Vuex">
    <h3>{{ $store.state.counter }}</h3>
    <button @click="increment">Increment</button>
  </BaseContainer>
</template>

<script>
import BaseContainer from '../ui/BaseContainer.vue';

export default {
  components: { BaseContainer },
  methods: {
    increment() {
      this.$store.state.counter++;
    },
  },
};
</script>
