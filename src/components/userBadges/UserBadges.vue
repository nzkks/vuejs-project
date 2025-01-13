<template>
  <div>
    <TheHeader />
    <BadgeList />
    <UserInfo :full-name="activeUser.name" :info-text="activeUser.description" :role="activeUser.role" />
  </div>
</template>

<script>
import TheHeader from './TheHeader.vue';
import UserInfo from './UserInfo.vue';
import BadgeList from './BadgeList.vue';

export default {
  components: { BadgeList, TheHeader, UserInfo },
  data() {
    return {
      activeUser: {
        name: 'John Doe',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script>
