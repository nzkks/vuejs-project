import { createApp } from 'vue';

import App from './App.vue';
// import FriendContacts from './components/friends/FriendContacts.vue';
// import FriendContact from './components/friends/FriendContact.vue';
// import CreateFriendContact from './components/friends/CreateFriendContact.vue';

import UsersWrapper from './components/users/UsersWrapper.vue';
import UserData from './components/users/UserData.vue';
import ActiveUser from './components/users/ActiveUser.vue';

const app = createApp(App);

app.component('users-wrapper', UsersWrapper);
app.component('user-data', UserData);
app.component('active-user', ActiveUser);

// app.component('friend-contacts', FriendContacts);
// app.component('friend-contact', FriendContact);
// app.component('create-friend-contact', CreateFriendContact);
app.mount('#app');
