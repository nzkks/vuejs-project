<template>
  <h2>My Course Goal</h2>
  <div class="goal-wrapper">
    <!-- <h3 v-if="showGoal">{{ courseGoal }}</h3> -->
    <h3 v-if="goal.showGoal">{{ goal.courseGoal }}</h3>
  </div>
  <base-button @click="toggleGoal">Toggle Goal</base-button>
</template>

<script setup>
// import { ref } from 'vue';
import { reactive } from 'vue';

// const courseGoal = ref('Finish the course and learn Vue!');
// const showGoal = ref(false);

// function toggleGoal() {
//   showGoal.value = !showGoal.value;
// }

// const goal = ref({ courseGoal: 'Finish the course and learn Vue!', showGoal: false });

// function toggleGoal() {
//   goal.value.showGoal = !goal.value.showGoal;
// }

const goal = reactive({ courseGoal: 'Finish the course and learn Vue!', showGoal: false });

function toggleGoal() {
  goal.showGoal = !goal.showGoal;
}
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
.goal-wrapper {
  height: 70px;
}
</style>
