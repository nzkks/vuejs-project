<template>
  <BaseCard>
    <BaseButton @click="setSelectedTab('StoredResources')" :mode="storedResBtnMode">Stored Resources</BaseButton>
    <BaseButton @click="setSelectedTab('AddResource')" :mode="addResBtnMode">Add Resource</BaseButton>
  </BaseCard>

  <keep-alive>
    <component :is="selectedTab" />
  </keep-alive>
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
    addResource(title, description, link) {
      const newResource = {
        id: new Date().toISOString(),
        title,
        description,
        link,
      };

      this.storedResources.unshift(newResource);
      this.selectedTab = 'StoredResources';
    },
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
    };
  },
  computed: {
    storedResBtnMode() {
      return this.selectedTab === 'StoredResources' ? null : 'flat';
    },
    addResBtnMode() {
      return this.selectedTab === 'AddResource' ? null : 'flat';
    },
  },
};
</script>
