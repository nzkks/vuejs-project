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

const store = createStore({
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
  getters: {
    finalCounter(state) {
      return state.counter * 3;
    },
    normalizedCounter(state) {
      const nCounter = state.counter * 3;
      if (nCounter < 0) {
        return 0;
      }

      if (nCounter > 100) {
        return 100;
      }

      return nCounter;
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
