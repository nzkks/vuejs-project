<template>
  <section>
    <BaseCard>
      <template v-slot:header>
        <h3>{{ fullName }}</h3>
        <BaseBadge :type="role" :caption="role.toUpperCase()" />
      </template>

      <p>{{ infoText }}</p>
    </BaseCard>
  </section>
</template>

<script>
import BaseCard from './BaseCard.vue';

export default {
  components: { BaseCard },
  props: ['fullName', 'infoText', 'role'],
};
</script>

<style scoped>
section header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
