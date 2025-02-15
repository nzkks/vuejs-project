<script>
import { computed, inject } from 'vue';

export default {
  props: ['firstName', 'lastName'],
  setup(props, context) {
    const fullName = computed(() => `${props.firstName} ${props.lastName}`);

    console.log(context); // attrs, emit, expose, slots
    context.emit('set-title', fullName.value);

    const age = inject('userAge');

    return { userName: fullName, age };
  },
};
</script>

<template>
  <h2>Hello {{ userName }}</h2>
  <h3>{{ age }}</h3>
</template>
