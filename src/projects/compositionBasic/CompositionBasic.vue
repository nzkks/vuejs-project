<script setup>
import { ref } from 'vue';

const user = ref({
  name: 'NZKKS',
  age: 30,
});

setTimeout(() => {
  user.value.name = 'NZKKS!!!';
  user.value.age = 31;
}, 1500);
</script>

<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
  </section>
</template>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
