<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/nav/TheHeader.vue';
import products from './products.js';

export default {
  components: {
    TheHeader,
  },
  data() {
    return {
      products,
    };
  },
  provide() {
    return {
      products: this.products,
    };
  },
};
</script>
