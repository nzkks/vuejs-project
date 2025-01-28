<template>
  <BaseContainer title="Vuex">
    <h3>{{ counter }}</h3>
    <button @click="increment">Increment</button>
  </BaseContainer>
</template>

<script>
import BaseContainer from '../ui/BaseContainer.vue';

export default {
  components: { BaseContainer },
  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
  methods: {
    increment() {
      this.$store.state.counter++;
    },
  },
};
</script>
