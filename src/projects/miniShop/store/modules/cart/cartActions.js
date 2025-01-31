export default {
  addProductToCart(context, payload) {
    context.commit('addProduct', payload);
  },
  removeProductFromCart(context, payload) {
    context.commit('removeProduct', payload);
  },
};
