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
    removeResource(resId) {
      // this.storedResources = this.storedResources.filter(res => res.id !== resId);
      // above statement only partially works. I.e. The above creates a new array that vue will not use it to rerender the list as it is using the old array in memory.

      const resIndex = this.storedResources.findIndex(res => res.id === resId);
      this.storedResources.splice(resIndex, 1);
    },
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      removeResource: this.removeResource,
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
