<template>
  <h2>Create a Goal</h2>

  <div style="padding: 20px">
    <label for="title">Title</label>
    <input type="text" id="title" name="title" ref="goalInput" />
    <button @click="setGoal">Add Goal</button>
  </div>

  <teleport to="body">
    <BaseDialogModal v-if="isInputInvalid">
      <h2>Input is invalid!</h2>
      <p>Please enter at least few characters...</p>
      <button @click="isInputInvalid = false">Close</button>
    </BaseDialogModal>
  </teleport>
</template>

<script>
import BaseDialogModal from '../ui/BaseDialogModal.vue';

export default {
  name: 'SampleForm',
  components: { BaseDialogModal },
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
  },
};
</script>
