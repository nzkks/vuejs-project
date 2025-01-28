<template>
  <h3>Counter is {{ counter }}</h3>
  <h3>Normalized Counter is {{ normCounter }}</h3>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.finalCounter;
    },
    normCounter() {
      return this.$store.getters.normalizedCounter;
    },
  },
};
</script>
