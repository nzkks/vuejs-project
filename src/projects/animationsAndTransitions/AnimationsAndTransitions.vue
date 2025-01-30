<template>
  <!-- As you know RouterView is a component that used to render the current route. Usually Transition element is used to wrap a component. But in RouterView case, it is used to wrap the component rendered by RouterView. Also we can use v-slot to wrap the component rendered by RouterView. -->
  <RouterView v-slot="slotProps">
    <!-- mode="out-in" means the exiting component gets the transition first and then the entering component -->
    <!-- Also important thing to remember: The route component must not have just multiple root elements for the Transition to work. So just wrapping the multiple root elements with a single root element (example: div) is enough -->
    <transition name="fade-route" mode="out-in">
      <!-- Dynamic component -->
      <component :is="slotProps.Component"></component>
    </transition>
  </RouterView>
</template>

<script>
import { RouterView } from 'vue-router';

export default {
  components: {
    RouterView,
  },
};
</script>

<style scoped>
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.fade-route-enter-from,
.fade-route-leave-to {
  opacity: 0;
}

.fade-route-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-route-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-route-enter-to,
.fade-route-leave-from {
  opacity: 1;
}
</style>
