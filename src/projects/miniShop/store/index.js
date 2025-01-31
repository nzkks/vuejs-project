import { createStore } from 'vuex';

import rootMutations from './rootMutations';
import rootActions from './rootActions';
import rootGetters from './rootGetters';

export default createStore({
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});
