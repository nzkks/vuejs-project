<template>
  <ul>
    <LearningResource v-for="resource in storedResources" :key="resource.id" :resource="resource"></LearningResource>
  </ul>
</template>

<script>
import LearningResource from './LearningResource.vue';

export default {
  components: { LearningResource },
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.com',
        },
      ],
    };
  },
};
</script>
