<template>
  <li class="product">
    <div class="product__data">
      <div class="product__image">
        <img :src="image" :alt="title" />
      </div>
      <div class="product__text">
        <h3>{{ title }}</h3>
        <base-badge mode="highlight" :no-margin-left="true">
          <h4>${{ price }}</h4>
        </base-badge>
        <p>{{ description }}</p>
      </div>
    </div>
    <div class="product__actions">
      <button @click="addToCart({ prodId: this.id })">Add to Cart</button>
    </div>
  </li>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['id', 'image', 'title', 'price', 'description'],
  methods: {
    ...mapActions('cart', { addToCart: 'addProductToCart' }),
  },
};
</script>

<style scoped>
li {
  margin: 1.5rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

.product__data {
  display: flex;
}

.product__image {
  margin-right: 1rem;
}

.product__image img {
  height: 10rem;
  width: 10rem;
  object-fit: cover;
}

.product__text h3 {
  margin: 0 0 0.5rem 0;
}

.product__text h4 {
  margin: 0;
}

.product__actions {
  text-align: center;
}

button {
  font: inherit;
  cursor: pointer;
  background-color: #002a6d;
  color: white;
  border: 1px solid #002a6d;
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
}

button:hover,
button:active {
  background-color: #0055de;
  border-color: #0055de;
}
</style>
