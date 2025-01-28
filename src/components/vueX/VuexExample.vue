<template>
  <BaseContainer title="User Auth">
    <UserAuth />
  </BaseContainer>

  <BaseContainer title="Vuex" v-if="isAuthenticated">
    <TheCounter />
    <BaseButton @click="inc">Increment</BaseButton>
    <BaseButton @click="increaseBy10({ value: 10 })">Increase by 10</BaseButton>
  </BaseContainer>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import BaseContainer from '../ui/BaseContainer.vue';
import TheCounter from './TheCounter.vue';
import UserAuth from './UserAuth.vue';

export default {
  components: { BaseContainer, TheCounter, UserAuth },
  computed: {
    ...mapGetters(['isAuthenticated']),
  },
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
