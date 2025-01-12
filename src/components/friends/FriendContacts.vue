<template>
  <section>
    <header><h1>My friends</h1></header>
    <ul>
      <friend-contact name="Jake Smith" phone-number="01234 5678 991" email-address="tLZbE@example.com" />
      <friend-contact
        name="Jane Doe"
        phone-number="01234 5678 992"
        email-address="QvWZ0@example.com"
        :is-favourite="true"
      />
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
