<template>
  <ul>
    <li :class="{ active: activeOption === 'Poor' }">
      <button type="button" @click="setActiveOption('Poor')">Poor</button>
    </li>
    <li :class="{ active: activeOption === 'Average' }">
      <button type="button" @click="setActiveOption('Average')">Average</button>
    </li>
    <li :class="{ active: activeOption === 'Great' }">
      <button type="button" @click="setActiveOption('Great')">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'RatingControl',
  data() {
    return {
      activeOption: null,
    };
  },
  methods: {
    setActiveOption(option) {
      this.activeOption = option;
    },
  },
};
</script>

<style scoped>
.active {
  border-color: #003ba0;
}

.active button {
  color: #003ba0;
}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
