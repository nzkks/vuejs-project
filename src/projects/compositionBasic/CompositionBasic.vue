<script setup>
import { reactive, ref, computed } from 'vue';

// ref works with all data type string, number, boolean, object, array etc.
const greeting = ref('Hello');
const firstName = ref('');
const lastName = ref('');

// reactive works only on object
const user = reactive({
  name: computed(() => `${firstName.value} ${lastName.value}`),
  age: 30,
});

const changeUserValues = () => {
  greeting.value = 'Hi';
  user.name = 'NZKKS!!!';
  user.age = 31;
};

// No more manual binding
// const setFirstName = event => {
//   firstName.value = event.target.value;
// };

// const setLastName = event => {
//   lastName.value = event.target.value;
// };
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
        <!--v-model is for two-way binding -->
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
