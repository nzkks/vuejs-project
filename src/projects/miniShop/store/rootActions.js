export default {
  login(context) {
    context.commit('toggleIsLoggedIn', { isAuth: true });
  },
  logout(context) {
    context.commit('toggleIsLoggedIn', { isAuth: false });
  },
};
