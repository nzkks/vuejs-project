<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item v-for="member in members" :key="member.id" :name="member.fullName" :role="member.role"></user-item>
    </ul>

    <!-- Example scenario -->
    <RouterLink to="/teams/t2">Go to Team 2</RouterLink>
  </section>
</template>

<script>
import { RouterLink } from 'vue-router';
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['teams', 'users'],
  components: {
    UserItem,
    RouterLink,
  },
  data() {
    return {
      teamName: '',
      members: [],
    };
  },
  methods: {
    loadTeamMembers(route) {
      const teamId = route.params.teamId;
      const selectedTeam = this.teams.find(team => team.id === teamId);
      const members = selectedTeam.members;

      const selectedMembers = [];
      for (const member of members) {
        const selectedUser = this.users.find(user => user.id === member);
        selectedMembers.push(selectedUser);
      }
      this.members = selectedMembers;
      this.teamName = selectedTeam.name;
    },
  },
  created() {
    // this.$route.path.startsWith('/teams/t1');
    this.loadTeamMembers(this.$route);
  },
  watch: {
    // Vue router does not destroy and rebuild the loaded components when navigated around. It is more efficient to cache them when the URL changes. But the $route property always have the latest info on the loaded route and it will update when the URL changes. One way of handling this is to watch the $route property.
    $route(newRoute) {
      this.loadTeamMembers(newRoute);
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
