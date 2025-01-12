<template>
  <li>
    <h2>{{ name }} {{ isFavourite ? '(Favourite)' : '' }}</h2>
    <button @click="toggleDetails">{{ isDetailsVisible ? 'Hide' : 'Show' }} Details</button>
    <div v-if="isDetailsVisible">
      <p><strong>Phone:</strong> {{ phoneNumber }}</p>
      <p><strong>Email:</strong> {{ emailAddress }}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
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
    return {
      isDetailsVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.isDetailsVisible = !this.isDetailsVisible;
    },
  },
};
</script>
