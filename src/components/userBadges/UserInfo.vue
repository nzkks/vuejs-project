<template>
  <section>
    <BaseCard>
      <template v-slot:header>
        <h3>{{ fullName }}</h3>
        <BaseBadge :type="role" :caption="role.toUpperCase()" />
      </template>

      <template v-slot:default>
        <p>{{ infoText }}</p>
      </template>
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
