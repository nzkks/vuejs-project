<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import { ref, provide } from 'vue';

import TheHeader from './components/TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
  setup() {
    const products = ref([
      {
        id: 'p1',
        title: 'A Carpet',
        description: 'A nice looking, maybe a little bit used carpet.',
        price: 15.99,
      },
      {
        id: 'p2',
        title: 'A Book',
        description: 'You can read it. Maybe you should read it.',
        price: 12.99,
      },
    ]);

    function addProduct(productData) {
      const newProduct = {
        id: new Date().toISOString(),
        title: productData.title,
        description: productData.description,
        price: productData.price,
      };
      products.value.push(newProduct);
    }

    provide('products', products);
    provide('addProduct', addProduct);
  },
};
</script>
