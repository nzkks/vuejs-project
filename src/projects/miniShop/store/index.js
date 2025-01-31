import { createStore } from 'vuex';

import rootMutations from './rootMutations';
import rootActions from './rootActions';
import rootGetters from './rootGetters';

import cartModule from './modules/cart/index';
import productsModule from './modules/products';

export default createStore({
  modules: {
    prods: productsModule,
    cart: cartModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});
