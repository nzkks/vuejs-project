<script>
import {
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue';

export default {
  props: ['firstName', 'lastName'],
  setup(props, context) {
    const fullName = computed(() => `${props.firstName} ${props.lastName}`);

    console.log(context); // attrs, emit, expose, slots
    context.emit('set-title', fullName.value);

    const age = inject('userAge');

    // There are no lifesycle hooks like "beforeCreate" and "created" which can be found using the Options API. In composition API, the setup method is called when the component is created

    // Rest of the available lifecycle hooks below including unmount related hooks
    onBeforeMount(() => console.log('Before Mount'));
    onMounted(() => console.log('Mounted'));
    onBeforeUpdate(() => console.log('Before Update'));
    onUpdated(() => console.log('Updated'));

    // when the component is 'about to be removed' and 'removed'(example: v-if is used in the template in its parent component)
    onBeforeUnmount(() => console.log('Before Unmount'));
    onUnmounted(() => console.log('Unmounted'));

    return { userName: fullName, age };
  },
};
</script>

<template>
  <h2>Hello {{ userName }}</h2>
  <h3>{{ age }}</h3>
</template>
