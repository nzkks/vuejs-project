<template>
  <h2>My Course Goal</h2>
  <div class="goal-wrapper">
    <h3 v-if="showGoal">{{ courseGoal }}</h3>
  </div>
  <base-button @click="toggleGoal">Toggle Goal</base-button>
</template>

<script>
export default {
  data() {
    return {
      courseGoal: 'Finish the course and learn Vue!',
      showGoal: false,
    };
  },
  methods: {
    toggleGoal() {
      this.showGoal = !this.showGoal;
    },
  },
};
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
