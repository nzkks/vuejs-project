export default {
  increment(state) {
    state.counter = state.counter + 1;
  },
  increaseBy10(state, payload) {
    // payload name is arbitrary
    // It can be a string, number, object, array, etc. In this case it is an object with a value property. The name 'value' is also arbitrary.
    state.counter = state.counter + payload.value;
  },
};
