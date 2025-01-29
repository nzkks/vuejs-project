import { createStore } from 'vuex';

import rootMutations from './rootMutations';
import rootActions from './rootActions';
import rootGetters from './rootGetters';

import counterModule from './modules/counter/index';

const store = createStore({
  modules: {
    // module name can be anything.
    // If the module is specified with namespaced: true, then this name is called the namespace. Once namespaced, then all the methods should be called with the namespace mentioned wherever it is used.
    numbers: counterModule,
  },
  state() {
    return {
      isAuthenticated: false,
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});

export default store;
