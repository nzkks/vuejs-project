<template>
  <section>
    <header><h1>Users</h1></header>
    <div style="display: flex; gap: 2rem; margin: 0 auto; width: 90%; max-width: 40rem">
      <div style="flex: 1"><user-data @add-user="addUser"></user-data></div>
      <div style="flex: 1"><active-user :id="id" :name="name" :age="age"></active-user></div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      name: '',
      age: '',
    };
  },
  methods: {
    addUser(name, age) {
      this.id = new Date().toISOString();
      this.name = name;
      this.age = age.toString();
    },
  },
};
</script>
