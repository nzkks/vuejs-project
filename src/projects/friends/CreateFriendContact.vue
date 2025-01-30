<template>
  <section style="margin: 2rem auto; width: 100%; max-width: 500px">
    <h2>Add a friend contact</h2>
    <form>
      <div>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" v-model="enteredName" />
      </div>
      <div>
        <label for="phone">Phone</label>
        <input type="text" id="phone" name="phone" v-model="enteredPhone" />
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" name="email" v-model="enteredEmail" />
      </div>
      <div>
        <label for="favourite">Favourite</label>
        <input type="checkbox" id="favourite" name="favourite" v-model="enteredFavourite" />
      </div>
      <button type="submit" @click.prevent="submitData">Add</button>
    </form>
    <hr />
  </section>
</template>

<script>
export default {
  data() {
    return {
      enteredName: '',
      enteredPhone: '',
      enteredEmail: '',
      enteredFavourite: false,
    };
  },
  emits: ['add-friend'],
  methods: {
    submitData() {
      if (this.enteredName === '' || this.enteredPhone === '' || this.enteredEmail === '') {
        return;
      }

      this.$emit('add-friend', this.enteredName, this.enteredPhone, this.enteredEmail, this.enteredFavourite);
    },
  },
};
</script>
