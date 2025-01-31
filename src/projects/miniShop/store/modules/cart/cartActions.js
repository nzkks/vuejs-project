export default {
  addProductToCart(context, payload) {
    const { prodId } = payload;
    const products = context.rootGetters['prods/products'];
    const product = products.find(prod => prod.id === prodId);
    if (!product) {
      return;
    }

    context.commit('addProduct', product);
  },
  removeProductFromCart(context, payload) {
    context.commit('removeProduct', payload);
  },
};
