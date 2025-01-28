<template>
  <BaseContainer title="Vuex">
    <h3>{{ $store.state.counter }}</h3>
  </BaseContainer>
</template>

<script>
import BaseContainer from '../ui/BaseContainer.vue';

export default {
  components: { BaseContainer },
};
</script>
