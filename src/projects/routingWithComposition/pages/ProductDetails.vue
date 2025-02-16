<template>
  <section>
    <h2>{{ title }}</h2>
    <h3>${{ price }}</h3>
    <p>{{ description }}</p>
    <router-link to="/products/p2">Product 2</router-link>
  </section>
</template>

<script>
import { inject, computed } from 'vue';

export default {
  props: ['pid'],
  setup(props) {
    const products = inject('products');

    const selectedProduct = computed(() => products.value.find(prod => prod.id === props.pid));

    // computed is also a ref object. So use 'value' to extract the value
    const title = computed(() => selectedProduct.value.title);
    const price = computed(() => selectedProduct.value.price);
    const description = computed(() => selectedProduct.value.description);

    // return { title: title.value, price: price.value, description: description.value };
    // OR simply below
    return { title, price, description };
  },
};
</script>

<style scoped>
section {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>
