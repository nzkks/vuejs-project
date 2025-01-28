<template>
  <BaseContainer title="Vuex">
    <TheCounter />
    <button @click="addOne">Increment</button>
    <button @click="addTen">Increase by 10</button>
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
    addTen() {
      this.$store.commit('increaseBy10', { value: 10 });
    },
  },
};
</script>
