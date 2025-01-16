<template>
  <ul>
    <LearningResource v-for="resource in resources" :key="resource.id" :resource="resource"></LearningResource>
  </ul>
</template>

<script>
import LearningResource from './LearningResource.vue';

export default {
  components: { LearningResource },
  props: ['resources'],
};
</script>
