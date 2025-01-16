<template>
  <ul>
    <ResourceItem v-for="resource in storedResources" :key="resource.id" :resource="resource"></ResourceItem>
  </ul>
</template>

<script>
import ResourceItem from './ResourceItem.vue';

export default {
  components: { ResourceItem },
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
