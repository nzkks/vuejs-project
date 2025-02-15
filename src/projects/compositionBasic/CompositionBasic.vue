<script setup>
import { ref, computed, watch } from 'vue';

// data
const firstName = ref('');
const lastName = ref('');
const lastNameInput = ref(null);
const age = ref(30);

// computed
const fullName = computed(() => `${firstName.value} ${lastName.value}`);

// methods
const setLastName = () => (lastName.value = lastNameInput.value.value); // first .value is the value of the ref (input), second .value is the value property of the input element object

const setNewAge = () => (age.value += 1);

// watch
watch([age, fullName], (newValues, oldValues) => {
  console.log('Age changed from ' + oldValues[0] + ' to ' + newValues[0]);
  console.log('FullName changed from ' + oldValues[1] + ' to ' + newValues[1]);
});
</script>

<template>
  <section class="container">
    <h2>Hello {{ fullName }}</h2>
    <h3>{{ age }}</h3>
    <base-button @click="setNewAge">Set New Age</base-button>
    <div class="inputContainer">
      <div>
        <label for="firstName">First Name</label
        ><input type="text" id="firstName" name="firstName" placeholder="First Name" v-model="firstName" />
      </div>
      <div>
        <label for="lastName">Last Name</label
        ><input type="text" id="lastName" name="lastName" placeholder="Last Name" ref="lastNameInput" />
      </div>
    </div>
    <base-button @click="setLastName">Set Last Name</base-button>
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
  margin-bottom: 1rem;
  display: flex;
  gap: 1rem;
}
</style>
