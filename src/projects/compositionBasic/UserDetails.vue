<script>
import { computed } from 'vue';

export default {
  props: ['firstName', 'lastName', 'age'],
  setup(props) {
    const fullName = computed(() => `${props.firstName} ${props.lastName}`);
    return { userName: fullName };
  },
};
</script>

<template>
  <h2>Hello {{ userName }}</h2>
  <h3>{{ age }}</h3>
</template>
