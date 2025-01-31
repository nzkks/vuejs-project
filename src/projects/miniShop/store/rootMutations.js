export default {
  toggleIsLoggedIn(state, payload) {
    if (payload.isAuth) {
      state.isLoggedIn = true;
    } else {
      state.isLoggedIn = false;
    }
  },
};
