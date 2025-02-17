<script>
import { toRefs } from 'vue';

import UserItem from './UserItem.vue';
import useSearch from '../../hooks/search.js';
import useSort from '../../hooks/sort.js';

export default {
  components: {
    UserItem,
  },
  props: ['users'],
  emits: ['list-projects'],
  setup(props) {
    const { users } = toRefs(props);

    const { enteredSearchTerm, availableItems, updateSearch } = useSearch(users, 'fullName');
    const { displayedItems, sorting, sort } = useSort(availableItems, 'fullName');

    return {
      enteredSearchTerm,
      sorting,
      displayedUsers: displayedItems,
      updateSearch,
      sort,
    };
  },
};
</script>

<template>
  <base-container>
    <h2>Active Users</h2>
    <base-search @search="updateSearch" :search-term="enteredSearchTerm"></base-search>
    <div>
      <base-button @click="sort('asc')" :class="{ selected: sorting === 'asc' }">Sort Ascending</base-button>
      <base-button @click="sort('desc')" :class="{ selected: sorting === 'desc' }">Sort Descending</base-button>
    </div>
    <ul>
      <user-item
        v-for="user in displayedUsers"
        :key="user.id"
        :user-name="user.fullName"
        :id="user.id"
        @list-projects="$emit('list-projects', $event)"
      ></user-item>
    </ul>
  </base-container>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
