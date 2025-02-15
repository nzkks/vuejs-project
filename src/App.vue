<template>
  <!-- <friend-contacts /> -->
  <!-- <users-wrapper /> -->
  <!-- <knowledge-topics /> -->
  <!-- <UserBadges /> -->
  <!-- <DynamicComponents /> -->
  <!-- <SampleForm /> -->
  <!-- <LearningResources /> -->
  <!-- <TheForm /> -->
  <!-- <SurveyHome /> -->
  <!-- <RoutingExample /> -->
  <!-- <AnimationsAndTransitions /> -->
  <!-- <VuexExample /> -->
  <!-- <MiniShop /> -->
  <!-- <CompositionBasic /> -->
  <!-- <CourseGoalsOptionsAPI /> -->
  <CourseGoalsCompositionAPI />
</template>

<script>
import CourseGoalsCompositionAPI from './projects/compositionBasic/CourseGoalsCompositionAPI.vue';
// import CourseGoalsOptionsAPI from './projects/compositionBasic/CourseGoalsOptionsAPI.vue';

// import CompositionBasic from './projects/compositionBasic/CompositionBasic.vue';

// import MiniShop from './projects/miniShop/MiniShop.vue';

// import VuexExample from './projects/vueX/VuexExample.vue';

// import SurveyHome from './projects/survey/SurveyHome.vue';

// import TheForm from './projects/advForm/TheForm.vue';
// import LearningResources from './projects/learningResources/LearningResources.vue';

// import DynamicComponents from './projects/dynamicComponents/DynamicComponents.vue';
// import SampleForm from './projects/teleport/SampleForm.vue';

// import UserBadges from './projects/userBadges/UserBadges.vue';

// import RoutingExample from './projects/routing/RoutingExample.vue';

// import AnimationsAndTransitions from './projects/animationsAndTransitions/AnimationsAndTransitions.vue';

export default {
  components: {
    CourseGoalsCompositionAPI,
    // CourseGoalsOptionsAPI,
    // CompositionBasic,
    // MiniShop,
    // UserBadges
    // DynamicComponents,
    // SampleForm,
    // LearningResources,
    // TheForm,
    // SurveyHome,
    // RoutingExample,
    // AnimationsAndTransitions,
    // VuexExample,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

/* header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #01173a;
  color: white;
  text-align: center;
  width: 100%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 100%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #001958;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #00259e;
  background-color: #044895;
  color: white;
  padding: 0.05rem 1rem;
  margin: 0.25rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #0552ab;
  border-color: #00259e;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
} */
</style>
