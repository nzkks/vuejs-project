<template>
  <div>
    <BaseHeader>More on Vue Components</BaseHeader>
    <BadgeList />
    <UserInfo :full-name="activeUser.name" :info-text="activeUser.description" :role="activeUser.role" />
    <CourseGoals #default="slotProps">
      <h2>{{ slotProps.item }}</h2>
      <p>{{ slotProps.anotherProp }}</p>
      <p style="color: red">{{ slotProps['additionalProp'] }}</p>
    </CourseGoals>
  </div>
</template>

<script>
import BaseHeader from '../layout/BaseHeader.vue';
import UserInfo from './UserInfo.vue';
import BadgeList from './BadgeList.vue';
import CourseGoals from './CourseGoals.vue';

export default {
  components: { BadgeList, CourseGoals, BaseHeader, UserInfo },
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
