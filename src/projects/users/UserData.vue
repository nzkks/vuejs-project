<template>
  <div style="font-weight: bold; color: red">Users data</div>
  <div>
    <form>
      <div>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" v-model="enteredName" />
      </div>
      <div>
        <label for="age">Age</label>
        <input type="number" id="age" name="age" min="1" max="100" step="1" v-model="enteredAge" />
      </div>
      <button type="submit" @click.prevent="submitData">Add User</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      enteredName: '',
      enteredAge: '',
    };
  },
  emits: ['add-user'],
  methods: {
    submitData() {
      if (this.enteredName === '' || this.enteredAge === '') {
        return;
      }

      this.$.emit('add-user', this.enteredName, this.enteredAge);
    },
  },
};
</script>
