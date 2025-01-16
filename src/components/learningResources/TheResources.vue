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
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>
