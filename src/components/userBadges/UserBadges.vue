<template>
  <div>
    <TheHeader />
    <BadgeList />
    <UserInfo :full-name="activeUser.name" :info-text="activeUser.description" :role="activeUser.role" />
    <CourseGoals>
      <template #default="slotProps">
        <h2>{{ slotProps.item }}</h2>
        <p>{{ slotProps.anotherProp }}</p>
        <p style="color: red">{{ slotProps['additionalProp'] }}</p>
      </template>
    </CourseGoals>
  </div>
</template>

<script>
import TheHeader from './TheHeader.vue';
import UserInfo from './UserInfo.vue';
import BadgeList from './BadgeList.vue';
import CourseGoals from './CourseGoals.vue';

export default {
  components: { BadgeList, CourseGoals, TheHeader, UserInfo },
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
