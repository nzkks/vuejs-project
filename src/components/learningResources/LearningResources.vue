<template>
  <BaseHeader>Learning Resources</BaseHeader>
  <TheResources />
</template>

<script>
import BaseHeader from '../layout/BaseHeader.vue';
import TheResources from './TheResources.vue';

export default {
  components: { TheResources, BaseHeader },
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
  provide() {
    return {
      resources: this.storedResources,
    };
  },
};
</script>
