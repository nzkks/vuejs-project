import { createApp } from 'vue';

import App from './App.vue';

// import FriendContacts from './projects/friends/FriendContacts.vue';
// import FriendContact from './projects/friends/FriendContact.vue';
// import CreateFriendContact from './projects/friends/CreateFriendContact.vue';

// import UsersWrapper from './projects/users/UsersWrapper.vue';
// import UserData from './projects/users/UserData.vue';
// import ActiveUser from './projects/users/ActiveUser.vue';

// import KnowledgeTopics from './projects/topics/KnowledgeTopics.vue';
// import ActiveElement from './projects/topics/ActiveElement.vue';
// import KnowledgeBase from './projects/topics/KnowledgeBase.vue';
// import KnowledgeElement from './projects/topics/KnowledgeElement.vue';
// import KnowledgeGrid from './projects/topics/KnowledgeGrid.vue';

import BaseContainer from './components/ui/BaseContainer.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseCard from './components/ui/BaseCard.vue';
import BaseDialogModal from './components/ui/BaseDialogModal.vue';
import BaseSearch from './components/ui/BaseSearch.vue';

// import router from './projects/routing/router.js';
// import router from './projects/animationsAndTransitions/router.js';
// import router from './projects/miniShop/router.js';

// import store from './projects/vueX/store/index.js';
// import store from './projects/miniShop/store/index.js';

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
app.component('BaseSearch', BaseSearch);

// app.use(router);
// app.use(store);

app.mount('#app');
