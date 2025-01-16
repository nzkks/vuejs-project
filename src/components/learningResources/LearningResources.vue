<template>
  <BaseHeader>Learning Resources</BaseHeader>
  <StoredResources :resources="storedResources"></StoredResources>
</template>

<script>
import StoredResources from './StoredResources.vue';
import BaseHeader from '../layout/BaseHeader.vue';

export default {
  components: { StoredResources, BaseHeader },
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
