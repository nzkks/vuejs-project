<script>
import USER_DATA from './dummy-data.js';

import UserList from './components/users/UserList.vue';
import ProjectsList from './components/projects/ProjectsList.vue';

export default {
  components: {
    UserList,
    ProjectsList,
  },
  data() {
    return {
      selectedUser: null,
      activeUsers: USER_DATA,
    };
  },
  methods: {
    selectUser(uid) {
      this.selectedUser = this.activeUsers.find(usr => usr.id === uid);
    },
  },
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
