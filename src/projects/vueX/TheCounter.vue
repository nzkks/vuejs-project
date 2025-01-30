<template>
  <h3>Counter is {{ finalCounter }}</h3>
  <h3>Normalized Counter is {{ normalizedCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // counter() {
    //   return this.$store.getters['numbers/finalCounter'];
    // },
    // normCounter() {
    //   return this.$store.getters['numbers/normalizedCounter'];
    // },
    ...mapGetters('numbers', ['finalCounter', 'normalizedCounter']),
  },
};
</script>
