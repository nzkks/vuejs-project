<script setup>
import { reactive, ref, computed } from 'vue';

const greeting = ref('Hello');
const firstName = ref('');
const lastName = ref('');

const user = reactive({
  name: computed(() => `${firstName.value} ${lastName.value}`),
  age: 30,
});

const changeUserValues = () => {
  greeting.value = 'Hi';
  user.name = 'NZKKS!!!'; // computed property can't be changed. So this won't work and anything below this line will be ignored
  user.age = 31;
};
</script>

<template>
  <section class="container">
    <h2>{{ greeting }} {{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
    <base-button @click="changeUserValues">Change User Values</base-button>
    <div class="inputContainer">
      <div>
        <label for="firstName">First Name</label
        ><input type="text" id="firstName" name="firstName" placeholder="First Name" v-model="firstName" />
      </div>
      <div>
        <label for="lastName">Last Name</label
        ><input type="text" id="lastName" name="lastName" placeholder="Last Name" v-model="lastName" />
      </div>
    </div>
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

.inputContainer {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
}
</style>
