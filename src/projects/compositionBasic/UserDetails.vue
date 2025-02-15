<script>
export default {
  props: ['firstName', 'lastName', 'age'],
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
  },
};
</script>

<template>
  <h2>Hello {{ fullName }}</h2>
  <h3>{{ age }}</h3>
</template>
