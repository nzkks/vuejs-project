<template>
  <BaseCard>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" id="title" name="title" ref="titleInput" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea id="description" name="description" ref="descInput" />
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input type="url" id="link" name="link" ref="linkInput" />
      </div>
      <div>
        <BaseButton type="submit">Add Resource</BaseButton>
      </div>
    </form>
  </BaseCard>

  <teleport to="body">
    <BaseDialogModal v-if="areInputsInvalid">
      <template #title>
        <h2>Invalid Input</h2>
      </template>
      <template #text>
        <p>Please enter at least few characters...</p>
      </template>
      <template #actions>
        <BaseButton @click="areInputsInvalid = false">Close</BaseButton>
      </template>
    </BaseDialogModal>
  </teleport>
</template>

<script>
export default {
  name: 'AddResource',
  inject: ['addResource'],
  data() {
    return {
      areInputsInvalid: false,
    };
  },
  methods: {
    submitData() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDesc = this.$refs.descInput.value;
      const enteredLink = this.$refs.linkInput.value;

      if (enteredTitle === '' || enteredDesc === '' || enteredLink === '') {
        this.areInputsInvalid = true;
      } else {
        this.addResource(enteredTitle, enteredDesc, enteredLink);
        this.areInputsInvalid = false;
      }
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
