<script setup>
import { reactive, ref } from 'vue';

// ref works with all data type string, number, boolean, object, array etc.
const greeting = ref('Hello');

// reactive works only on object
const user = reactive({
  name: 'NZKKS',
  age: 30,
});

const changeUserValues = () => {
  greeting.value = 'Hi';
  user.name = 'NZKKS!!!';
  user.age = 31;
};
</script>

<template>
  <section class="container">
    <h2>{{ greeting }} {{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
    <base-button @click="changeUserValues">Change User Values</base-button>
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
