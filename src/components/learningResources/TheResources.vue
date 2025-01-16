<template>
  <BaseCard>
    <BaseButton @click="setSelectedTab('StoredResources')">Stored Resources</BaseButton>
    <BaseButton @click="setSelectedTab('AddResource')">Add Resource</BaseButton>
  </BaseCard>

  <component :is="selectedTab" />
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: { StoredResources, AddResource },
  data() {
    return {
      selectedTab: 'StoredResources',
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
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
  },
  provide() {
    return {
      resources: this.storedResources,
    };
  },
};
</script>
