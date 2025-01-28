<template>
  <BaseContainer title="Vuex">
    <TheCounter />
    <button @click="inc">Increment</button>
    <button @click="increaseBy10({ value: 10 })">Increase by 10</button>
  </BaseContainer>
</template>

<script>
import { mapActions } from 'vuex';

import BaseContainer from '../ui/BaseContainer.vue';
import TheCounter from './TheCounter.vue';

export default {
  components: { BaseContainer, TheCounter },
  methods: {
    // addOne() {
    //   this.$store.dispatch('increment');
    // },
    // addTen() {
    //   // this.$store.commit('increaseBy10', { value: 10 });
    //   this.$store.dispatch({
    //     type: 'increaseBy10', // 'type' property is mandatory as it the name of the mutation. But, of course, 'type' property won't be sent to the store.
    //     value: 10,
    //     // there can be any number of other properties
    //   });
    // },
    // ...mapActions(['increment', 'increaseBy10']),
    ...mapActions({
      inc: 'increment',
      increaseBy10: 'increaseBy10',
    }),
  },
};
</script>
