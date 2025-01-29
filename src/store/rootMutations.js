export default {
  // Mutations shouldn't be running any asynchronous code. Because mutations are synchronous.
  toggleIsAuthenticated(state, payload) {
    if (payload.isAuth) {
      state.isAuthenticated = true;
    } else {
      state.isAuthenticated = false;
    }
  },
};
