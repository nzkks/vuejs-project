import counterMutations from './counterMutations.js';
import counterActions from './counterActions.js';
import counterGetters from './counterGetters.js';

export default {
  // modules have their own local state. So all the other properties like getters, mutations and actions are merged into the global object. So modules must have unique names for the getters, mutations and actions to avoid conflicts.
  // Through context parameter, all the action methods have access to local getters, state, commit and dispatch along with the getters and state from the root using rootGetters and rootState
  // Through parameters, all the getter methods have access to local state and getters along with the state and getters from root using rootGetters and rootState
  namespaced: true, // If set to true, getters, mutations and actions are scoped to the module. Meaning, it is completely detached from the global store.
  state() {
    return {
      counter: 0,
    };
  },
  mutations: counterMutations,
  actions: counterActions,
  getters: counterGetters,
};
