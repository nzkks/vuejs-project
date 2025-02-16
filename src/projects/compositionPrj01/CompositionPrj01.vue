<script setup>
import { ref } from 'vue';

import USER_DATA from './dummy-data.js';

import UserList from './components/users/UserList.vue';
import ProjectsList from './components/projects/ProjectsList.vue';

const selectedUser = ref(null);
const activeUsers = ref(USER_DATA);

const selectUser = uid => {
  selectedUser.value = activeUsers.value.find(usr => usr.id === uid);
};
</script>

<template>
  <base-header>Users and Projects</base-header>
  <main>
    <user-list :users="activeUsers" @list-projects="selectUser"></user-list>
    <projects-list :user="selectedUser"></projects-list>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: space-around;
}
</style>
