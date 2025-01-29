export default {
  // Actions can run the mutations asyncronously
  login(context) {
    setTimeout(() => {
      context.commit('toggleIsAuthenticated', { isAuth: true });
    }, 1000);
  },
  logout(context) {
    setTimeout(() => {
      context.commit('toggleIsAuthenticated', { isAuth: false });
    }, 1000);
  },
};
