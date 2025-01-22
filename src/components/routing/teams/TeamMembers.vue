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
  props: ['teamId'],
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
    loadTeamMembers(teamId) {
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
    this.loadTeamMembers(this.teamId);

    // even though we are using "props: true" in the route, we can only access the query params when using "this.$route.query"
    // console.log(this.$route.query); // { sort: 'asc' }
  },
  beforeRouteUpdate(to, from, next) {
    console.log('TeamMembers Cmp beforeRouteUpdate');
    // console.log(to, from);
    // this.loadTeamMembers(to.params.teamId); // this is a (less effective) alternative aproach to below "watch" teamId. The reason behind this approach is less effective is, this hook is called if the component is loaded and reloaded through routing. Any way, if this approach is used, there is no need of both watch and beforeRouteUpdate
    next();
  },
  watch: {
    // watch the "teamId" prop for changes.
    teamId(newId) {
      this.loadTeamMembers(newId);
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
