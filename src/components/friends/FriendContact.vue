<template>
  <li>
    <h2>{{ name }} {{ isFavourite === '1' ? '(Favourite)' : '' }}</h2>
    <p><strong>Phone:</strong> {{ phoneNumber }}</p>
    <p><strong>Email:</strong> {{ emailAddress }}</p>
  </li>
</template>

<script>
export default {
  props: ['name', 'phoneNumber', 'emailAddress', 'isFavourite'],
  data() {
    return {};
  },
  methods: {},
};
</script>
