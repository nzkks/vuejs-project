<template>
  <header>
    <h1>
      <router-link to="/">VueX Mini Shop</router-link>
    </h1>
    <nav>
      <ul>
        <li>
          <router-link to="/products">Products</router-link>
        </li>
        <li>
          <router-link to="/cart">Cart</router-link>
          <base-badge mode="elegant">{{ cartQty }}</base-badge>
        </li>
        <li v-if="isLoggedIn">
          <router-link to="/admin">Admin</router-link>
        </li>
      </ul>
    </nav>
    <div>
      <BaseButton v-if="!isLoggedIn" @click="login" mode="outline">Login</BaseButton>
      <BaseButton v-else @click="logout" mode="outline">Logout</BaseButton>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['isLoggedIn']),
    ...mapGetters('cart', ['cartQty']),
  },
  methods: {
    ...mapActions(['login', 'logout']),
  },
};
</script>

<style scoped>
header {
  height: 5rem;
  background-color: white;
  margin: 0 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: center;
  align-items: center;
}

li {
  margin: 0 1rem;
}

a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  border-bottom: 2px solid transparent;
  padding-bottom: 0.25rem;
}

a:hover,
a:active,
a.router-link-active {
  color: #002a6d;
  border-color: #002a6d;
}

button {
  font: inherit;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  border: 1px solid #002a6d;
  background-color: transparent;
  color: #002a6d;
  border-radius: 30px;
}

button:hover,
button:active {
  background-color: #d5e1ff;
}
</style>
