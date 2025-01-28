<template>
  <BaseContainer title="Vuex">
    <TheCounter />
    <button @click="addOne">Increment</button>
  </BaseContainer>
</template>

<script>
import BaseContainer from '../ui/BaseContainer.vue';
import TheCounter from './TheCounter.vue';

export default {
  components: { BaseContainer, TheCounter },
  methods: {
    addOne() {
      this.$store.commit('increment');
    },
  },
};
</script>
