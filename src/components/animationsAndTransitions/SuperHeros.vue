<template>
  <ul>
    <li v-for="superHero in superHeros" :key="superHero" @click="deleteHero(superHero)">{{ superHero }}</li>
  </ul>

  <div>
    <input type="text" ref="heroInput" />
    <BaseButton @click="addHero">Add Hero</BaseButton>
  </div>
</template>

<script>
export default {
  data() {
    return {
      superHeros: ['Superman', 'Batman', 'Wonder Woman', 'Flash', 'Aquaman'],
    };
  },
  methods: {
    addHero() {
      const hero = this.$refs.heroInput.value;
      this.superHeros.push(hero);
      this.$refs.heroInput.value = '';
    },
    deleteHero(hero) {
      this.superHeros = this.superHeros.filter(h => h !== hero);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}

li {
  margin: 1rem 0;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
}

input {
  font: inherit;
  width: 90%;
  margin: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 5px;
  box-sizing: border-box;
}
</style>
