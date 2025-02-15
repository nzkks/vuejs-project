<script>
export default {
  data() {
    return {
      availableFunds: 100,
      currentExpenses: 0,
      enteredExpense: 0,
    };
  },
  computed: {
    remainingFunds() {
      return this.availableFunds - this.currentExpenses;
    },
  },
  methods: {
    addExpense() {
      this.currentExpenses += this.enteredExpense;
    },
  },
  watch: {
    remainingFunds(val) {
      if (val < 0) {
        alert('You are broke!');
      }
    },
  },
};
</script>

<template>
  <header>
    <h1>Expense Tracker</h1>
  </header>
  <section>
    <div>Available Funds: {{ availableFunds }}</div>
    <div>Total Expenses: {{ currentExpenses }}</div>
    <hr />
    <div>Funds left: {{ remainingFunds }}</div>
  </section>
  <section>
    <form @submit.prevent="addExpense">
      <div>
        <label for="amount">Amount</label>
        <input id="amount" type="number" v-model="enteredExpense" />
      </div>
      <base-button>Add Expense</base-button>
    </form>
  </section>
</template>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
header {
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00256e;
  color: white;
}
section {
  margin: 2rem auto;
  max-width: 35rem;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
}

form div {
  margin: 1rem 0;
}
input {
  width: 100%;
  padding: 0.15rem;
}
label {
  font-weight: bold;
  margin: 0.5rem 0;
}
</style>
