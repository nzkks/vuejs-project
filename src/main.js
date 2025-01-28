import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

// import FriendContacts from './components/friends/FriendContacts.vue';
// import FriendContact from './components/friends/FriendContact.vue';
// import CreateFriendContact from './components/friends/CreateFriendContact.vue';

// import UsersWrapper from './components/users/UsersWrapper.vue';
// import UserData from './components/users/UserData.vue';
// import ActiveUser from './components/users/ActiveUser.vue';

// import KnowledgeTopics from './components/topics/KnowledgeTopics.vue';
// import ActiveElement from './components/topics/ActiveElement.vue';
// import KnowledgeBase from './components/topics/KnowledgeBase.vue';
// import KnowledgeElement from './components/topics/KnowledgeElement.vue';
// import KnowledgeGrid from './components/topics/KnowledgeGrid.vue';

import BaseContainer from './components/ui/BaseContainer.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseCard from './components/ui/BaseCard.vue';
import BaseDialogModal from './components/ui/BaseDialogModal.vue';

// import router from './components/routing/router.js';
import router from './components/animationsAndTransitions/router.js';

const counterModule = {
  // modules have their own local state. So all the other properties like getters, mutations and actions are merged into the global object. So modules must have unique names for the getters, mutations and actions to avoid conflicts.
  // Through context parameter, all the action methods have access to local getters, state, commit and dispatch along with the getters and state from the root using rootGetters and rootState
  // Through parameters, all the getter methods have access to local state and getters along with the state and getters from root using rootGetters and rootState
  namespaced: true, // If set to true, getters, mutations and actions are scoped to the module. Meaning, it is completely detached from the global store.
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 1;
    },
    increaseBy10(state, payload) {
      // payload name is arbitrary
      // It can be a string, number, object, array, etc. In this case it is an object with a value property. The name 'value' is also arbitrary.
      state.counter = state.counter + payload.value;
    },
  },
  actions: {
    // Since the actions are in the middle of the mutations and the components, naming the action the same as the mutation is a good idea. But it can be anything.
    increment(context) {
      // console.log('action context', context);
      // example asyncronous code. Typically http requests like data fetching, etc
      setTimeout(() => {
        context.commit('increment'); // Here 'increment' refers the actual name of the mutation
      }, 1000);
    },
    increaseBy10(context, payload) {
      setTimeout(() => {
        context.commit('increaseBy10', payload); // Here 'increaseBy10' refers the actual name of the mutation
      }, 1000);
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 3;
    },
    normalizedCounter(state, getters, rootState, rootGetters) {
      console.log({ state, getters, rootState, rootGetters });
      const nCounter = getters.finalCounter;
      if (nCounter < 0) {
        return 0;
      }

      if (nCounter > 100) {
        return 100;
      }

      return nCounter;
    },
  },
};

const store = createStore({
  modules: {
    // module name can be anything.
    // If the module is specified with namespaced: true, then this name is called the namespace. Once namespaced, then all the methods should be called with the namespace mentioned wherever it is used.
    numbers: counterModule,
  },
  state() {
    return {
      isAuthenticated: false,
    };
  },
  mutations: {
    // Mutations shouldn't be running any asynchronous code. Because mutations are synchronous.
    toggleIsAuthenticated(state, payload) {
      if (payload.isAuth) {
        state.isAuthenticated = true;
      } else {
        state.isAuthenticated = false;
      }
    },
  },
  actions: {
    // Actions can run the mutations asyncronously
    login(context) {
      setTimeout(() => {
        context.commit('toggleIsAuthenticated', { isAuth: true });
      }, 1000);
    },
    logout(context) {
      setTimeout(() => {
        context.commit('toggleIsAuthenticated', { isAuth: false });
      }, 1000);
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated;
    },
  },
});

const app = createApp(App);

// app.component('users-wrapper', UsersWrapper);
// app.component('user-data', UserData);
// app.component('active-user', ActiveUser);

// app.component('friend-contacts', FriendContacts);
// app.component('friend-contact', FriendContact);
// app.component('create-friend-contact', CreateFriendContact);

// app.component('knowledge-topics', KnowledgeTopics);
// app.component('active-element', ActiveElement);
// app.component('knowledge-base', KnowledgeBase);
// app.component('knowledge-element', KnowledgeElement);
// app.component('knowledge-grid', KnowledgeGrid);

app.component('BaseContainer', BaseContainer);
app.component('BaseBadge', BaseBadge);
app.component('BaseButton', BaseButton);
app.component('BaseCard', BaseCard);
app.component('BaseDialogModal', BaseDialogModal);

app.use(router);
app.use(store);

app.mount('#app');
