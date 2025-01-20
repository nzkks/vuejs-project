<template>
  <the-navigation @set-page="setActivePage"></the-navigation>
  <main>
    <component :is="activePage"></component>
  </main>
</template>

<script>
import TeamsList from './teams/TeamsList.vue';
import UsersList from './users/UsersList.vue';
import TheNavigation from './nav/TheNavigation.vue';

export default {
  components: {
    TheNavigation,
    TeamsList,
    UsersList,
  },
  data() {
    return {
      activePage: 'teams-list',
      teams: [
        { id: 't1', name: 'Frontend Engineers', members: ['u1', 'u2'] },
        { id: 't2', name: 'Backend Engineers', members: ['u1', 'u2', 'u3'] },
        { id: 't3', name: 'Client Consulting', members: ['u4', 'u5'] },
      ],
      users: [
        { id: 'u1', fullName: 'Tony Stark', role: 'Engineer' },
        { id: 'u2', fullName: 'Natasha Romanoff', role: 'Engineer' },
        { id: 'u3', fullName: 'Thor', role: 'Engineer' },
        { id: 'u4', fullName: 'Steve Rogers', role: 'Consultant' },
        { id: 'u5', fullName: 'Bruce Banner', role: 'Consultant' },
      ],
    };
  },
  provide() {
    return {
      teams: this.teams,
      users: this.users,
    };
  },
  methods: {
    setActivePage(page) {
      this.activePage = page;
    },
  },
};
</script>
