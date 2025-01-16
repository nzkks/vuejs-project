<template>
  <li>
    <div>
      <header>
        <h3>{{ resource.title }}</h3>
        <button>Delete</button>
      </header>
    </div>
    <p>{{ resource.description }}</p>
    <nav>
      <a :href="resource.link">Go to Resource</a>
    </nav>
  </li>
</template>

<script>
export default {
  props: ['resource'],
};
</script>
