<template>
  <div style="font-weight: bold; color: red">Active User</div>
  <div>
    <h1>{{ name }}</h1>
    <h2>{{ age }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    age: { type: String, required: true },
  },
};
</script>
