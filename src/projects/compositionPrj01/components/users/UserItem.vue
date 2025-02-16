<script>
export default {
  props: ['id', 'userName'],
  emits: ['list-projects'],
  setup(props, context) {
    const viewProjects = () => {
      context.emit('list-projects', props.id);
    };

    return { viewProjects };
  },
};
</script>

<template>
  <li>
    <h3>{{ userName }}</h3>
    <base-button @click="viewProjects">View Projects</base-button>
  </li>
</template>

<style scoped>
li {
  margin: 0.5rem 0;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.26);
  border: 1px solid #ccc;
}

li h3 {
  margin-top: 0;
}
</style>
