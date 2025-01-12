<template>
  <li>
    <h2>{{ name }} {{ isFavourite ? '(Favourite)' : '' }}</h2>
    <button @click="toggleFavourite">Toggle Favourite</button>
    <button @click="$emit('delete-contact', id)">Delete</button>
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
  emits: ['toggle-favourite', 'delete-contact'],
  // emits: {
  //   'toggle-favourite': id => {
  //     if (id) {
  //       return true;
  //     } else {
  //       console.warn('id is missing');
  //       return false;
  //     }
  //   },
  // },
  data() {
    return {
      isDetailsVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.isDetailsVisible = !this.isDetailsVisible;
    },
    toggleFavourite() {
      this.$emit('toggle-favourite', this.id);
    },
  },
};
</script>
