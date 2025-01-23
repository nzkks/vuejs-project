<template>
  <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <BaseButton @click="animateBlock">Animate</BaseButton>
  </div>

  <div class="container">
    <!-- Use Vue's Transition element to wrap to achieve the enter/exit animation. Especially exit animation which was not possible because there was no element in the DOM to animate  -->
    <Transition
      :css="false"
      @before-enter="paraBeforeEnter"
      @enter="paraEnter"
      @after-enter="paraAfterEnter"
      @before-leave="paraBeforeLeave"
      @leave="paraLeave"
      @after-leave="paraAfterLeave"
      @enter-cancelled="paraEnterCancelled"
      @leave-cancelled="paraLeaveCancelled"
    >
      <p v-if="paragraphIsVisible">This is only sometimes visible</p></Transition
    >

    <!-- Instead of using the name attribute, we can also customize the enter and leave classes. So any third party animation classes can be used. -->
    <!-- <Transition enter-active-class="animate" leave-active-class="animate"> <p v-if="paragraphIsVisible">This is only sometimes visible</p></Transition> -->
    <BaseButton @click="toggleParagraph">Toggle Paragraph</BaseButton>
  </div>

  <div class="container">
    <!-- Even though Vue.js's Transition element can have just one direct child element, there can be multiple children as long as only one will be available anytime in the DOM -->
    <transition name="fade-button" mode="out-in">
      <BaseButton @click="showUsers" v-if="!usersAreVisible">Show Users</BaseButton>
      <BaseButton @click="hideUsers" v-else>Hide Users</BaseButton>
    </transition>
  </div>

  <div class="container">
    <SuperHero />
  </div>

  <BaseDialogModal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <BaseButton @click="hideDialog">Close it!</BaseButton>
  </BaseDialogModal>

  <div class="container">
    <BaseButton @click="showDialog">Show Dialog</BaseButton>
  </div>
</template>

<script>
import SuperHero from './SuperHeros.vue';

export default {
  components: { SuperHero },
  data() {
    return {
      animatedBlock: false,
      dialogIsVisible: false,
      paragraphIsVisible: false,
      usersAreVisible: false,
      enterInterval: null,
      leaveInterval: null,
    };
  },
  methods: {
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
    toggleParagraph() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
    },
    // during the entering/exiting transitions, if the transacton gets cancelled, both entering/exiting transactions runs simultaneously which causes flickering. So we need to add enter-cancelled and leave-cancelled event handlers
    paraEnterCancelled(el) {
      console.log('para enter cancelled');
      console.log(el);
      clearInterval(this.enterInterval);
    },
    paraLeaveCancelled(el) {
      console.log('para leave cancelled');
      console.log(el);
      clearInterval(this.leaveInterval);
    },
    paraBeforeEnter(el) {
      console.log('para before enter');
      console.log(el);
      el.style.opacity = 0;
    },
    paraEnter(el, done) {
      console.log('para enter');
      console.log(el);
      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.enterInterval);
          done(); // Vue will make sure that the next transition (paraAfterEnter) will be called only after done()
        }
      }, 20);
    },
    paraAfterEnter(el) {
      console.log('para after enter');
      console.log(el);
    },
    paraBeforeLeave(el) {
      console.log('para before leave');
      console.log(el);
      el.style.opacity = 1;
    },
    paraLeave(el, done) {
      console.log('para leave');
      console.log(el);
      let round = 1;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.leaveInterval);
          done(); // Vue will make sure that the next transition (paraAfterEnter) will be called only after done()
        }
      }, 20);
    },
    paraAfterLeave(el) {
      console.log('para after leave');
      console.log(el);
    },
    animateBlock() {
      this.animatedBlock = true;

      setTimeout(() => {
        this.animatedBlock = false;
      }, 1500);
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
};
</script>

<style scoped>
.block {
  width: 8rem;
  height: 8rem;
  background-color: #001533;
  margin-bottom: 2rem;
  transition: transform 0.3s ease-out;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}

.animate {
  animation: slide-scale 0.3s ease-out forwards;
}

@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }
  70% {
    transform: translateX(-120px) scale(1.4);
  }
  100% {
    transform: translateX(-150px) scale(1);
  }
}

@keyframes appearance {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
