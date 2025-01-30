<template>
  <span class="badge" :class="['badge--' + mode, { nml: noMarginLeft }]"><slot></slot></span>
</template>

<script>
export default {
  props: ['mode', 'noMarginLeft'],
};
</script>

<style scoped>
.badge {
  display: inline-block;
  padding: 0.15rem 1.25rem;
  border-radius: 30px;
  background-color: #ccc;
  color: #292929;
  margin: 0 0.75rem;
}

.nml {
  margin-left: 0;
}

.badge--admin {
  background-color: #810036;
  color: white;
}

.badge--author {
  background-color: #002c8a;
  color: white;
}

.badge--highlight {
  background-color: #f0b800;
  color: black;
}

.badge--elegant {
  background-color: #002a6d;
  color: white;
}
</style>
