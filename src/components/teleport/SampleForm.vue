<template>
  <h2>Create a Goal</h2>

  <div style="padding: 20px">
    <label for="title">Title</label>
    <input type="text" id="title" name="title" ref="goalInput" />
    <button @click="setGoal">Add Goal</button>
  </div>

  <teleport to="body">
    <BaseDialogModal v-if="isInputInvalid" title="Invalid Input" @close="confirmError">
      <template #default>
        <p>Please enter at least few characters...</p>
      </template>
      <template #actions>
        <button @click="confirmError">Close</button>
      </template>
    </BaseDialogModal>
  </teleport>
</template>

<script>
export default {
  name: 'SampleForm',
  data() {
    return {
      goal: '',
      isInputInvalid: false,
    };
  },
  methods: {
    setGoal() {
      const enteredGoal = this.$refs.goalInput.value;

      if (enteredGoal === '') {
        this.isInputInvalid = true;
      } else {
        this.goal = enteredGoal;
      }
    },
    confirmError() {
      this.isInputInvalid = false;
    },
  },
};
</script>
