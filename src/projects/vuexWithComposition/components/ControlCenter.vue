<template>
  <base-button @click="inc">Increment</base-button>
</template>

<script>
export default {
  setup() {
    function inc() {}

    return { inc };
  },
};
</script>
