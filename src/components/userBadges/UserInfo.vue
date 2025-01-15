<template>
  <section>
    <BaseCard>
      <template #header>
        <h3>{{ fullName }}</h3>
        <BaseBadge :type="role" :caption="role.toUpperCase()" />
      </template>

      <template #default>
        <p>{{ infoText }}</p>
      </template>
    </BaseCard>
  </section>
</template>

<script>
import BaseCard from '../ui/BaseCard.vue';

export default {
  components: { BaseCard },
  props: ['fullName', 'infoText', 'role'],
};
</script>
