<template>
  <button :class="mode"><slot></slot></button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: ['mode'],
};
</script>

<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #044895;
  border: 1px solid #00259e;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #0552ab;
  border-color: #00259e;
}

.flat {
  background-color: transparent;
  color: #044895;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #d2dcff;
}

.outline {
  background-color: transparent;
  border-color: #044895;
  color: #044895;
}

.outline:hover,
.outline:active {
  background-color: #d2dcff;
}
</style>
