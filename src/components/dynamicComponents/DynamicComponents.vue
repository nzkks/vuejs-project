<template>
  <button @click="setSelectedComponent('ActiveGoals')">Active</button>
  <button @click="setSelectedComponent('ManageGoals')">Manage</button>

  <ActiveGoals v-if="selectedComponent === 'ActiveGoals'" />
  <ManageGoals v-if="selectedComponent === 'ManageGoals'" />
</template>

<script>
import ActiveGoals from './ActiveGoals.vue';
import ManageGoals from './ManageGoals.vue';

export default {
  name: 'DynamicComponents',
  components: { ActiveGoals, ManageGoals },
  data() {
    return {
      selectedComponent: 'ActiveGoals',
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>
