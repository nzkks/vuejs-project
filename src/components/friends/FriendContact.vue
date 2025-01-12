<template>
  <li>
    <h2>{{ name }} {{ isFavourite ? '(Favourite)' : '' }}</h2>
    <p><strong>Phone:</strong> {{ phoneNumber }}</p>
    <p><strong>Email:</strong> {{ emailAddress }}</p>
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavourite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
