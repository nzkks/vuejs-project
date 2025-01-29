export default {
  finalCounter(state) {
    return state.counter * 3;
  },
  normalizedCounter(state, getters, rootState, rootGetters) {
    console.log({ state, getters, rootState, rootGetters });
    const nCounter = getters.finalCounter;
    if (nCounter < 0) {
      return 0;
    }

    if (nCounter > 100) {
      return 100;
    }

    return nCounter;
  },
};
