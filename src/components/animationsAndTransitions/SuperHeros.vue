<template>
  <TransitionGroup tag="ul" name="heroes-list">
    <li v-for="superHero in superHeros" :key="superHero" @click="deleteHero(superHero)">{{ superHero }}</li>
  </TransitionGroup>

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
      if (hero === '') return;
      this.superHeros.unshift(hero);
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

.heroes-list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.heroes-list-enter-active {
  transition: all 1s ease-out;
}

.heroes-list-enter-to,
.heroes-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.heroes-list-leave-active {
  transition: all 1s ease-in;
  position: absolute; /* This is to make the exit animation looks smooth. Otherwise it snaps */
}

.heroes-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* -move hook is to move other elements from old place to new place */
.heroes-list-move {
  transition: transform 0.8s ease;
}
</style>
