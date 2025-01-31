import cartMutations from './cartMutations.js';
import cartActions from './cartActions.js';
import cartGetters from './cartGetters.js';

export default {
  namespaced: true,
  state() {
    return {
      cart: { items: [], total: 0, qty: 0 },
    };
  },
  mutations: cartMutations,
  actions: cartActions,
  getters: cartGetters,
};
